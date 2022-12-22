import useNav from "hooks/useNav";

/**
 * Componente encargado de renderizar las tarjetas de los personajes.
 * @param {Number} id Id del personaje.
 * @param {String} image Url de la imagen del personaje.
 * @param {String} name Nombre del personaje a mostrar.
 * @returns
 */
const Card = ({
  id,
  image,
  name,
}: {
  id: number;
  image: string;
  name: string;
}) => {
  const navigate = useNav();
  return (
    <div
      className="character_card"
      onClick={() => navigate(`/character/${id}`)}
    >
      <div className="u-center">
        <img src={image} alt="image" className="card-image" />
      </div>
      <div className="u-text-center u-subtitle ">
        <p>{name ?? "Sin información"}</p>
      </div>
    </div>
  );
};

export default Card;
