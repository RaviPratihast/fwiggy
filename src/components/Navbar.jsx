import { ShoppingCart, User, Menu } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = ({ onCartClick }) => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">Fwiggy</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick} 
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6 text-gray-700" />
            </button>

            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
