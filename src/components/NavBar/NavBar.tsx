/* eslint-disable jsx-a11y/anchor-is-valid */
import "./NavBar.scss";
import useLocales from "../../hooks/useLocales";
import { useAuth } from "../../contexts/AuthContext";
import { useNav } from "../../contexts/NavContext";
import { useLang } from "../../contexts/LangContext";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const strings = useLocales();
  const { user } = useAuth();
  const { isOpen, setIsOpen } = useNav();
  const { lang, setLang } = useLang();

  return (
    <div className="NavBar">
      <h1>{strings.navbar.title}</h1>
      <div className="TopLinks">
        {user ? (
          <NavLink
            className={({ isActive }) => (isActive ? "Active Link" : "Link")}
            to="/home"
          >
            {strings.general.home}
          </NavLink>
        ) : (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? "Active Link" : "Link")}
              to="/login"
            >
              {strings.general.login}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "Active Link" : "Link")}
              to="/register"
            >
              {strings.general.register}
            </NavLink>
          </>
        )}
      </div>
      <div className="BottomLinks">
        <NavLink className="Link" to="#">
          {strings.general.about}
        </NavLink>
        <NavLink className="Link" to="#">
          {strings.general.privacy_policy}
        </NavLink>
        <NavLink className="Link" to="#">
          {strings.general.contact}
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
