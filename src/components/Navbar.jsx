import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box w={["100%"]} h="80px" bg="pink.300">
      <Flex h="100%" justifyContent="center" alignItems="center" gap={2}>
        <Image
          w={["1rem", "2rem", "2.5rem"]}
          src="/assets/red-heart-icon.webp"
          alt=""
        />
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight="extrabold"
        >
          Love Calculator
        </Text>
        <Image
          w={["1rem", "2rem", "2.5rem"]}
          src="/assets/red-heart-icon.webp"
          alt=""
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
