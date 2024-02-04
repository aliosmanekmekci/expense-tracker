import { Heading, Box, Center } from "@chakra-ui/react";

export const Header = () => {
  // eslint-disable-next-line react/prop-types
  return (
    <Center>
      <Box>
        <Heading mt={10}>Expence Tracker</Heading>
      </Box>
    </Center>
  );
};
