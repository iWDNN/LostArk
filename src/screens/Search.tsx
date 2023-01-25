import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import uuid from "react-uuid";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { fetchCharacters, SERVER_NAME_LIST } from "../api";
import { search_results, search_results_selector } from "../atom";

interface IForm {
  charId: string;
}

const SearchCt = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1em;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1em;
  input {
    width: 70%;
    padding: 0.5em 1em;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: rgba(0, 0, 0, 0.4);
  }
`;
const List = styled.ul`
  width: 100%;
  h1 {
    padding: 1em;
    background-color: rgba(0, 0, 0, 0.07);
  }
`;
const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 10px 0;
  font-size: 0.8em;
  background-color: rgba(0, 0, 0, 0.05);
  span {
    place-self: center;
  }
`;

export default function Search() {
  const { register, handleSubmit } = useForm<IForm>();
  const [results, setResults] = useRecoilState(search_results);
  const results_selector = useRecoilValue(search_results_selector);
  const onValid = async ({ charId }: IForm) => {
    const fetchData = await fetchCharacters(charId);
    setResults(fetchData);
  };
  return (
    <SearchCt>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("charId")}
          placeholder="캐릭터 이름을 입력해주세요"
        />
      </Form>
      {results
        ? results_selector.map((server, i) => (
            <List key={uuid()}>
              <h1>{SERVER_NAME_LIST[i]}</h1>
              {server.map((char) => (
                <Link key={uuid()} to={`/character/${char.CharacterName}`}>
                  <Item>
                    <span>{char.CharacterClassName}</span>
                    <span>{char.CharacterLevel}</span>
                    <span>{char.CharacterName}</span>
                    <span>{char.ItemAvgLevel}</span>
                    <span>{char.ItemMaxLevel}</span>
                  </Item>
                </Link>
              ))}
            </List>
          ))
        : "hi"}
    </SearchCt>
  );
}
