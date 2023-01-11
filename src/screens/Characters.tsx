import React, { useEffect } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { ICharacter } from "../types";
import { useRecoilValue } from "recoil";
import { searchCharsData } from "../atoms";
import { server_list } from "../data";
import { testCharsData } from "../testData";

const List = styled.ul``;
const Item = styled.li`
  display: grid;
  grid-template-columns: 20% 15% 35% 15% 15%;
  margin: 10px 0;
  span {
    display: block;
    place-self: center;
  }
`;

export default function Characters() {
  const charsData = useRecoilValue(searchCharsData);
  const filtered2 = testCharsData;
  const filtered = server_list
    .map((server) =>
      charsData
        .filter((char) => char.ServerName === server)
        .sort(function (a, b) {
          return (
            parseFloat(b.ItemMaxLevel.replace(",", "")) -
            parseFloat(a.ItemMaxLevel.replace(",", ""))
          );
        })
    )
    .sort((a, b) => b.length - a.length);
  return (
    <>
      {filtered2?.map((serverCharList, i) => (
        <List key={uuid()}>
          <h1>{server_list[i]}</h1>
          {serverCharList.map((char) => (
            <Item key={uuid()}>
              <span>{char.CharacterClassName}</span>
              <span>{char.CharacterLevel}</span>
              <span>{char.CharacterName}</span>
              <span>{char.ItemAvgLevel}</span>
              <span>{char.ItemMaxLevel}</span>
            </Item>
          ))}
        </List>
      ))}
    </>
  );
}
