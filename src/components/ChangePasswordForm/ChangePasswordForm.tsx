import { useEffect, useState } from "react";
import { changePassword } from "../../api";
import useLocales from "../../hooks/useLocales";
import { UserState } from "../../models/User";
import "./ChangePasswordForm.scss";

import { useMutation } from "react-query";
import FormInput from "../FormInput/FormInput";

type ChangePasswordFormParams = { selectedUser: UserState };
type FormResult = { message: string; success: boolean } | undefined;
const ChangePasswordForm = ({ selectedUser }: ChangePasswordFormParams) => {
  const strings = useLocales();

  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [confirmPassError, setConfirmPassError] = useState<string>("");
  const [changePassResult, setChangePassResult] = useState<FormResult>();

  const { mutate: mutatePassword } = useMutation(changePassword, {
    onSettled: (success) => {
      if (success) {
        setChangePassResult({
          message: strings.home.password_changed_successfully,
          success,
        });
      } else {
        setChangePassResult({
          message: strings.general.something_went_wrong,
          success: false,
        });
      }
    },
  });

  useEffect(() => {
    setPassword("");
    setConfirmPass("");
    setPasswordError("");
    setConfirmPassError("");
    setChangePassResult(undefined);
  }, [selectedUser]);

  const handleUpdatePassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setChangePassResult(undefined);
    if (selectedUser === undefined) {
      return;
    }

    let passValid = false;
    let confirmValid = false;

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

    if (passValid && confirmValid) {
      mutatePassword({ id: selectedUser.id, password });
    }
  };

  return (
    <form className="ChangePasswordForm" onSubmit={handleUpdatePassword}>
      <h4 className="FormSubtitle">{strings.home.update_password}</h4>
      <span
        className={`FormResult ${
          changePassResult?.success ? "Success" : "Failure"
        }`}
      >
        {changePassResult?.message}
      </span>
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
        value={strings.home.change_password}
        className="FormSubmit"
        disabled={selectedUser === undefined}
      />
    </form>
  );
};

export default ChangePasswordForm;
