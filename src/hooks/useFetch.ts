import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    fetch(`https://rickandmortyapi.com/api/${url}`)
      .then((response) => response.json())
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
