// @ts-nocheck
import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  IconButton,
  useColorModeValue,
  VStack,
  Collapse,
  useDisclosure,
  color,
} from "@chakra-ui/react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HamburgerIcon, CloseIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../context/axiosClient";
import AdminNav from "./DashboardNav";
import logo from "./logo.png";

const Navbar = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const { token, setToken, setUser } = useStateContext();
  const bgColor = useColorModeValue("gray.900", "gray.900");
  const linkColor = useColorModeValue("blue.300", "blue.300");
  const buttonColor = useColorModeValue("gray.200", "gray.200");

  React.useEffect(() => {
    if (token) {
      axiosClient.get("/user").then(({ data }) => {
        setUser(data);
      });
    }
  }, [token, setUser]);

  const handleLogout = async (e) => {
    e.preventDefault();
    await axiosClient.post("http://127.0.0.1:8000/api/logout");
    setToken(null);
    setUser({});
    navigate("/");
  };

  if (location.pathname.startsWith("/admin")) {
    return (
      <Box maxWidth="1720px" px={[12, 8, 8]} mt={4}>
        <Link to="/" style={{ color: linkColor, marginTop: "20px" }}>
          <ArrowBackIcon /> Back to Home
        </Link>
      </Box>
    );
  }

  if (location.pathname.startsWith("/dashboard")) return <AdminNav />;

  return (
    <>
      <Box
        style={{ backgroundColor: "#252525" }}
        color={buttonColor}
        px={4}
        py={2}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={onToggle}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NavigationLinks />
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {token ? (
                <>
                  <Button
                    color={buttonColor}
                    colorScheme={"blackAlpha"}
                    variant="ghost"
                    leftIcon={<MdAccountCircle color={buttonColor} />}
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </Button>
                  <Button
                    color={buttonColor}
                    colorScheme={"blackAlpha"}
                    variant="ghost"
                    leftIcon={<MdLogout color={buttonColor} />}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    // colorScheme="gray"
                    variant="outline"
                    px={3}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button
                    style={{
                      background:
                        "linear-gradient(90deg, #7D2526 70%, #FF6666 100%)",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "none",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                    onClick={() => navigate("/signup")}
                  >
                    Sign up for free
                  </Button>
                </>
              )}
            </HStack>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: "none" }}>
            <VStack as={"nav"} spacing={4}>
              {token ? (
                <>
                  <Button
                    color={buttonColor}
                    colorScheme={"blackAlpha"}
                    variant="ghost"
                    leftIcon={<MdAccountCircle color={buttonColor} />}
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </Button>
                  <Button
                    color={buttonColor}
                    colorScheme={"blackAlpha"}
                    variant="ghost"
                    leftIcon={<MdLogout color={buttonColor} />}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    colorScheme="gray"
                    variant="outline"
                    px={3}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button
                    style={{ backgroundColor: "#7D2526" }}
                    onClick={() => navigate("/signup")}
                  >
                    Sign up for free
                  </Button>
                </>
              )}
            </VStack>
          </Box>
        </Collapse>
      </Box>
      {children}
    </>
  );
};

const NavigationLinks = () => (
  <HStack as="nav" spacing={4}>
    <img src={logo} alt="Logo" style={{ height: 40 }} />
    <h1 style={{ color: "white", marginRight: "100px", fontWeight: "500" }}>
      AnyCAR
    </h1>
    <Link
      to="/"
      style={{
        color: "white",
        fontSize: "lg",
        borderBottom: "2px solid white",
      }}
      onMouseEnter={(e) => {
        e.target.style.color = "#7D2526";
        e.target.style.borderBottomColor = "#7D2526";
      }}
      onMouseLeave={(e) => {
        e.target.style.color = "white";
        e.target.style.borderBottomColor = "white";
      }}
    >
      Home
    </Link>
    <Link
      to="/cars"
      style={{
        fontSize: "lg",
        color: "white",
        borderBottom: "2px solid white",
      }}
      onMouseEnter={(e) => {
        e.target.style.color = "#7D2526";
        e.target.style.borderBottomColor = "#7D2526";
      }}
      onMouseLeave={(e) => {
        e.target.style.color = "white";
        e.target.style.borderBottomColor = "white";
      }}
    >
      Book Cars
    </Link>
  </HStack>
);

export default Navbar;
