import { useEffect, useState } from "react";

export const useFetchRestaurants = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const ApiKey = "3bc05cf4e4e3ea9f";
  const EDUCORS_URL = "https://educorssolver.host/api/getData";

  const proxyUrl = `${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(
    url
  )}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(proxyUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [proxyUrl]);

  return { data, error, loading };
};
