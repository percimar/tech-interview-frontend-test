import { useState } from "react";
import FormInput from "../components/FormInput/FormInput";
import useLocales from "../hooks/useLocales";
import { AuthParams, login } from "../api";

import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useAuth, type UserState } from "../contexts/AuthContext";

type PageLoginState = { isRegistered?: boolean };
const PageLogin = () => {
  const strings = useLocales();
  const location = useLocation();
  const isRegistered = (location.state as PageLoginState)?.isRegistered;
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { mutate } = useMutation<UserState, unknown, AuthParams>(login, {
    onSettled: (user: UserState) => {
      if (user === undefined) {
        setPasswordError(strings.auth.invalid_username_or_password);
      } else {
        setUser(user);
        navigate("/home");
      }
    },
  });

  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const isFormValid = () => {
    if (username === "") {
      setUsernameError(strings.auth.field_is_required);
      return false;
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError(strings.auth.field_is_required);
      return false;
    } else {
      setPasswordError("");
    }

    return true;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (isFormValid()) mutate({ username, password });
  };

  return (
    <div className="CenteredForm">
      <form onSubmit={handleSubmit}>
        <h3 className="FormTitle">{strings.general.login}</h3>
        {isRegistered && (
          <span className="FormSuccess">{strings.auth.account_created}</span>
        )}
        <FormInput
          value={username}
          setValue={setUsername}
          label={strings.auth.username}
          error={usernameError}
        />
        <FormInput
          value={password}
          setValue={setPassword}
          label={strings.auth.password}
          error={passwordError}
          type="password"
        />
        <input
          type="submit"
          value={strings.general.submit}
          className="FormSubmit"
        />
      </form>
    </div>
  );
};

export default PageLogin;
