import React from "react";
import { useQuery } from "react-query";
import uuid from "react-uuid";
import styled from "styled-components";
import { fetchEvents } from "../api";
import Loading from "../components/Loading";
import { testEventsData } from "../testData";
import { INewsEvents } from "../types";
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  background-color: #fff;
`;
const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  a {
    width: 100%;
    display: block;
  }
`;

const Thumbnail = styled.div<{ src?: string }>`
  max-width: 100%;
  height: 200px;
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;
const Info = styled.div`
  padding: 5px 0 5px 5px;
  background-color: #eee;
  h1 {
    margin: 2px 0;
    font-weight: 700;
  }
  p {
    margin: 4px 0;
  }
`;
export default function Events() {
  // const { isLoading, data: fetchEventsData } = useQuery<INewsEvents[]>(
  //   "news-event",
  //   fetchEvents
  // );
  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
      <List>
        {testEventsData?.map((post) => (
          <Item key={uuid()}>
            <a href={post.Link} rel="noopener noreferrer" target="_blank">
              <Thumbnail src={post.Thumbnail} />
            </a>
            <Info>
              <h1>{post.Title}</h1>
              <p>
                <span>{new Date(post.StartDate).toLocaleDateString()} ~ </span>
                <span>{new Date(post.EndDate).toLocaleDateString()}</span>
              </p>
              <h2>
                {post.RewardDate
                  ? new Date(post.RewardDate).toLocaleDateString()
                  : "."}
              </h2>
            </Info>
          </Item>
        ))}
      </List>
      {/* )} */}
    </>
  );
}
