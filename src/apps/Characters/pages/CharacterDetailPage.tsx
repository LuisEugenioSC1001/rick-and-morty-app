import EpisodeCard from "apps/Episodes/components/EpisodeCard";
import Loader from "components/Loader";
import { characterById } from "gql/queries";
import useFetch from "hooks/useFetch";
import { useParams } from "react-router-dom";

/**
 * Componente encargado de mostrar la información de un personaje en especifico
 */
const CharacterDetailPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetch({
    query: characterById,
    variables: { id },
  });
  if (loading) return <Loader />;
  return (
    <div className="u-container">
      <div className="character-name">
        <p>{data?.name}</p>
      </div>

      <div className="character-display">
        <div>
          <img
            src={data?.character?.image}
            alt="image"
            className="card-image"
          />
        </div>
        <div>
          <div className="paragrapht">
            <div className="u-subtitle">
              <p>Status: </p>
            </div>
            <p className="u-pl-sm">{data?.character?.status}</p>
          </div>
          <div className="paragrapht">
            <div className="u-subtitle">
              <p>Gender: </p>
            </div>
            <p className="u-pl-sm">{data?.character?.gender}</p>
          </div>
          <div className="paragrapht">
            <div className="u-subtitle">
              <p>Location: </p>
            </div>
            <p className="u-pl-sm">{data?.character?.location?.name}</p>
          </div>
          <div className="paragrapht">
            <div className="u-subtitle">
              <p>Origin: </p>
            </div>
            <p className="u-pl-sm">{data?.character?.origin?.name}</p>
          </div>
          <div className="paragrapht">
            <div className="u-subtitle">
              <p>Species: </p>
            </div>
            <p className="u-pl-sm">{data?.character?.species}</p>
          </div>
        </div>
      </div>

      <div className="u-center">
        <p className="u-subtitle">Episodes</p>
        <div className="u-pl-sm grid">
          {(data?.character?.episode ?? [])?.map((o) => (
            <EpisodeCard {...o} key={o?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;
