import { ImageURL } from "../apiEndpoints/apiEndPoints";

const RestaurantCard = ({ image, name, rating, time, cuisines }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={ImageURL + image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
            {rating} ★
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{cuisines.join(" , ")}</span>
        </div>
      </div>
    </div>
  );
};

export { RestaurantCard };
