import CharactersConfig from "apps/Characters/CharactersConfig";
import EpisodesConfig from "apps/Episodes/EpisodesConfig";
import Loader from "components/Loader";
import HomePage from "layouts/homePage";
import { Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";

/**
 * Componente encargado de manejar las diferentes rutas y los elementos a mostrar en cada caso.
 */
export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
      children: [
        { path: "/", element: <Navigate to="/characters" /> },
        ...CharactersConfig,
        EpisodesConfig,
        //   { path: "404", element: <NotFound /> },
      ],
    },
    // { path: "*", element: <NotFound /> },
  ]);
  return <Suspense fallback={<Loader />}>{routes}</Suspense>;
}
