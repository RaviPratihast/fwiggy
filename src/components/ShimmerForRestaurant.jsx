const ShimmerForRestaurant = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="bg-gray-300 h-48 w-full"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded-md mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>
      </div>
    </div>
  );
};

export { ShimmerForRestaurant };
