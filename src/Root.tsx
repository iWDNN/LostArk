import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #eee;
`;

export default function Root() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("events");
  }, []);
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
