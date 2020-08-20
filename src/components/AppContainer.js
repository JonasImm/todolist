import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

function AppContainer({ children }) {
  return <Container>{children}</Container>;
}

export default AppContainer;
