import { useState, useEffect } from "react";

import MapContainer from "../components/common/Map/MapContainer";
import Search from "../components/common/Map/Search";
import styled from "styled-components";
import flex from "../libs/styles/utilFlex";
import CardProfile from "../components/common/Map/EstateDetail/CardProfile";
import EstateCard from "../components/common/Map/EstateDetail/EstateCard";
import SelectBox from "../components/common/Map/SelectBox";

interface MapListData {
  addressOfJibun: string;
  addressOfProperty: string;
  deposit: string;
  detail: string;
  dong: string;
  elevator: string;
  estateId: number;
  userId: string;
  typeOfProperty: string;
  transactionType: string;
  monthly: string;
  price: string;
  maintenanceCost: string;
  moveInDate: string;
  moveInDateInput: string;
  supplyArea: string;
  exclusiveArea: string;
  numOfRoom: string;
  numOfBath: string;
  lowestFloor: string;
  highestFloor: string;
  numOfFloor: string;
  floor: string;
  parking: string;
  pet: string;
  options: string;
  lat: string;
  lng: string;
}

function MoodoMap() {
  const [searchValue, setSearchValue] = useState("");
  const [mapData, setMapData] = useState<MapListData[]>([]);
  const [selectedPropertyType, setSelectedPropertyType] =
    useState<string>("매물 종류");
  const [selectedDealType, setSelectedDealType] = useState<string>("거래 유형");
  const [filteredMapList, setFilteredMapList] = useState<MapListData[]>([]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };
  const handleDataReceived = (data: any) => {
    setMapData(data);
  };
  const handlePropertyTypeChange = (propertyType: string) => {
    setSelectedPropertyType(propertyType);

    // 선택된 속성 유형에 따라 거래 유형 초기화
    if (propertyType !== "매물 종류") {
      setSelectedDealType("거래 유형");
    }
  };

  const handleDealTypeChange = (dealType: string) => {
    setSelectedDealType(dealType);
  };

  useEffect(() => {
    // 필터링 로직
    const filteredList = Array.isArray(mapData)
      ? mapData.filter((estate) => {
          if (
            selectedPropertyType === "매물 종류" ||
            estate.typeOfProperty === selectedPropertyType
          ) {
            if (
              selectedDealType === "거래 유형" ||
              estate.transactionType === selectedDealType
            ) {
              return true;
            }
          }
          return false;
        })
      : [];
    setFilteredMapList(filteredList);
  }, [selectedPropertyType, selectedDealType, mapData]);

  return (
    <StMoodoMap.Wrapper>
      <StMoodoMap.searchBox>
        <Search onSearch={handleSearch} />
        <SelectBox
          onPropertyTypeChange={handlePropertyTypeChange}
          onDealTypeChange={handleDealTypeChange}
        />
      </StMoodoMap.searchBox>
      <StMoodoMap.ContentWrapper>
        <StMoodoMap.Map>
          <MapContainer
            searchValue={searchValue}
            onDataReceived={handleDataReceived}
            filteredMapList={filteredMapList}
          />
        </StMoodoMap.Map>
        <StMoodoMap.EstateCard>
          <CardProfile />
          <StMoodoMap.CardBox>
            {Array.isArray(filteredMapList) &&
              filteredMapList?.map((estate) => (
                <EstateCard key={estate?.estateId} estate={estate} />
              ))}
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
    ${flex({ align: "flex-start", gap: "12px" })}
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
