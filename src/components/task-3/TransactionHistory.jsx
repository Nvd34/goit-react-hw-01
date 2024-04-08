import { TransactionItem } from "./TransactionItem";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead className={css.headTable}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <TransactionItem transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
