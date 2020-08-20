import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  box-shadow: 0 -10px 20px #a3a3a3;
  border-radius: 15px 15px 0 0;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
`;

function AppFooter({ children }) {
  return <Container>{children}</Container>;
}

export default AppFooter;
