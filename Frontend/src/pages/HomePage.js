// @ts-nocheck
import { Container, Flex, VStack } from "@chakra-ui/react";
import HomePageText from "../components/ui/home-page-text";

import HomePageButton from "../components/ui/home-page-button";

import HomePageImage from "../components/ui/home-page-image";
import Footer from "../components/navbar/Footer";

import backgroundImage from "./pexels-zachtheshoota-2568539.jpg";

function Home() {
  return (
    <>
      <Flex
        bgImage={`url(${backgroundImage})`}
        // h="100vh"
        rowGap={4}
        direction={"row"}
        bgSize="cover"
        bgPosition="center"
        height="90vh" // Set height to 100% of viewport height
        width="100%" // Set width to 100%
        position="relative"
        display="flex"
        // justifyContent="center"
        alignItems="center"
        overflow="hidden"
        marginBottom="50px"
      >
        <VStack
          alignItems="start"
          justifyContent="start"
          width="60%"
          spacing={7}
          // h="full"
          padding={"30px"}
        >
          <HomePageText />
          <HomePageButton />
        </VStack>
        <HomePageImage />
      </Flex>
      <Footer />
    </>
  );
}

export default Home;
