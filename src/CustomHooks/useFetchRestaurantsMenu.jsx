import { useState, useEffect } from "react";
import { MenuURL } from "../apiEndpoints/apiEndPoints";

const useFetchRestaurantMenu = (menuId) => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ApiKey = "3bc05cf4e4e3ea9f"; // Replace with your actual API key
  const EDUCORS_URL = "https://educorssolver.host/api/getData";

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);

        // Construct the proxy URL
        const targetUrl = `${MenuURL}${menuId}`;
        const proxyUrl = `${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(targetUrl)}`;

        // Fetch the data using the proxy
        const response = await fetch(proxyUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
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
