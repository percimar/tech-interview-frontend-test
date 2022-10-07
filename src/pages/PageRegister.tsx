import { useState } from "react";
import FormInput from "../components/FormInput/FormInput";
import useLocales from "../hooks/useLocales";
import { register } from "../api";

import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

const PageRegister = () => {
  const strings = useLocales();
  const { mutate } = useMutation(register, {
    onSettled: (success) => {
      if (success) {
        navigate("/login", { state: { isRegistered: true } });
      } else {
        // json-server returns 500 if username is taken, so we can't distinguish
        // between that and a server error. Hopefully not a problem with a real
        // backend.
        setUsernameError("Username already taken");
      }
    },
  });
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [confirmPassError, setConfirmPassError] = useState<string>("");

  const isFormValid = () => {
    // Can't short circuit with an early return because we want to set all the errors
    let userValid = false,
      passValid = false,
      confirmValid = false;

    if (username === "") {
      setUsernameError(strings.auth.field_is_required);
    } else if (username.length < 4) {
      setUsernameError(strings.auth.username_must_be_at_least_4_characters);
    } else {
      setUsernameError("");
      userValid = true;
    }

    if (password === "") {
      setPasswordError(strings.auth.field_is_required);
    } else if (password.length < 8) {
      setPasswordError(strings.auth.password_must_be_at_least_8_characters);
    } else {
      setPasswordError("");
      passValid = true;
    }

    if (confirmPass === "") {
      setConfirmPassError(strings.auth.field_is_required);
    } else if (confirmPass !== password) {
      setConfirmPassError(strings.auth.passwords_do_not_match);
    } else {
      setConfirmPassError("");
      confirmValid = true;
    }

    return userValid && passValid && confirmValid;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (isFormValid()) mutate({ username, password });
  };

  return (
    <div className="CenteredForm">
      <form onSubmit={handleSubmit}>
        <h3 className="FormTitle">{strings.general.register}</h3>
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
        <FormInput
          value={confirmPass}
          setValue={setConfirmPass}
          label={strings.auth.confirm_password}
          error={confirmPassError}
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

export default PageRegister;
