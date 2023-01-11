import React, { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { makeCalendar } from "../data";
import { ICalendar } from "../types";

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const Item = styled.li<{ isActive: boolean; isDay: number }>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.isActive ? "gray" : "transparent")};
  border: ${(props) => (props.isDay ? "1px solid black" : "none")};
`;

export default function Calendar() {
  const [cal, setCal] = useState<ICalendar[]>(makeCalendar());
  const onClick = (clDay: number) => {
    setCal((prev) => {
      const targetIndex = prev.findIndex((i) => i.day === clDay);
      const changedDay = { day: clDay, active: true };
      return [
        ...prev.slice(0, targetIndex),
        changedDay,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <div>
      <h1>Calendar</h1>
      <List>
        {cal.map((item, i) => (
          <Item
            key={uuid()}
            onClick={() => onClick(item.day)}
            isActive={item.active}
            isDay={item.day}
          >
            {item.day ? item.day : null}
          </Item>
        ))}
      </List>
    </div>
  );
}
