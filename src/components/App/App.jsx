import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Salutation = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const App = ({ children }) => <Salutation>{children}</Salutation>;

App.propTypes = {
  children: PropTypes.node.isRequired
};
