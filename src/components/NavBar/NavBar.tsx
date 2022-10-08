/* eslint-disable jsx-a11y/anchor-is-valid */
import "./NavBar.scss";
import useLocales from "../../hooks/useLocales";
import { useAuth } from "../../contexts/AuthContext";
import { useNav } from "../../contexts/NavContext";
import { useLang } from "../../contexts/LangContext";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const strings = useLocales();
  const { user, setUser } = useAuth();
  const { isOpen } = useNav();
  const { lang, setLang } = useLang();

  const handleLogout = () => {
    setUser(undefined);
  };

  return (
    <div className={isOpen ? "NavBar NavOpen" : "NavBar NavClosed"}>
      <FAB />
      <h1>{strings.navbar.title}</h1>
      <button
        id="LangBtn"
        className="LangBtn"
        onClick={() => setLang(lang === "en" ? "ar" : "en")}
        data-testid="LangBtn"
      >
        {strings.navbar.switch_language}
      </button>
      <div className="TopLinks">
        {user ? (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? "Active Link" : "Link")}
              to="/home"
            >
              {strings.general.home}
            </NavLink>
            <button className="Link" onClick={handleLogout}>
              {lang === "en"
                ? strings.general.logout + " " + user.username
                : strings.general.logout}
            </button>
          </>
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

const FAB = () => {
  const { isOpen, setIsOpen } = useNav();

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <button
      className={isOpen ? "FAB NavOpen" : "FAB NavClosed"}
      onClick={toggleIsOpen}
    >
      &lt;
    </button>
  );
};

export default NavBar;
