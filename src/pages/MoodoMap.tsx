import { useState } from "react";
import { useParams } from "react-router-dom";

import MapContainer from "../components/common/Map/MapContainer";
import Search from "../components/common/Map/Search";
import styled from "styled-components";
import flex from "../libs/styles/utilFlex";
import SelectBox from "../components/common/Map/SelectBox";
import CardProfile from "../components/common/Map/EstateDetail/CardProfile";
import EstateCard from "../components/common/Map/EstateDetail/EstateCard";

function MoodoMap() {
  const userId = useParams().id;
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

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
          </StMoodoMap.CardBox>
        </StMoodoMap.EstateCard>
      </StMoodoMap.ContentWrapper>
    </StMoodoMap.Wrapper>
  );
}

export default MoodoMap;

const StMoodoMap = {
  Wrapper: styled.div`
    ${flex({ justify: "", align: "", direction: "column" })}
    width:100%;
    height: calc(100vh - 29px);
    overflow: hidden;
    overflow-y: hidden;
  `,
  searchBox: styled.div`
    ${flex({ justify: "", gap: "10px" })}
    padding: 50px 0px 20px 20px;
    width: 100%;
    height: 90px;
    z-index: 10;
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
    width: 500px;
    height: 100%;
  `,
  CardBox: styled.div`
    ${flex({ align: "flex-start", gap: "10px" })}
    padding-bottom:10px;
    margin: 30px 10px 95px 10px;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: #ccc;
    }
  `,
};
