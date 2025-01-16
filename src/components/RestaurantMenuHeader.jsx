import { TiStar } from "react-icons/ti";
const RestaurantMenuHeader = ({ restaurantInfo }) => {
  const {
    name,
    rating,
    totalRatings,
    priceForTwo,
    costForTwo,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
  } = restaurantInfo;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 ">
      <h2 className="text-3xl font-bold mb-2">{name}</h2>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-lg text-green-600">
            <TiStar />
          </span>
          <span className="text-sm font-bold">{avgRating}</span>

          <span className="font-bold text-sm">({totalRatingsString})</span>
        </div>

        <p className=" font-bold mb-2">
          ₹{priceForTwo || costForTwo / 100} for two
        </p>
      </div>
      <p className="text-orange-600 text-sm ml-1 underline font-bold">
        {cuisines.join(", ")}
      </p>
      <div>
        <span className="text-sm font-bold ml-1">
          {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
        </span>
      </div>
    </div>
  );
};

export { RestaurantMenuHeader };
