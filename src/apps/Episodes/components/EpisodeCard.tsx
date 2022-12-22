import useNav from "hooks/useNav";

/**
 * Componente que muestra la información de un episodio
 * @param {number} id Id del episodio
 * @param {String} name Nombre del episodio
 * @param {String} episode Temporada y episodio de la misma
 * @returns
 */
const EpisodeCard = ({
  name,
  episode,
  id,
}: {
  name: string;
  episode: string;
  id: number;
}) => {
  const navigate = useNav();
  return (
    <div className="episode-card" onClick={() => navigate(`/episode/${id}`)}>
      <div>
        <div className="paragrapht">
          <div className="u-subtitle">
            <p>Name: </p>
          </div>
          <p className="u-pl-sm">{name}</p>
        </div>
        <div className="paragrapht">
          <div className="u-subtitle">
            <p>Episode: </p>
          </div>
          <p className="u-pl-sm">{episode}</p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
