import React from "react";

import { Container } from "./styles";
import api from "../../services/api";

export default function Deshboard() {
  api.get("users");
  setTimeout(() => console.log("Deshboard"), 2000);
  return <Container>Deshboard</Container>;
}
