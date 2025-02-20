import { ShoppingCart, User, Menu } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = ({ onCartClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Successfully signed Out!");
        navigate("/");
      })
      .catch((error) => {});
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">Fwiggy</span>
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <>
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

                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="p-2 hover:bg-gray-100 rounded-full focus:outline-none"
                  >
                    <User className="h-6 w-6 text-gray-700" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg border">
                      <div className="relative flex items-center py-2 px-4">
                        {user?.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt="User Profile"
                            className="w-10 h-10 rounded-full border"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                        )}
                        <span className="font-medium text-gray-700 ml-4">
                          {user?.displayName || "Guest"}
                        </span>
                      </div>

                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-white bg-orange-500 hover:bg-orange-600 rounded-b-lg"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
