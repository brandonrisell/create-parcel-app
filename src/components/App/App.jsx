import React from "react";
import styled from "styled-components";

const Salutation = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const App = () => <Salutation>Hi!</Salutation>;
