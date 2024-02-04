import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button, Center, Input } from "@chakra-ui/react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" value="text">
            Text
          </label>
          <Input
            type="text"
            id="text"
            value={text}
            placeholder="Enter..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="number" value="number">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <Input
            type="number"
            id="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Center>
            <Button
              onClick={onSubmit}
              mt={10}
              mb={10}
              colorScheme="teal"
              variant="outline"
            >
              Add Transaction
            </Button>
          </Center>
        </div>
      </form>
    </>
  );
};
