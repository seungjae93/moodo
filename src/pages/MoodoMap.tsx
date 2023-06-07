import { useState, useEffect, ChangeEvent } from "react";
import MapContainer from "../components/common/Map/MapContainer";
import Search from "../components/common/Map/Search";
import styled from "styled-components";
import flex from "../libs/styles/utilFlex";
import palette from "../libs/styles/palette";
import CardProfile from "../components/common/Map/EstateDetail/CardProfile";
import EstateCard from "../components/common/Map/EstateDetail/EstateCard";
import SelectBox from "../components/common/Map/SelectBox";
import ResponsiveSelectBox from "../components/common/Map/ResponsiveSelectBox";

import { EstateDetailData } from "../typings/detail.type";
import { RxMinus } from "react-icons/rx";
import { RiEqualizerFill } from "react-icons/ri";

function MoodoMap() {
  const [searchValue, setSearchValue] = useState("");
  const [mapData, setMapData] = useState<EstateDetailData[]>([]);
  const [selectedPropertyType, setSelectedPropertyType] =
    useState<string>("매물 종류");
  const [selectedDealType, setSelectedDealType] = useState<string>("거래 유형");
  const [depositMin, setDepositMin] = useState("");
  const [depositMax, setDepositMax] = useState("");
  const [monthlyMin, setMonthlyMin] = useState("");
  const [monthlyMax, setMonthlyMax] = useState("");
  const [rightMoneyMin, setRightMoneyMin] = useState("");
  const [rightMoneyMax, setRightMoneyMax] = useState("");
  const [storeCategory, setStoreCategory] = useState("전체");
  const [subStoreCategoryValue, setStoreSubCategoryValue] = useState("전체");
  const [filteredMapList, setFilteredMapList] = useState<EstateDetailData[]>(
    []
  );
  const [filterOpen, setFilterOpen] = useState(false);

  //반응형 클릭시 EstateCard확장
  const [isEstateCardExpanded, setIsEstateCardExpanded] = useState(false);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleFilterClick = () => {
    setFilterOpen(!filterOpen);
  };

  const handleDataReceived = (data: any) => {
    setMapData(data);
  };

  //매물종류 change
  const handlePropertyTypeChange = (propertyType: string) => {
    setSelectedPropertyType(propertyType);
    setSelectedDealType("거래 유형");
  };

  //거래유형 change
  const handleDealTypeChange = (dealType: string) => {
    setSelectedDealType(dealType);
  };

  //보증금 최소
  const handleDepositMinChange = (value: string) => {
    setDepositMin(value);
  };

  //보증금 최대
  const handleDepositMaxChange = (value: string) => {
    setDepositMax(value);
  };

  //월세 최저
  const handleMonthlyMinChange = (value: string) => {
    setMonthlyMin(value);
  };

  //월세 최고
  const handleMonthlyMaxChange = (value: string) => {
    setMonthlyMax(value);
  };

  //권리금 최저
  const handleRightMoneyMinChange = (value: string) => {
    setRightMoneyMin(value);
  };

  //권리금 최고
  const handleRightMoneyMaxChange = (value: string) => {
    setRightMoneyMax(value);
  };

  //업종 대분류
  const handleStoreCategoryChange = (selectedCategory: string) => {
    setStoreCategory(selectedCategory);
  };

  //업종 소분류
  const handleSubStoreCategoryChange = (selectedSubCategory: string) => {
    setStoreSubCategoryValue(selectedSubCategory);
  };

  const handleEstateCardClick = () => {
    setIsEstateCardExpanded((prev) => !prev);
  };

  //버튼 초기화
  const handleResetButtonClick = () => {
    setDepositMin("");
    setDepositMax("");
    setMonthlyMin("");
    setMonthlyMax("");
    setRightMoneyMin("");
    setRightMoneyMax("");
  };

  useEffect(() => {
    // 필터링 로직
    const filteredList = Array.isArray(mapData)
      ? mapData.filter((estate) => {
          if (
            (selectedPropertyType === "매물 종류" ||
              estate.typeOfProperty === selectedPropertyType) &&
            (selectedDealType === "거래 유형" ||
              estate.transactionType === selectedDealType) &&
            (depositMin === "" ||
              (estate.deposit &&
                estate.deposit >= depositMin &&
                estate.deposit <= depositMax)) &&
            (monthlyMin === "" ||
              (estate.monthly &&
                estate.monthly >= monthlyMin &&
                estate.monthly <= monthlyMax)) &&
            (rightMoneyMin === "" ||
              (estate.rightMoney &&
                estate.rightMoney >= rightMoneyMin &&
                estate.rightMoney <= rightMoneyMax)) &&
            (storeCategory === "전체" ||
              estate.mainCategory === storeCategory) &&
            (subStoreCategoryValue === "전체" ||
              estate.subCategory === subStoreCategoryValue)
          ) {
            return true;
          }
          return false;
        })
      : [];
    setFilteredMapList(filteredList);
  }, [
    selectedPropertyType,
    selectedDealType,
    depositMin,
    depositMax,
    monthlyMin,
    monthlyMax,
    rightMoneyMin,
    rightMoneyMax,
    storeCategory,
    subStoreCategoryValue,
    mapData,
  ]);
  console.log("depositMin", depositMin);
  console.log("depositMax", depositMax);
  console.log("monthlyMin", monthlyMin);
  console.log("monthlyMax", monthlyMax);
  console.log("rightMoneyMin", rightMoneyMin);
  console.log("rightMoneyMax", rightMoneyMax);
  console.log("storeCategory", storeCategory);
  console.log("subStoreCategoryValue", subStoreCategoryValue);
  return (
    <StMoodoMap.Wrapper>
      {window.innerWidth <= 930 ? (
        <>
          <StMoodoMap.searchBox>
            <Search onSearch={handleSearch} />

            <RiEqualizerFill
              style={{
                color: "black",
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
              onClick={handleFilterClick}
            />

            {filterOpen && (
              <StMoodoMap.FilterBox>
                <ResponsiveSelectBox
                  onDepositMinChange={handleDepositMinChange}
                  onDepositMaxChange={handleDepositMaxChange}
                  onMonthlyMinChange={handleMonthlyMinChange}
                  onMonthlyMaxChange={handleMonthlyMaxChange}
                  onRightMoneyMinChange={handleRightMoneyMinChange}
                  onRightMoneyMaxChange={handleRightMoneyMaxChange}
                  onPriceResetButtonClick={handleResetButtonClick}
                  onStoreCategoryChange={handleStoreCategoryChange}
                  onSubStoreCategoryChange={handleSubStoreCategoryChange}
                />
              </StMoodoMap.FilterBox>
            )}
          </StMoodoMap.searchBox>

          <CardProfile />
          <StMoodoMap.ContentWrapper>
            <StMoodoMap.Map>
              <MapContainer
                searchValue={searchValue}
                onDataReceived={handleDataReceived}
                filteredMapList={filteredMapList}
              />
            </StMoodoMap.Map>
            <StMoodoMap.EstateCard
              onClick={handleEstateCardClick}
              expanded={isEstateCardExpanded}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <RxMinus
                  style={{
                    color: palette.cyan[5],
                    width: "80px",
                    height: "40px",
                  }}
                />
                매물보기
              </div>
              <StMoodoMap.CardBox>
                {Array.isArray(filteredMapList) &&
                  filteredMapList?.map((estate) => (
                    <EstateCard key={estate?.estateId} estate={estate} />
                  ))}
              </StMoodoMap.CardBox>
            </StMoodoMap.EstateCard>
          </StMoodoMap.ContentWrapper>
        </>
      ) : (
        <>
          <StMoodoMap.searchBox>
            <Search onSearch={handleSearch} />
            <SelectBox
              onPropertyTypeChange={handlePropertyTypeChange}
              onDealTypeChange={handleDealTypeChange}
              onDepositMinChange={handleDepositMinChange}
              onDepositMaxChange={handleDepositMaxChange}
              onMonthlyMinChange={handleMonthlyMinChange}
              onMonthlyMaxChange={handleMonthlyMaxChange}
              onRightMoneyMinChange={handleRightMoneyMinChange}
              onRightMoneyMaxChange={handleRightMoneyMaxChange}
              onPriceResetButtonClick={handleResetButtonClick}
              onStoreCategoryChange={handleStoreCategoryChange}
              onSubStoreCategoryChange={handleSubStoreCategoryChange}
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
            <StMoodoMap.EstateCard
              onClick={handleEstateCardClick}
              expanded={isEstateCardExpanded}
            >
              <CardProfile />
              <StMoodoMap.CardBox>
                {Array.isArray(filteredMapList) &&
                  filteredMapList?.map((estate) => (
                    <EstateCard key={estate?.estateId} estate={estate} />
                  ))}
              </StMoodoMap.CardBox>
            </StMoodoMap.EstateCard>
          </StMoodoMap.ContentWrapper>
        </>
      )}
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
    @media screen and (max-width: 930px) {
      width: 100%;
    }
  `,
  searchBox: styled.div`
    ${flex({ justify: "", gap: "10px" })}
    padding: 50px 0px 20px 0px;
    width: 100%;
    height: 90px;
    z-index: 10;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    @media screen and (max-width: 930px) {
      padding: 25px 0px 25px 0px;
      width: 300px;
      height: 40px;
      z-index: 1000;
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      top: 70px;
      background-color: white;
      border: none;
    }
  `,
  ContentWrapper: styled.div`
    ${flex({ justify: "" })}
    width: 100%;
    height: 100%;
    @media screen and (max-width: 930px) {
      ${flex({
        direction: "column",
        gap: "",
      })}
    }
  `,
  Map: styled.div`
    width: 75%;
    height: 100%;
    @media screen and (max-width: 930px) {
      width: 100%;
      height: 100%;
    }
  `,
  EstateCard: styled.div`
    ${flex({ direction: "column", justify: "flex-start" })}
    width: 500px;
    height: 100%;

    @media screen and (max-width: 930px) {
      transition: height 0.6s ease;
      width: 100%;
      height: ${({ expanded }: { expanded: boolean }) =>
        expanded ? "60%" : "70px"};
      bottom: 0px;
      z-index: 50;
      position: absolute;
      background-color: white;
      overflow-y: hidden;
      overflow-x: hidden;
    }
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
    @media screen and (max-width: 930px) {
      margin: 30px 10px 0px 10px;
    }
  `,
  FilterBox: styled.div`
    ${flex({ direction: "column", align: "", justify: "" })}
    padding: 10px;
    position: absolute;
    border: 1px solid #eee;
    background-color: #fff;
    width: 340px;
    height: 580px;
    border-radius: 5px;
    font-size: 15px;
    z-index: 10;
    top: 50px;
  `,
};
