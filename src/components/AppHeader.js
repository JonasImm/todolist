import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: var(--highlightColor);
  color: #fff;
  border-radius: 0 0 15px 15px;
  text-align: center;
`;

function AppHeader({ children }) {
  return <Container>{children}</Container>;
}

export default AppHeader;
