import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderCt = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;
const Logo = styled.div`
  font-weight: 800;
  font-size: 1.1em;
  letter-spacing: 1px;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  padding: 0.88em 1em;
  span {
    font-size: 0.8em;
  }
  &:hover {
    box-shadow: 0 0 2px #000;
  }
`;

export default function Header() {
  return (
    <HeaderCt>
      <Link to="/">
        <Logo>LOST ARK</Logo>
      </Link>
      <List>
        <Link to="search">
          <Item>
            <span>캐릭터 검색</span>
          </Item>
        </Link>
        <Link to="events">
          <Item>
            <span>이벤트 목록</span>
          </Item>
        </Link>
      </List>
    </HeaderCt>
  );
}
