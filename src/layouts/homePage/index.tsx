import { Tooltip } from "@mui/material";
import Loader from "components/Loader";
import useNav from "hooks/useNav";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
/**
 * Componente que representa la página principal y la forma en que esta misma se va a mostrar
 */
const HomePage = () => {
  const navigate = useNav();
  return (
    <div className="homePage_container">
      <div
        className="u-text-center u-title-container"
        onClick={() => navigate("/")}
      >
        <Tooltip title="Back to home">
          <p className="u-title">Rick and Morty</p>
        </Tooltip>
      </div>
      <div className="homePage_children">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
