import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import MapContainer from "../components/common/Map/MapContainer";
import Search from "../components/common/Map/Search";
import styled from "styled-components";
import flex from "../libs/styles/utilFlex";
import SelectBox from "../components/common/Map/SelectBox";
import CardProfile from "../components/common/Map/EstateDetail/CardProfile";
import EstateCard from "../components/common/Map/EstateDetail/EstateCard";
import { mapApi } from "../apis/axios";

function MoodoMap() {
  const userId = useParams().id;
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const { data }: { data?: any } = useQuery(
    ["mapEstateList", userId],
    () => mapApi.get(userId as string),
    {
      onError: (error) => {
        console.error(error);
      },
    }
  );

  return (
    <StMoodoMap.Wrapper>
      <StMoodoMap.searchBox>
        <Search onSearch={handleSearch} />
        <SelectBox />
      </StMoodoMap.searchBox>
      <StMoodoMap.ContentWrapper>
        <StMoodoMap.Map>
          <MapContainer searchValue={searchValue} />
        </StMoodoMap.Map>
        <StMoodoMap.EstateCard>
          <CardProfile />
          <StMoodoMap.CardBox>
            <EstateCard />
            <EstateCard />
            <EstateCard />
            <EstateCard />
          </StMoodoMap.CardBox>
        </StMoodoMap.EstateCard>
      </StMoodoMap.ContentWrapper>
    </StMoodoMap.Wrapper>
  );
}

export default MoodoMap;

const StMoodoMap = {
  Wrapper: styled.div`
    ${flex({ align: "", direction: "column" })}
    width:100%;
    height: 97vh;
  `,
  searchBox: styled.div`
    ${flex({ justify: "", gap: "10px" })}
    padding: 50px 0px 20px 20px;
    width: 100%;
    height: 90px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  `,
  ContentWrapper: styled.div`
    ${flex({ justify: "" })}
    width: 100%;
    height: 100%;
  `,
  Map: styled.div`
    width: 75%;
    height: 100%;
  `,
  EstateCard: styled.div`
    ${flex({ direction: "column", justify: "flex-start" })}
    padding: 20px;
    width: 500px;
    height: 100%;
  `,
  CardBox: styled.div`
    ${flex({ gap: "10px" })}
    flex-wrap:nowrap;
  `,
};
