import { FriendListItem } from "./FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.item}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
