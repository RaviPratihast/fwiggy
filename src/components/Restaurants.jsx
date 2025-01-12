import { Link } from "react-router-dom";
import { useFetchRestaurants } from "../CustomHooks/useFetchRestaurants";
import { RestaurantsURL } from "../apiEndpoints/apiEndPoints";
import { RestaurantCard } from "./index-component";

const Restaurants = () => {
  // const { data, error, loading } = useFetchRestaurants('/api/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
  const { data, error, loading } = useFetchRestaurants(RestaurantsURL);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const restaurants =
    data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 px-4">
      {restaurants.map((restaurant) => (
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
  );
};

export { Restaurants };
