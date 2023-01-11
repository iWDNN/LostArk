import React from "react";
import { useQuery } from "react-query";
import uuid from "react-uuid";
import styled from "styled-components";
import { fetchEvents } from "../api";
import Loading from "../components/Loading";
import { testEventsData } from "../testData";
import { INewsEvents } from "../types";
import Calendar from "../components/Calendar";
const List = styled.ul`
  min-width: 700px;
  display: flex;
  flex-direction: column;
`;
const Item = styled.li`
  width: 100%;
  display: flex;
  border-radius: 15px;
  background-color: #fff;
  border: 2px solid rgba(0, 0, 0, 0.2);
  margin: 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #eee;
  }
`;

const Thumbnail = styled.div<{ src?: string }>`
  width: 35%;
  height: 120px;
  margin: 10px;
  border-radius: 15px;
  background: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const Info = styled.div`
  width: 60%;
  margin: 15px;
  h1 {
    margin: 2px 0;
    font-size: 1.5em;
    font-weight: 700;
  }
  p {
    margin-top: 1em;
    span:first-child {
      font-weight: 600;
      margin-right: 0.4em;
    }
    span {
      font-size: 1.05em;
    }
  }
`;
export default function Events() {
  // const { isLoading, data: fetchEventsData } = useQuery<INewsEvents[]>(
  //   "news-event",
  //   fetchEvents
  // );
  return (
    <>
      <Calendar />
      {/* {isLoading ? (
        <Loading />
      ) : (
      <List>
        {testEventsData?.map((post) => (
          <a
            key={uuid()}
            href={post.Link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Item>
              <Thumbnail src={post.Thumbnail} />

              <Info>
                <h1>{post.Title}</h1>
                <p>
                  <span>이벤트 기간:</span>
                  <span>
                    {new Date(post.StartDate).toLocaleDateString()} ~{" "}
                  </span>
                  <span>{new Date(post.EndDate).toLocaleDateString()}</span>
                </p>
                <p>
                  <span>보상 날짜:</span>
                  <span>
                    {post.RewardDate
                      ? new Date(post.RewardDate).toLocaleDateString()
                      : "."}
                  </span>
                </p>
              </Info>
            </Item>
          </a>
        ))}
      </List>
       )} */}
    </>
  );
}
