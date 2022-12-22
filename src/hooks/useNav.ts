import {
  NavigateOptions,
  To,
  useLocation,
  useNavigate,
} from "react-router-dom";

/**
 * Hook para navegar entre las rutas
 * @returns Retorna una función que como primer parametro recibe un string a la ruta a la que se va a dirigir y como segundo parametro las diferentes opciones.
 */
const useNav = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  return (to: To, opts?: NavigateOptions) =>
    navigate(
      typeof to == "string"
        ? {
            pathname: to,
            search,
          }
        : typeof to == "number"
        ? to
        : { search, ...to },
      opts
    );
};

export default useNav;
