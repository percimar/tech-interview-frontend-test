import "./UserForm.scss";
import useLocales from "../../hooks/useLocales";
import { UserState } from "../../models/User";
import UserDetailsForm from "../UserDetailsForm/UserDetailsForm";
import ChangePasswordForm from "../ChangePasswordForm/ChangePasswordForm";

type UserFormParams = { selectedUser: UserState };
function UserForm({ selectedUser }: UserFormParams) {
  const strings = useLocales();

  return (
    <div className="FormContainer">
      <h3 className="FormTitle">{strings.home.edit_user}</h3>
      <div className="UserForm">
        <UserDetailsForm selectedUser={selectedUser} />
        <div className="Divider" />
        <ChangePasswordForm selectedUser={selectedUser} />
      </div>
    </div>
  );
}

export default UserForm;
