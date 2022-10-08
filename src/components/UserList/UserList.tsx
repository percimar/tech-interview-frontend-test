import "./UserList.scss";

import { useQuery } from "react-query";
import { getUsers } from "../../api";
import UserCard from "../UserCard/UserCard";
import useLocales from "../../hooks/useLocales";
import type { User } from "../../models/User";

type UserListParams = {
  selectUser: (user: User) => void;
  deleteUser: (id: number) => void;
};
const UserList = ({ selectUser, deleteUser }: UserListParams) => {
  const strings = useLocales();
  const { isLoading, isError, data } = useQuery(["userList"], getUsers);

  if (isLoading) {
    return (
      <div className="UserList">
        <span className="Spinner"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="UserList">
        <span className="ErrorMessage">{strings.home.fetching_failed}</span>
      </div>
    );
  }

  // Should never happen since the logged in user is a user
  if (!data || data.length === 0) {
    return (
      <div className="UserList">
        <span className="ErrorMessage">
          {strings.general.something_went_wrong}
        </span>
      </div>
    );
  }

  return (
    <div className="UserList">
      {data.map(
        (user) =>
          user && (
            <UserCard
              key={user.id}
              user={user}
              onSelect={() => selectUser(user)}
              onDelete={() => deleteUser(user.id)}
            />
          )
      )}
    </div>
  );
};

export default UserList;
