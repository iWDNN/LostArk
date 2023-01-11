import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCharacters } from "../api";
import { searchCharsData } from "../atoms";
import { server_list } from "../data";
import { ICharacter } from "../types";

interface IForm {
  charName: string;
}

const Header = styled.header`
  padding: 10px;

  i {
    font-size: 1.4em;
    margin: 0 0.3em;
  }
`;
const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 90%;
    margin: 10px 0;
    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #eee;
      border-radius: 10px;
      &::placeholder {
        color: #d0d0d0;
      }
    }
  }
`;
export default function Home() {
  const { register, handleSubmit } = useForm<IForm>();
  const setCharsData = useSetRecoilState(searchCharsData);
  // const { isLoading, data } = useQuery("news-events", fetchEvents);
  // console.log(data);
  const navigate = useNavigate();
  const onFormSubmit = async ({ charName }: IForm) => {
    // setCharsData(await fetchCharacters(charName));
    navigate(`characters/${charName}`);
  };
  return (
    <>
      <Header>로스트아크</Header>
      <SearchBar>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input
            {...register("charName")}
            placeholder="캐릭터 이름을 작성해주세요"
          />
        </form>
      </SearchBar>
      <Outlet />
    </>
  );
}
