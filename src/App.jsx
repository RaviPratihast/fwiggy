import {
  Header,
  Restaurants,
  RestaurantMenu,
} from "./components/index-component/";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/menu/:menuId" element={<RestaurantMenu />} />
      </Routes>
    </div>
  );
};

export default App;
