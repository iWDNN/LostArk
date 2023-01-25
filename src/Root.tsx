import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";

const Container = styled.div`
  /* width: 100vw;
  height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;

export default function Root() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
