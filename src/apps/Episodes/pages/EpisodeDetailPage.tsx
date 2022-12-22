import Card from "components/Card";
import Loader from "components/Loader";
import { episodeById } from "gql/queries";
import useFetch from "hooks/useFetch";
import { useParams } from "react-router-dom";

/**
 * Componente encargado de renderizar la información de un episodio en concreto mediante el id
 */
const EpisodeDetailPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetch({
    query: episodeById,
    variables: { id },
  });
  if (loading) return <Loader />;
  return (
    <div className="u-container">
      <div className="character-name">
        <p>Episode: {data?.episode?.episode}</p>
      </div>
      <div className="paragrapht">
        <div className="u-subtitle">
          <p>Name: </p>
        </div>
        <p className="u-pl-sm">{data?.episode?.name}</p>
      </div>
      <div className="paragrapht">
        <div className="u-subtitle">
          <p>Air date: </p>
        </div>
        <p className="u-pl-sm">{data?.episode?.air_date}</p>
      </div>
      <div className="u-center">
        <p className="u-subtitle">Characters</p>
        <div className="u-pl-sm grid">
          {(data?.episode?.characters ?? [])?.map((o) => (
            <Card {...o} key={o?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetailPage;
