import React from "react";
import theme from "../../theme";
import { Title, Touchable } from "./styles";

const Button = ({
  text,
  onClick,
  type,
  disabled,
}: {
  text: string;
  onClick: Function;
  type: "regular" | "navigation";
  disabled?: boolean;
}): JSX.Element => (
  <Touchable onPress={onClick} disabled={disabled}>
    <Title> {text} </Title>
  </Touchable>
);

export default Button;
