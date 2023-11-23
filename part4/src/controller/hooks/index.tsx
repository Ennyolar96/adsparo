import { useEffect, useState } from "react";

export default function useFetch() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const endpoint = "https://dummyjson.com/products";
      const option = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const req = await fetch(endpoint, option);
      const { products } = await req.json();

      setData(products);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, data };
}
