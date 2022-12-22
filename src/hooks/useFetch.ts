import { useEffect, useState } from "react";

/**
 * Hook para ejecutar las consultas GQL
 * @param {String} query Recibe la consulta GQL a ejecutar
 * @param  {Object} [variables] Recibe las variables de la consulta GQL a ejecutar.
 * @returns {Object} Retorna un objeto con la data, si está cargando, si sucede un error y la función refetch para volver a ejecutar la consulta.
 */
const useFetch = ({
  query,
  variables = {},
}: {
  query: string;
  variables?: any;
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = () => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setLoading(false);
        setData(res?.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
  };

  useEffect(() => {
    () => refetch();
  }, [variables]);

  useEffect(() => {
    refetch();
  }, []);

  return { data, loading, error, refetch };
};

export default useFetch;
