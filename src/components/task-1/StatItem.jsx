import css from "./StatItem.module.css";

export const StatItem = ({ name, value }) => {
  return (
    <li className={css.item}>
      <span className={css.nameStat}>{name}</span>
      <span className={css.valueStat}>{value}</span>
    </li>
  );
};
