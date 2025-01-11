import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuURL, ImageURL } from "../apiEndpoints/apiEndPoints";
import {
  RestaurantMenuHeader,
  RestaurantMenuItems,
  ShimmerForMenuItems,
} from "./index-component";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { menuId } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(`${MenuURL}${menuId}`);
        const json = await data.json();
        setMenu(json);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, [menuId]);

  const restaurantInfo = menu?.data?.cards?.[2]?.card?.card?.info;

  const categories =
    menu?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.id);
  if (!restaurantInfo) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ShimmerForMenuItems />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 ">
      <div className="flex justify-center items-center min-h-screen w-9/12 bg-gray-50 border border-red-500">
        <div className="w-full max-w-4xl">
          <RestaurantMenuHeader restaurantInfo={restaurantInfo} />
          <div>
            {categories.map((item, index) => (
              <div key={index} className="mb-8 mt-10">
                <h1 className="bg-green-500 text-white text-center py-2 rounded">
                  {item?.card?.card?.title}
                </h1>
                <div className="flex flex-col items-center mt-4">
                  {item?.card?.card?.itemCards?.map((itemCard) => (
                    <RestaurantMenuItems
                      key={itemCard?.card?.info?.id}
                      itemCard={itemCard}
                      ImageURL={ImageURL}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { RestaurantMenu };
