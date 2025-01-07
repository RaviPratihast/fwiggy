import { useFetchRestaurants } from "../CustomHooks/useFetchRestaurants";
import { RestaurantsURL } from "../apiEndpoints/apiEndPoints";
import { RestaurantCard } from "./index-component";

const Body = () => {
  const { data, error, loading } = useFetchRestaurants(RestaurantsURL);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const restaurants =
    data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 px-4">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.info.id}
          name={restaurant.info.name}
          image={restaurant.info.cloudinaryImageId}
          rating={restaurant.info.avgRating}
          time={restaurant.info.sla.slaString}
          cuisines={restaurant.info.cuisines}
        />
      ))}
    </div>
  );
};

export { Body };
