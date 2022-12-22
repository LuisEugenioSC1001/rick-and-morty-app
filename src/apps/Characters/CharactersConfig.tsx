import { lazy } from "react";

const CharactersHomePage = lazy(() => import("./pages/CharactersHomePage"));
const CharacterDetailPage = lazy(() => import("./pages/CharacterDetailPage"));

/**
 * Array de objetos con las rutas y sus correspondientes elementos a renderizar.
 */
export default [
  {
    path: "characters",
    element: <CharactersHomePage />,
  },
  {
    path: "character/:id",
    element: <CharacterDetailPage />,
  },
];
