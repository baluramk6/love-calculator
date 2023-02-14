import {
  Box,
  HStack,
  Image,
  Heading,
  Text,
  FormControl,
  FormLabel,
  VStack,
  Input,
  Button,
  calc,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Love = () => {
  const [yourName, setYourName] = useState("");
  const [parterName, setPartnerName] = useState("");
  const [love, setLove] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setYourName(e.target[0].value);
    setPartnerName(e.target[1].value);
    let generateLove = Math.floor(Math.random() * (100 - 30) + 30);
    setLove(generateLove);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        h="40vh"
        w={["100%", "50%", "30%"]}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        {love > 1 && (
          <Image
            w={16}
            src="./assets/heart-with-cupid-arrow-icon.webp"
            alt=""
          />
        )}
        {love > 1 ? (
          <Heading
            fontSize={["xl", "2xl", "4xl"]}
            as="h1"
          >{`Your Love is: ${love}%`}</Heading>
        ) : (
          <Heading as="h1">Happy Valentine's Day💘</Heading>
        )}
        {love < 50 && love > 1 && (
          <Text fontSize="md">Tips: Give some gift🎁</Text>
        )}
        {love > 50 && love <= 60 && (
          <Text fontSize="md">Tips: Average, give some time💑</Text>
        )}
        {love > 60 && love <= 90 && (
          <Text fontSize="md">Tips: Good, keep it up🚀</Text>
        )}
        {love > 90 && <Text fontSize="md">Tips: Happy Valentine's Day💘</Text>}
      </VStack>
      <VStack
        h="40vh"
        w={["100%", "50%", "30%"]}
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="base"
        p="6"
        rounded="md"
      >
        <form action="" onSubmit={handleSubmit}>
          <FormControl>
            <VStack spacing={4}>
              <FormLabel fontSize="large">Enter your name</FormLabel>
              <Input required minLength={3} type="text" />
              <FormLabel fontSize="large">Enter your partner name</FormLabel>
              <Input required minLength={3} type="text" />
              <Button
                type="submit"
                colorScheme="pink"
                variant="outline"
                w="100%"
                rightIcon={
                  <Image w="25px" src="/assets/finding-love-icon.webp" alt="" />
                }
              >
                Check Now
              </Button>
            </VStack>
          </FormControl>
        </form>
      </VStack>
    </Box>
  );
};

export default Love;
