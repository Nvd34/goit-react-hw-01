import css from "./Profile.module.css";
import { StatItem } from "./StatItem";

export const Profile = ({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={css.container}>
      <div className={css.userContainer}>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <p className={css.userName}>{username}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>

      <ul className={css.list}>
        <StatItem name="Followers" value={followers} />
        <StatItem name="Views" value={views} />
        <StatItem name="Likes" value={likes} />
      </ul>
    </div>
  );
};
