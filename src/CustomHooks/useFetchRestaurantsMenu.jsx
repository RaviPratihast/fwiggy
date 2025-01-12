import { useState, useEffect } from "react";
// import { MenuURL } from "../apiEndpoints/apiEndPoints";

const useFetchRestaurantMenu = (menuId) => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const data = await fetch(
          `/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${menuId}`
        );

        const json = await data.json();
        setMenu(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [menuId]);

  return { menu, loading, error };
};

export default useFetchRestaurantMenu;
