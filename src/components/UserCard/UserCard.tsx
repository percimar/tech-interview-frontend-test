import { useState } from "react";
import "./UserCard.scss";
import useLocales from "../../hooks/useLocales";
import { useAuth } from "../../contexts/AuthContext";
import { User } from "../../models/User";

type onClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type UserCardParams = {
  user: User;
  onSelect: (event: onClickEvent) => void;
  onDelete: (event: onClickEvent) => void;
};
const UserCard = ({ user, onSelect, onDelete }: UserCardParams) => {
  const [isDeleteDisabled, setIsDeleteDisabled] = useState<boolean>(false);
  const strings = useLocales();
  const { user: currentUser } = useAuth();

  const handleDelete = (event: onClickEvent) => {
    // Prevents double clicking of delete, which could send duplicate
    // delete API requests, the second of which would return a network error.
    if (isDeleteDisabled) {
      return;
    }
    setIsDeleteDisabled(true);
    onDelete(event);
  };

  return (
    <div className="UserCard">
      <img
        src={`https://robohash.org/${user.id}.png?set=set3`}
        alt={`A randomly generated avatar representing ${user.username}`}
        className="UserAvatar"
      />
      <div className="UserDetails">
        <span className="UserName">{user.username}</span>
        <div className="UserActions">
          <button onClick={onSelect} className="UserSelectBtn">
            {strings.home.select}
          </button>
          <button
            onClick={handleDelete}
            className="UserDeleteBtn"
            disabled={
              isDeleteDisabled || currentUser?.username === user.username
            }
          >
            {strings.home.delete}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
