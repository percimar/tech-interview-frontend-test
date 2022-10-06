import "./MainLayout.scss";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <NavBar />
      <div className="Container">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
