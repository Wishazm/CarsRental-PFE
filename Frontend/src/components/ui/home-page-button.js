// @ts-nocheck
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomePageButton = () => {
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };
  return (
    <Button
      onClick={() => navigate("/cars")}
      _hover={{
        opacity: "0.9",
      }}
      w="60%"
      fontSize="16px"
      fontWeight="500"
      // bg="orange"
      color="#30B6CE"
      fontWeight="500"
      boxShadow="0px 5px 8px 0px rgba(0,0,0, 0.1)"
      borderRadius="50px"
      py="27px"
      style={{ border: "1px solid #30B6CE", backgroundColor: "transparent" }}
      textHoverColor="text-blue"
    >
      Book online now!
    </Button>
  );
};

export default HomePageButton;
