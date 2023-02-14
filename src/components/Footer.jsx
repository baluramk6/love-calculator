import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box
      w="100%"
      h="50px"
      bg="whiteAlpha.100"
      border="1px solid black"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      position="fixed"
      bottom="0"
      left="0"
    >
      <Text>Made with</Text>
      <Image w="20px" src="/assets/red-heart-icon.webp" alt="" />
      <Text>by: Baluram</Text>
    </Box>
  );
};
