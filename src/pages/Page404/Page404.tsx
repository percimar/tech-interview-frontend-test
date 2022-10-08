import "./Page404.scss";
import useLocales from "../../hooks/useLocales";

import { useNavigate } from "react-router-dom";

function Page404() {
  const strings = useLocales();
  const navigate = useNavigate();

  return (
    <div className="CenteredForm">
      <img src="/404.svg" alt="404" />
      <span className="Message404">{strings.general.not_found}</span>
      <button onClick={() => navigate("/")} className="NavigateBtn">
        {strings.general.back_to_home}
      </button>
    </div>
  );
}

export default Page404;
