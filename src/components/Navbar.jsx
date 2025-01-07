import { ShoppingCart, User, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Section */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">Fwiggy</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Commenting out navigation links for now */}
            {/* <a href="/" className="text-gray-700 hover:text-orange-500">Home</a>
            <a href="/menu" className="text-gray-700 hover:text-orange-500">Menu</a>
            <a href="/orders" className="text-gray-700 hover:text-orange-500">Orders</a> */}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
            //   onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {/* Badge for cart items */}
              {/* {state.items.length > 0 && (
                <span className="absolute top-0 right-0 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {state.items.length}
                </span>
              )} */}
            </button>

            {/* User Profile Button */}
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6 text-gray-700" />
            </button>

            {/* Hamburger for mobile devices */}
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
