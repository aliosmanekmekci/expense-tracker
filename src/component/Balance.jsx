import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Center, Heading, Mark, Stat, StatNumber } from "@chakra-ui/react";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <Stat mb={10}>
        <Center>
          <Heading lineHeight="tall">
            <Mark
              query="spotlight"
              styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
            >
              Balance
            </Mark>
          </Heading>
        </Center>
        <Center>
          <StatNumber>${total}</StatNumber>
        </Center>
      </Stat>
      <h4></h4>
      <h2></h2>
    </>
  );
};
