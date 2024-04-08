import "./App.css";
import userData from "./components/task-1/userData.json";
import { Profile } from "./components/task-1/Profile";
import friends from "./components/task-2/friends.json";
import { FriendList } from "./components/task-2/FriendList";
import transactions from "./components/task-3/transactions.json";
import { TransactionHistory } from "./components/task-3/TransactionHistory";

function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
