import React from "react";
import { useQuery } from "react-query";
import uuid from "react-uuid";
import styled from "styled-components";
import { fetchEvents } from "../api";
import Loading from "../components/Loading";
import { IEventInfo } from "../types";

const List = styled.ul`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  a {
    display: block;
    /* width: 300px; */
  }
`;
const Item = styled.li`
  width: 100%;
  /* height: 200px; */
  background-color: rgba(0, 0, 0, 0.08);
  h2 {
    margin: 5px;
    font-weight: 700;
  }
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 137px;
  object-fit: cover;
  object-position: center;
`;
const Info = styled.div`
  padding: 2px;
  p {
    display: flex;
    justify-content: space-between;
    margin: 5px;
    font-size: 0.9em;
  }
  p:first-child {
    font-weight: 600;
  }
`;

export default function Events() {
  const { isLoading, data } = useQuery<IEventInfo[]>("event", fetchEvents);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <List>
          {data?.map((item) => (
            <a key={uuid()} href={item.Link} target="_blank" rel="noreferrer">
              <Item>
                <Thumbnail src={item.Thumbnail} />
                <h2>{item.Title}</h2>
                <Info>
                  <p>
                    <span>이벤트 기간</span>
                    <span>보상 날짜</span>
                  </p>
                  <p>
                    <span>
                      {new Date(item.StartDate).toLocaleDateString()} ~{" "}
                      {new Date(item.EndDate).toLocaleDateString()}
                    </span>
                    <span>
                      {item.RewardDate
                        ? new Date(item.RewardDate).toLocaleDateString()
                        : "없음"}
                    </span>
                  </p>
                </Info>
              </Item>
            </a>
          ))}
        </List>
      )}
    </>
  );
}
