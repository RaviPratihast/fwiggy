import { useEffect, useState } from "react";
import { RestaurantsURL } from "../apiEndpoints/apiEndPoints";
import { RestaurantCard } from "./index-component";
const Body = () => {
  const [dataGot, setDataGot] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RestaurantsURL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setDataGot(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // console.log("data", dataGot.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info);
  const restaurants =
    dataGot?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];
  // console.log(restaurants[1]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 px-4">
      {restaurants.map((restaurant) => {
        console.log("Rendering restaurant:", restaurant.info.name);
        return (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            image={restaurant.info.cloudinaryImageId}
            rating={restaurant.info.avgRating}
            time={restaurant.info.sla.slaString}
            cuisines={restaurant.info.cuisines}
          />
        );
      })}
    </div>
  );
};

export { Body };
