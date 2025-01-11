import { TiStar } from "react-icons/ti";
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
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <div className="flex items-center">
            <span className="text-lg text-green-600">
              <TiStar />
            </span>
            <span className="text-sm font-bold">{rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold">{time}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-md text-gray-500">{cuisines.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

export { RestaurantCard };
