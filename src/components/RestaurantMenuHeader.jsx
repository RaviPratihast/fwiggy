const RestaurantMenuHeader = ({ restaurantInfo }) => {
  const { name, rating, totalRatings, priceForTwo, cuisines } = restaurantInfo;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-20 ">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>

      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">
          ★ {rating}
        </span>
        <span className="text-gray-600 text-sm">{totalRatings} ratings</span>
      </div>

      <p className="text-gray-700 mb-2">{priceForTwo} for two</p>

      <p className="text-gray-600 text-sm">Cuisines: {cuisines.join(", ")}</p>
    </div>
  );
};

export { RestaurantMenuHeader };
