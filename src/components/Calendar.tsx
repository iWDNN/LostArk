import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { hoverEventData } from "../atoms";
import { makeCalendar } from "../data";
import { ICalendar, INewsEvents } from "../types";

interface ICalProps {
  postData?: INewsEvents;
}

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
  const hoverData = useRecoilValue(hoverEventData);
  const eventPeriod = hoverData
    ? Math.abs(
        (new Date(hoverData.StartDate).getTime() -
          new Date(hoverData.EndDate).getTime()) /
          (1000 * 60 * 60 * 24)
      )
    : null;
  useEffect(() => {}, [eventPeriod]);
  return (
    <CalCt>
      <h1>Calendar</h1>
      <List>
        {cal.map((item) => (
          <Item key={uuid()} isActive={item.active} isDay={item.day}>
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
