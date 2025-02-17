import { Link } from "react-router-dom";
import { useFetchRestaurants } from "../CustomHooks/useFetchRestaurants";
import { RestaurantsURL } from "../apiEndpoints/apiEndPoints";
import { RestaurantCard, ShimmerForRestaurant } from "./index-component";
import { useState } from "react";

const Restaurants = () => {
  const { data, error, loading } = useFetchRestaurants(RestaurantsURL);
  const [searchTerm, setSearchTerm] = useState("");
  const [showTopRated, setShowTopRated] = useState(false);

  if (loading) return <ShimmerForRestaurant />;
  if (error) return <div>Error: {error}</div>;

  const restaurants =
    data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];


  const filteredRestaurants = showTopRated
    ? restaurants.filter((restaurant) => restaurant.info.avgRating > 4.3)
    : searchTerm
    ? restaurants.filter((restaurant) =>
        restaurant.info.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : restaurants;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setShowTopRated(false); 
  };

  const toggleTopRated = () => {
    setShowTopRated(!showTopRated);
    setSearchTerm("");
  };

  return (
    <div className="mt-20 px-4">
      
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6 items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by cuisines..."
          className="px-3 py-2 w-full md:w-96 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={toggleTopRated}
          className={`px-4 py-2 text-sm rounded-lg ${
            showTopRated
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-orange-200"
          } transition-colors`}
        >
          {showTopRated ? "Show All" : "Top Rated"}
        </button>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={
              restaurant?.info?.id
                ? `/menu/${restaurant.info.id}`
                : "/menu/default"
            }
            key={restaurant.info.id}
          >
            <RestaurantCard
              name={restaurant.info.name}
              image={restaurant.info.cloudinaryImageId}
              rating={restaurant.info.avgRating}
              time={restaurant.info.sla.slaString}
              cuisines={restaurant.info.cuisines}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Restaurants };
