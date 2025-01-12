import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeItem,
  clearItems,
} from "../Store/Slices/cartSlice";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };
  const handleCheckout = () => {
    if (onClose) {
      onClose();
    }
    dispatch(clearItems());
    navigate("/");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 mb-4 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        ₹{(item.price / 100).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t p-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">
                    {" "}
                    ₹{(total / 100).toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => handleCheckout()}
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { CartSidebar };
