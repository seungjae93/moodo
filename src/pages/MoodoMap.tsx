import React, { useState } from "react";
import MapContainer from "../components/common/Map/MapContainer";
import Search from "../components/common/Map/Search";
import styled from "styled-components";
import flex from "../libs/styles/utilFlex";
import SelectBox from "../components/common/Map/SelectBox";

function MoodoMap() {
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
          <MapContainer />
        </StMoodoMap.Map>
        <StMoodoMap.estateCard></StMoodoMap.estateCard>
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
  estateCard: styled.div`
    width: 25%;
    height: 100%;
  `,
};
