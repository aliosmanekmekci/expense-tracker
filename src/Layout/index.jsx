import { Header } from "../component/Header";
import { Balance } from "../component/Balance";
import { IncomeExpenses } from "../component/IncomeExpenses";
import { TransactionList } from "../component/TransactionList";
import { AddTransaction } from "../component/AddTransaction";
import { GlobalProvider } from "../context/GlobalState";
import "./App.css";
import { Box } from "@chakra-ui/layout";

export default function Layout() {
  return (
    <GlobalProvider>
      <Box boxShadow="dark-lg" p="6" rounded="md" bg="white" m={10}>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </Box>
    </GlobalProvider>
  );
}
