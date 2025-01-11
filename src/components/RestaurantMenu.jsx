import { useState } from "react";
import { useParams } from "react-router-dom";
import { ImageURL } from "../apiEndpoints/apiEndPoints";
import {
  RestaurantMenuHeader,
  RestaurantMenuItems,
  ShimmerForMenuItems,
} from "./index-component";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useFetchRestaurantMenu from "../CustomHooks/useFetchRestaurantsMenu";

const RestaurantMenu = () => {
  const [expandedCategoryIndex, setExpandedCategoryIndex] = useState(0);
  const { menuId } = useParams();
  const { menu, loading, error } = useFetchRestaurantMenu(menuId);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ShimmerForMenuItems />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  const restaurantInfo = menu?.data?.cards?.[2]?.card?.card?.info;

  const categories =
    menu?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const toggleCategory = (index) => {
    setExpandedCategoryIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex justify-center items-center min-h-screen w-9/12 bg-gray-50">
        <div className="w-full max-w-4xl">
          <RestaurantMenuHeader restaurantInfo={restaurantInfo} />
          <div>
            {categories.map((item, index) => (
              <div key={index} className="mb-8 mt-10">
                <h1
                  className="text-lg font-semibold border text-center shadow-md bg-white py-2 rounded-md cursor-pointer flex justify-between items-center px-4"
                  onClick={() => toggleCategory(index)}
                >
                  {item?.card?.card?.title}
                  {expandedCategoryIndex === index ? (
                    <FaChevronUp className="text-black" />
                  ) : (
                    <FaChevronDown className="text-black" />
                  )}
                </h1>

                {expandedCategoryIndex === index && (
                  <div className="flex flex-col items-center mt-4">
                    {item?.card?.card?.itemCards?.map((itemCard) => (
                      <RestaurantMenuItems
                        key={itemCard?.card?.info?.id}
                        itemCard={itemCard}
                        ImageURL={ImageURL}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { RestaurantMenu };
