import { useState } from "react";
import UserForm from "../components/UserForm/UserForm";
import UserList from "../components/UserList/UserList";
import type { User, UserState } from "../models/User";

import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../api";

function PageHome() {
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

  return (
    <>
      <UserList selectUser={selectUser} deleteUser={mutate} />
      <UserForm selectedUser={selectedUser} />
    </>
  );
}

export default PageHome;
