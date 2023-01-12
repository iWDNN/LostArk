import React, { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { makeCalendar } from "../data";
import { ICalendar } from "../types";

const CalCt = styled.div``;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const Item = styled.li<{ isActive: boolean; isDay: number }>`
  width: 70px;
  height: 70px;
  margin: 1px;
  background-color: ${(props) => (props.isActive ? "gray" : "transparent")};
  border: ${(props) => (props.isDay ? "1px solid black" : "none")};
`;
const Day = styled.span<{ isSat: boolean; isSun: boolean }>`
  color: ${(props) => {
    if (props.isSun) return "red";
    else if (props.isSat) return "blue";
    else return "black";
  }};
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
    <CalCt>
      <h1>Calendar</h1>
      <List>
        {cal.map((item) => (
          <Item
            key={uuid()}
            onClick={() => onClick(item.day)}
            isActive={item.active}
            isDay={item.day}
          >
            <Day
              isSun={
                item.date ? (item.date.getDay() === 0 ? true : false) : false
              }
              isSat={
                item.date ? (item.date.getDay() === 6 ? true : false) : false
              }
            >
              {item.day ? item.day : null}
            </Day>
          </Item>
        ))}
      </List>
    </CalCt>
  );
}
