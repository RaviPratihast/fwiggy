import { TiStar } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/Slices/cartSlice";

const RestaurantMenuItems = ({ itemCard, ImageURL }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div
      key={itemCard?.card?.info?.id}
      className="border rounded-lg p-4 shadow-md bg-white w-full mb-4"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-2">
            {itemCard?.card?.info?.name}
          </h2>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg font-bold ml-1">
              ₹
              {(itemCard?.card?.info?.finalPrice ||
                itemCard?.card?.info?.defaultPrice ||
                itemCard?.card?.info?.price ||
                0) / 100 || "Not Available"}
            </span>
          </div>

          <div className="flex items-center text-sm font-medium">
            <span className="text-lg text-green-600">
              <TiStar />
            </span>
            <span>
              {itemCard?.card?.info?.ratings?.aggregatedRating?.rating || 4.4}
            </span>
          </div>

          <button
            className="mt-4 w-24 text-center py-1 border border-gray-300 rounded-md text-green-600 font-medium hover:shadow-md transition-shadow"
            onClick={() =>
              handleAddToCart({
                id: itemCard.card.info.id,
                name: itemCard.card.info.name,
                price:
                  itemCard.card.info.price ||
                  itemCard?.card?.info?.defaultPrice ||
                  itemCard?.card?.info?.finalPrice,
                image: `${ImageURL}${itemCard?.card?.info?.imageId}`,
              })
            }
          >
            ADD
          </button>
        </div>
        <div className="relative w-24 h-24 flex-shrink-0">
          <img
            src={`${ImageURL}${itemCard?.card?.info?.imageId}`}
            alt={itemCard?.card?.info?.name}
            className="w-full h-full object-cover border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export { RestaurantMenuItems };
