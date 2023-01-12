import React, { useState } from "react";
import { useQuery } from "react-query";
import uuid from "react-uuid";
import styled from "styled-components";
import { fetchEvents } from "../api";
import Loading from "../components/Loading";
import { testEventsData } from "../testData";
import { INewsEvents } from "../types";
import Calendar from "../components/Calendar";
import { AnimatePresence, motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { hoverEventData } from "../atoms";
const EventsCt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Slider = styled.div`
  position: relative;
  height: 590px;
  overflow: hidden;
`;
const Col = styled(motion.ul)`
  width: 560px;
  height: 5px;
  display: grid;
  grid-template-columns: repeat(1, 4fr);
  gap: 10px;
  a {
    display: block;
  }
`;
const Box = styled.li`
  width: 100%;
  height: 140px;
  display: flex;
  border-radius: 15px;
  background-color: #fff;
  border: 2px solid rgba(0, 0, 0, 0.2);
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

const colVariants = {
  hidden: {
    y: 590,
  },
  visible: {
    y: 0,
  },
  exit: {
    y: -590,
  },
};
const offset = 4;
export default function Events() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if (leaving) return;
    setLeaving(true);
    const totalEvents = testEventsData.length;
    const maxIndex = Math.floor(totalEvents / offset);
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const { isLoading, data: fetchEventsData } = useQuery<INewsEvents[]>(
    "news-event",
    fetchEvents
  );
  const setHoverData = useSetRecoilState(hoverEventData);
  return (
    <>
      <h1 onClick={increaseIndex}>testBtn</h1>
      <EventsCt>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Slider>
              <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                <Col
                  variants={colVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ type: "tween", duration: 1 }}
                  key={index}
                >
                  {fetchEventsData
                    ?.slice(offset * index, offset * index + offset)
                    .map((post) => (
                      <a
                        key={uuid()}
                        href={post.Link}
                        rel="noopener noreferrer"
                        target="_blank"
                        onMouseOver={() => setHoverData(post)}
                      >
                        <Box>
                          <Thumbnail src={post.Thumbnail} />

                          <Info>
                            <h1>{post.Title}</h1>
                            <p>
                              <span>이벤트 기간:</span>
                              <span>
                                {new Date(post.StartDate).toLocaleDateString()}{" "}
                                ~{" "}
                              </span>
                              <span>
                                {new Date(post.EndDate).toLocaleDateString()}
                              </span>
                            </p>
                            <p>
                              <span>보상 날짜:</span>
                              <span>
                                {post.RewardDate
                                  ? new Date(
                                      post.RewardDate
                                    ).toLocaleDateString()
                                  : "."}
                              </span>
                            </p>
                          </Info>
                        </Box>
                      </a>
                    ))}
                </Col>
              </AnimatePresence>
            </Slider>
            <Calendar />
          </>
        )}
      </EventsCt>
    </>
  );
}
