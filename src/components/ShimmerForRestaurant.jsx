const ShimmerForRestaurant = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 px-4">
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="w-full h-72 bg-white animate-pulse rounded-lg overflow-hidden shadow-md"
          >
            <div className="w-full h-36 bg-gray-200"></div>

            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export { ShimmerForRestaurant };
