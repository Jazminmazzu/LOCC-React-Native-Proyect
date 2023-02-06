import React, { ReactElement } from "react";
import { Container, HeaderText } from "./styles";
import TinyImage from "../TinyImage";

const Header = (): ReactElement => (
  <Container>
    <HeaderText>CryptoTracker Pro</HeaderText>
    <TinyImage imgUrl="https://img.freepik.com/foto-gratis/retrato-mujer-tailandesa_53876-146318.jpg?w=2000" />
  </Container>
);

export default Header;
