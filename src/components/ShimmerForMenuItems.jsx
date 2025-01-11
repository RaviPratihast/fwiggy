const ShimmerForMenuItems = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="border rounded-lg p-4 shadow-md bg-white w-full mb-4 mt-20 animate-pulse">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-grow space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="flex items-center gap-2">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
            <div className="flex items-center text-sm text-green-600 font-medium">
              <div className="h-4 bg-gray-200 rounded w-12"></div>{" "}
            </div>
            <div className="mt-4 w-24 h-8 bg-gray-200 rounded-md"></div>{" "}
          </div>
        </div>
      </div>
      <div className="mb-8 mt-10">
        <h1 className="bg-green-500 text-white text-center py-2 rounded w-1/2 mx-auto mb-4"></h1>
        <div className="flex flex-col items-center mt-4 space-y-4">
          <div className="border rounded-lg p-4 shadow-md bg-white w-full mb-4 animate-pulse">
            <div className="flex justify-between items-start gap-4">
              {/* Left Side - Title, Price, Rating, Button */}
              <div className="flex-grow space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>{" "}
                {/* Name */}
                <div className="flex items-center gap-2">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>{" "}
                  {/* Price */}
                </div>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <div className="h-4 bg-gray-200 rounded w-12"></div>{" "}
                  {/* Rating */}
                </div>
                <div className="mt-4 w-24 h-8 bg-gray-200 rounded-md"></div>{" "}
                {/* Button */}
              </div>

              {/* Right Side - Image */}
              <div className="relative w-24 h-24 flex-shrink-0">
                <div className="bg-gray-200 w-full h-full rounded-lg animate-pulse"></div>{" "}
                {/* Image */}
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4 shadow-md bg-white w-full mb-4 animate-pulse">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-grow space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="flex items-center gap-2">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <div className="h-4 bg-gray-200 rounded w-12"></div>
                </div>
                <div className="mt-4 w-24 h-8 bg-gray-200 rounded-md"></div>
              </div>
              <div className="relative w-24 h-24 flex-shrink-0">
                <div className="bg-gray-200 w-full h-full rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ShimmerForMenuItems };
