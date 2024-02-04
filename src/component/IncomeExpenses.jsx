import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card, CardBody } from "@chakra-ui/react";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <Card size="sm">
        <CardBody>
          {/* <div className="inc-exp-container"> */}
          <h4>Income</h4>
          <p className="money plus">{income}</p>
          {/* </div> */}
        </CardBody>
      </Card>
      <br />
      <Card size="sm">
        <CardBody>
          {/* <div className="inc-exp-container"> */}
          <h4>Expense</h4>
          <p className="money minus">{expense}</p>
          {/* </div> */}
        </CardBody>
      </Card>
    </>
  );
};
