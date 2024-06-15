// @ts-nocheck
import { Box, Heading, Text } from "@chakra-ui/react";
// import backgroundImage from "./pexels-pixels-elements-14674139.jpg";

const WelcomeSection = () => {
  return (
    <Box
      // bgImage={`url(${backgroundImage})`}
      // bgSize="cover"
      // bgPosition="center"
      // height="100vh" // Set height to 100% of viewport height
      // width="100%" // Set width to 100%
      // position="relative"
      // display="flex"
      // justifyContent="center"
      // alignItems="center"
      // overflow="hidden"
      marginTop={"100px"}
    >
      <Heading size="3xl" color="white" marginBottom="20px">
        Discover Car Rentals at Exceptional Rates
      </Heading>
      <Text fontSize="lg" color="gray.300" w={"70%"}>
        Explore our extensive range of modern vehicles. Enjoy competitive prices
        and exceptional service every day.
      </Text>
    </Box>
  );
};

export default WelcomeSection;
