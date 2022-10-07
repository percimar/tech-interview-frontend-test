import "./UserList.scss";

import { useQuery } from "react-query";
import { getUsers } from "../../api";
import UserCard from "../UserCard/UserCard";
import useLocales from "../../hooks/useLocales";
import type { User } from "../../contexts/AuthContext";

type UserListParams = {
  selectUser: (user: User) => void;
  deleteUser: (username: string) => void;
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
          {strings.home.something_went_wrong}
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
              key={user.username}
              username={user.username}
              onSelect={() => selectUser(user)}
              onDelete={() => deleteUser(user.username)}
            />
          )
      )}
    </div>
  );
};

export default UserList;
