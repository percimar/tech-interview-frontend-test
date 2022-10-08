import { useState } from "react";
import "./PageHome.scss";
import UserList from "../../components/UserList/UserList";
import type { User, UserState } from "../../models/User";
import { deleteUser } from "../../api";
import UserDetailsForm from "../../components/UserDetailsForm/UserDetailsForm";
import ChangePasswordForm from "../../components/ChangePasswordForm/ChangePasswordForm";
import useLocales from "../../hooks/useLocales";

import { useMutation, useQueryClient } from "react-query";

function PageHome() {
  const strings = useLocales();
  const queryClient = useQueryClient();

  const [selectedUser, setSelectedUser] = useState<UserState>();
  const { mutate } = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("userList");
    },
  });

  const selectUser = (user: User) => {
    setSelectedUser(user.id === selectedUser?.id ? undefined : user);
  };

  const clearSelectedUser = () => {
    setSelectedUser(undefined);
  };

  return (
    <>
      <UserList selectUser={selectUser} deleteUser={mutate} />
      <div className="FormContainer">
        <h3 className="FormTitle">{strings.home.edit_user}</h3>
        <div className="UserForm">
          <UserDetailsForm
            selectedUser={selectedUser}
            clearSelectedUser={clearSelectedUser}
          />
          <div className="Divider" />
          <ChangePasswordForm
            selectedUser={selectedUser}
            clearSelectedUser={clearSelectedUser}
          />
        </div>
      </div>
    </>
  );
}

export default PageHome;
