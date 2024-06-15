// @ts-nocheck
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useStateContext } from "../../context/ContextProvider";
import axiosAdminClient from "../../context/axiosAdminClient";
import logo from "./logo.png";

function DashboardNav() {
  const { setAdminToken } = useStateContext();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosAdminClient.post("http://127.0.0.1:8000/api/admin/logout");
      setAdminToken(null);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Flex
      className=" navbar navbar-expand-lg"
      justifyContent={"space-between"}
      alignItems={"center"}
      p={4}
      color={"white"}
      style={{ backgroundColor: "#7D2526" }}
    >
      <Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: 40 }} />
          <h1>AnyCAR</h1>
        </Box>
        <Link to="/dashboard" style={{ fontSize: "1.2rem" }}>
          Dashboard
        </Link>
      </Box>

      <Spacer />

      <Button
        color={"white"}
        colorScheme={"blackAlpha"}
        variant="ghost"
        leftIcon={<MdLogout color="white" />}
        onClick={() => handleLogout()}
      >
        Logout
      </Button>
    </Flex>
  );
}

export default DashboardNav;
