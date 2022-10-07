import { useState } from "react";
import UserForm from "../components/UserForm/UserForm";
import UserList from "../components/UserList/UserList";
import type { UserState } from "../contexts/AuthContext";

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

  return (
    <>
      <UserList selectUser={setSelectedUser} deleteUser={mutate} />
      <UserForm selectedUser={selectedUser} />
    </>
  );
}

export default PageHome;
