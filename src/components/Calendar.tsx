import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useRecoilValue } from "recoil";
import { arrayBuffer } from "stream/consumers";
import styled from "styled-components";
import { hoverEventData } from "../atoms";
import { makeCalendar } from "../data";
import { ICalendar } from "../types";

const CalCt = styled.div`
  h2 {
    text-align: center;
  }
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 10px 0;
`;
const Item = styled.li<{ isActive: boolean; isDay: number }>`
  width: 30px;
  height: 30px;
  margin: 1px;
  background-color: ${(props) => (props.isActive ? "gray" : "transparent")};
  border: ${(props) => (props.isDay ? "1px solid black" : "none")};
`;
const Day = styled.span<{ isSat: boolean; isSun: boolean }>`
  padding: 2px;
  font-size: 0.8em;
  color: ${(props) => {
    if (props.isSun) return "red";
    else if (props.isSat) return "blue";
    else return "black";
  }};
`;

export default function Calendar() {
  const [cal, setCal] = useState<ICalendar[][]>([
    makeCalendar(-1),
    makeCalendar(),
    makeCalendar(1),
  ]);
  const hoverData = useRecoilValue(hoverEventData);
  useEffect(() => {
    setCal([makeCalendar(-1), makeCalendar(), makeCalendar(1)]);
    setCal((prev) => {
      const now0 = new Date();
      const now1 = new Date();
      const now2 = new Date();
      const newCal: ICalendar[] = [...prev[0], ...prev[1], ...prev[2]];
      let targetIndex = 0;
      if (hoverData) {
        const eventPeriod = Math.abs(
          (new Date(hoverData.StartDate).getTime() -
            new Date(hoverData.EndDate).getTime()) /
            (1000 * 60 * 60 * 24)
        );
        if (
          new Date(now0.setMonth(now0.getMonth() - 1)).getMonth() ===
          new Date(hoverData.StartDate).getMonth()
        ) {
          console.log("if1");
          targetIndex = newCal.findIndex(
            (cal) =>
              cal.date?.getDate() === new Date(hoverData.StartDate).getDate() &&
              cal.date?.getMonth() === new Date(hoverData.StartDate).getMonth()
          );
        }
        if (
          new Date(now1).getMonth() === new Date(hoverData.StartDate).getMonth()
        ) {
          console.log("if2");
          targetIndex = newCal.findIndex(
            (cal) =>
              cal.date?.getDate() === new Date(hoverData.StartDate).getDate() &&
              cal.date?.getMonth() === new Date(hoverData.StartDate).getMonth()
          );
        }
        if (
          new Date(now2.setMonth(now2.getMonth() + 1)).getMonth() ===
          new Date(hoverData.StartDate).getMonth()
        ) {
          console.log("if3");
          targetIndex = newCal.findIndex(
            (cal) =>
              cal.date?.getDate() === new Date(hoverData.StartDate).getDate() &&
              cal.date?.getMonth() === new Date(hoverData.StartDate).getMonth()
          );
        }
        console.log("target", targetIndex);
        console.log("eventPeriod", eventPeriod);
        const resultArr = [];
        let count = 0;
        const result = newCal.map((cal, i) => {
          if (i >= targetIndex && count <= eventPeriod && cal.date) {
            count++;
            console.log(count);
            return {
              day: cal.day,
              date: cal.date,
              active: true,
            };
          } else
            return {
              day: cal.day,
              date: cal.date,
              active: cal.active,
            };
        });
        for (let i = 0; i < result.length; i += 35) {
          resultArr.push(result.slice(i, i + 35));
        }
        return resultArr;
      }
      return prev;
    });
  }, [hoverData]);
  return (
    <CalCt>
      <h1>Calendar</h1>
      {cal.map((item, i) => (
        <React.Fragment key={uuid()}>
          <List>
            {item.map((cal) => (
              <Item key={uuid()} isActive={cal.active} isDay={cal.day}>
                <Day
                  isSun={
                    cal.date ? (cal.date.getDay() === 0 ? true : false) : false
                  }
                  isSat={
                    cal.date ? (cal.date.getDay() === 6 ? true : false) : false
                  }
                >
                  {cal.day ? cal.day : null}
                </Day>
              </Item>
            ))}
          </List>
        </React.Fragment>
      ))}
    </CalCt>
  );
}
