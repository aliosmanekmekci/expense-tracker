import Header from "../component/Header";
import Balance from "../component/Balance";
import IncomeExpenses from "../component/IncomeExpences";
import TransactionList from "../component/TransactionList";
import AddTransaction from "../component/AddTransaction";
import { GlobalProvider } from "../context/GlobalState";
import "./App.css";

export default function Layout() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
