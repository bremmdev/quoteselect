import { useState, useCallback, useEffect, useRef } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const ref = useRef()

  //abort fetch un unmount
  useEffect(() => {
    ref.current = new AbortController()
    return () => { ref.current.abort()}
  },[])

  const sendRequest = useCallback(async (config, consumeData) => {
    
    setError(null);
    setIsLoading(true);
    try {
      const res = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        headers: config.headers ? config.headers : {},
        body: config.body ? JSON.stringify(config.body) : null,
        signal: ref.current.signal
      });

      if (!res.ok) {
        throw new Error(`Uh oh..something went wrong: ${res.status}`);
      } else {
          console.log(res);
          const data = await res.json();
          consumeData(data);
        }
        setIsLoading(false);
    } catch (err) {
      //only do state updates if component is still mounted
      if (!ref.current.signal.aborted) {
        setError(err.message);
      }
    }
    
  },[]);

  return { isLoading, error, sendRequest };
};

export default useFetch;
