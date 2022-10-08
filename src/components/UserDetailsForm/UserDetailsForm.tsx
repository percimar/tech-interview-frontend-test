import { useEffect, useState } from "react";
import "./UserDetailsForm.scss";
import { updateUser } from "../../api";
import useLocales from "../../hooks/useLocales";
import { type UserRole, type UserState, USER_ROLES } from "../../models/User";
import FormInput from "../FormInput/FormInput";

import { useMutation, useQueryClient } from "react-query";

type UserDetailsFormParams = { selectedUser: UserState };
type FormResult = { message: string; success: boolean } | undefined;
const UserDetailsForm = ({ selectedUser }: UserDetailsFormParams) => {
  const strings = useLocales();
  const queryClient = useQueryClient();

  const [username, setUsername] = useState<string>(
    selectedUser?.username || ""
  );
  const [usernameError, setUsernameError] = useState<string>("");
  const [role, setRole] = useState<UserRole | undefined>(selectedUser?.role);
  const [updateUserResult, setUpdateUserResult] = useState<FormResult>();

  const registration_date = selectedUser
    ? new Date(selectedUser.registered_on).toLocaleDateString()
    : "";

  // Update fields on user select
  // Clear fields on user deselect
  useEffect(() => {
    if (selectedUser) {
      setUsername(selectedUser.username);
      setRole(selectedUser.role);
    } else {
      setUsername("");
      setRole(undefined);
    }
    setUsernameError("");
    setUpdateUserResult(undefined);
  }, [selectedUser]);

  const { mutate: mutateUser } = useMutation(updateUser, {
    onSettled: (success) => {
      if (success) {
        setUpdateUserResult({
          message: strings.home.user_updated_successfully,
          success,
        });
        queryClient.invalidateQueries("userList");
      } else {
        setUpdateUserResult({
          message: strings.general.something_went_wrong,
          success: false,
        });
      }
    },
  });

  const handleUpdateDetails = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUpdateUserResult(undefined);
    if (selectedUser === undefined) {
      return;
    }

    let usernameValid = false;

    if (username === "") {
      setUsernameError(strings.auth.field_is_required);
    } else if (username.length < 4) {
      setUsernameError(strings.auth.username_must_be_at_least_4_characters);
    } else if (username.length > 16) {
      setUsernameError(strings.auth.username_cannot_exceed_16_characters);
    } else {
      setUsernameError("");
      usernameValid = true;
    }

    if (usernameValid) {
      mutateUser({ id: selectedUser.id, user: { username, role } });
    }
  };

  return (
    <form className="UserDetailsForm" onSubmit={handleUpdateDetails}>
      <h4 className="FormSubtitle">{strings.home.update_user_details}</h4>
      <span
        className={`FormResult ${
          updateUserResult?.success ? "Success" : "Failure"
        }`}
      >
        {updateUserResult?.message}
      </span>
      <FormInput
        value={username}
        setValue={setUsername}
        label={strings.auth.username}
        error={usernameError}
      />
      <label className="FormLabel" htmlFor="UserRole">
        {strings.home.role}
      </label>
      <select
        className="FormSelect"
        name="UserRole"
        value={role}
        onChange={(e) => setRole(e.target.value as UserRole)}
      >
        {selectedUser ? (
          USER_ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))
        ) : (
          <option value=""></option>
        )}
      </select>
      <FormInput
        value={registration_date}
        setValue={() => {}}
        label={strings.home.registered_date}
        disabled
      />
      <input
        type="submit"
        value={strings.general.submit}
        className="FormSubmit"
        disabled={selectedUser === undefined}
      />
    </form>
  );
};

export default UserDetailsForm;
