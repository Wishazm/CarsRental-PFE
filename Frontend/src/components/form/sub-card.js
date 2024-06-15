import { Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SubCard = ({
  textHoverColor = "",
  // @ts-ignore
  bgColor,
  question,
  route,
  btnText,
}) => {
  return (
    <// @ts-ignore
    div
      className={
        " p-4 text-white text-center d-flex align-items-center order-md-last"
      }
      style={{ backgroundColor: "#7D2526" }}
    >
      <// @ts-ignore
      div
        className="p-lg-5 p-md-0 p-4 w-100"
      >
        <// @ts-ignore
        Heading
          fontFamily=""
          fontWeight="400"
          mb={3}
        >
          Welcome to AnyCAR
        </Heading>
        <// @ts-ignore
        Text
          mb={6}
        >
          {question}?
        </Text>

        <// @ts-ignore
        Link
          to={route}
          className={textHoverColor + " subcard-btn-outline"}
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default SubCard;
