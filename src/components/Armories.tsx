import React from "react";
import { useQueries } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ARMORIES_TYPES, fetchCharArmoies } from "../api";
import Loading from "./Loading";

interface IQuery {
  queryKey: [string];
  queryFn: Function;
}

const ArmoryCt = styled.div``;
const List = styled.ul``;

export default function Armories() {
  const { charId } = useParams();
  const fetchs: any = ARMORIES_TYPES.map((type) => ({
    queryKey: [type],
    queryFn: () => fetchCharArmoies(charId!, type),
  }));
  const res_list = useQueries([
    ...fetchs,
    // {
    //   queryKey: ["profiles"],
    //   queryFn: () => fetchCharArmoies(charId!, ARMORIES_TYPES[0]),
    // },
    // {
    //   queryKey: ["equipment"],
    //   queryFn: () => fetchCharArmoies(charId!, ARMORIES_TYPES[1]),
    // },
  ]);
  console.log(res_list);
  return (
    <>
      <ArmoryCt>
        <List></List>
      </ArmoryCt>
    </>
  );
}
