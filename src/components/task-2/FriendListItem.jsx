import clsx from "clsx";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.text, isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
