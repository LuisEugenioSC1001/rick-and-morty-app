import { Pagination } from "@mui/material";
import Card from "components/Card";
import Loader from "components/Loader";
import { characters } from "gql/queries";
import useFetch from "hooks/useFetch";
import { isEmpty, isNull } from "lodash";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * Componente encargado de renderizar el listado tarjetas de personajes
 */
const CharactersHomePage = () => {
  const [search, setSearch] = useSearchParams();
  const { data, loading, refetch } = useFetch({
    query: characters,
    variables: {
      ...(!isNull(search.get("page"))
        ? { page: +(search.get("page") ?? "1") }
        : {}),
      ...(!isNull(search.get("name"))
        ? { filter: { name: search.get("name") ?? "" } }
        : {}),
    },
  });
  useEffect(() => {
    refetch();
  }, [search.get("page"), search.get("name")]);

  return (
    <div>
      <div className="search">
        <input
          value={search?.get("name") ?? ""}
          onChange={(o) =>
            setSearch((prev) => ({
              page: "1",
              name: o?.target.value,
            }))
          }
          className="search-input"
          type="text"
          placeholder="Name of the character"
        />
      </div>
      {loading ? (
        <div className="u-pt-md">
          <Loader />
        </div>
      ) : !isEmpty(data?.characters?.results ?? []) ? (
        <div className="u-center">
          <div className="grid u-pt-md">
            {data?.characters?.results?.map((o, i) => (
              <Card id={o?.id} image={o?.image} name={o?.name} key={i} />
            ))}
          </div>
          <div className="pagination">
            <Pagination
              size="small"
              color="primary"
              count={data?.characters?.info?.pages ?? 0}
              sx={{
                "&&.MuiPagination-text": {
                  color: "#FFFF",
                },
              }}
              page={+(search?.get("page") ?? 1)}
              onChange={(_, page) => {
                setSearch((prev) => ({
                  name: prev?.get("name") ?? "",
                  page: `${page}`,
                }));
              }}
            />
          </div>
        </div>
      ) : (
        <div className="u-text-center u-subtitle u-center">
          <p>No data has been found</p>
        </div>
      )}
    </div>
  );
};

export default CharactersHomePage;
