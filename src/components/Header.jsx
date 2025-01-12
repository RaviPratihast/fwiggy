import { useState } from "react";
import { Navbar, CartSidebar } from "./index-component";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <>
      <Navbar onCartClick={handleCartToggle} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export { Header };
