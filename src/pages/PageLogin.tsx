import { useState } from "react";
import FormInput from "../components/FormInput/FormInput";
import useLocales from "../hooks/useLocales";

const PageLogin = () => {
  const strings = useLocales();

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

    if (isFormValid()) {
      console.log("Logging in...");
    }
  };

  return (
    <div className="CenteredForm">
      <form onSubmit={handleSubmit}>
        <h3 className="FormTitle">{strings.general.login}</h3>
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
