import { useState, useCallback } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (config, consumeData) => {
    setError(null);
    setIsLoading(true);
    try {
      const res = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        headers: config.headers ? config.headers : {},
        body: config.body ? JSON.stringify(config.body) : null,
      });

      if (!res.ok) {
        throw new Error(`Uh oh..something went wrong: ${res.status}`);
      } else {
        console.log(res)
        const data = await res.json();
        consumeData(data)
      }
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useFetch;
