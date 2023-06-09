import { useState, useEffect, useCallback } from "react";

import MapContainer from "../components/common/Map/MapContainer";
import Search from "../components/common/Map/Search";
import palette from "../libs/styles/palette";
import CardProfile from "../components/common/Map/EstateDetail/CardProfile";
import EstateCard from "../components/common/Map/EstateDetail/EstateCard";
import SelectBox from "../components/common/Map/SelectBox";
import ResponsiveSelectBox from "../components/common/Map/ResponsiveSelectBox";
import LoadingSpinner from "../components/common/loading/LoadingSpinner";

import { StMoodoMap } from "../libs/styles/StMoodoMap";
import { EstateDetailData } from "../typings/detail.type";
import { RxMinus } from "react-icons/rx";
import { RiEqualizerFill } from "react-icons/ri";

function MoodoMap() {
  const [searchValue, setSearchValue] = useState("");
  const [mapData, setMapData] = useState<EstateDetailData[]>([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(
    []
  );
  const [selectedDealTypes, setSelectedDealTypes] = useState<string[]>([]);

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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  //반응형 클릭시 EstateCard확장
  const [isEstateCardExpanded, setIsEstateCardExpanded] = useState(false);

  const handleSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handleFilterClick = useCallback(() => {
    setIsFilterOpen((prev) => !prev);
  }, []);

  const handleDataReceived = useCallback((data: any) => {
    setMapData(data);
  }, []);
  //매물종류 거래유형 checkbox change
  const handlePropertyTypesChange = useCallback(
    (updatedPropertyTypes: string[]) => {
      setSelectedPropertyTypes(updatedPropertyTypes);
    },
    []
  );

  const handleDealTypesChange = useCallback((updatedDealTypes: string[]) => {
    setSelectedDealTypes(updatedDealTypes);
  }, []);

  //보증금 최소
  const handleDepositMinChange = useCallback((value: string) => {
    setDepositMin(value);
  }, []);

  //보증금 최대
  const handleDepositMaxChange = useCallback((value: string) => {
    setDepositMax(value);
  }, []);

  //월세 최저
  const handleMonthlyMinChange = useCallback((value: string) => {
    setMonthlyMin(value);
  }, []);

  //월세 최고
  const handleMonthlyMaxChange = useCallback((value: string) => {
    setMonthlyMax(value);
  }, []);

  //권리금 최저
  const handleRightMoneyMinChange = useCallback((value: string) => {
    setRightMoneyMin(value);
  }, []);

  //권리금 최고
  const handleRightMoneyMaxChange = useCallback((value: string) => {
    setRightMoneyMax(value);
  }, []);

  //업종 대분류
  const handleStoreCategoryChange = useCallback((selectedCategory: string) => {
    setStoreCategory(selectedCategory);
  }, []);

  //업종 소분류
  const handleSubStoreCategoryChange = useCallback(
    (selectedSubCategory: string) => {
      setStoreSubCategoryValue(selectedSubCategory);
    },
    []
  );

  const handleEstateCardClick = useCallback(() => {
    setIsEstateCardExpanded((prev) => !prev);
  }, []);

  //버튼 초기화
  const handleResetButtonClick = useCallback(() => {
    setDepositMin("");
    setDepositMax("");
    setMonthlyMin("");
    setMonthlyMax("");
    setRightMoneyMin("");
    setRightMoneyMax("");
  }, []);

  useEffect(() => {
    const filteredList = Array.isArray(mapData)
      ? mapData.filter((estate) => {
          if (
            (selectedPropertyTypes.length === 0 ||
              selectedPropertyTypes.includes(estate.typeOfProperty)) &&
            (selectedDealTypes.length === 0 ||
              selectedDealTypes.includes(estate.transactionType)) &&
            (depositMin === "" ||
              (estate.deposit &&
                parseInt(estate.deposit) >= parseInt(depositMin) &&
                parseInt(estate.deposit) <= parseInt(depositMax))) &&
            (monthlyMin === "" ||
              (estate.monthly &&
                parseInt(estate.monthly) >= parseInt(monthlyMin) &&
                parseInt(estate.monthly) <= parseInt(monthlyMax))) &&
            (rightMoneyMin === "" ||
              (estate.rightMoney &&
                parseInt(estate.rightMoney) >= parseInt(rightMoneyMin) &&
                parseInt(estate.rightMoney) <= parseInt(rightMoneyMax))) &&
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
    selectedPropertyTypes,
    selectedDealTypes,
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

  return (
    <StMoodoMap.Wrapper>
      <>
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

              {isFilterOpen && (
                <StMoodoMap.FilterBox>
                  <ResponsiveSelectBox
                    depositMin={depositMin}
                    depositMax={depositMax}
                    monthlyMin={monthlyMin}
                    monthlyMax={monthlyMax}
                    rightMoneyMin={rightMoneyMin}
                    rightMoneyMax={rightMoneyMax}
                    storeCategory={storeCategory}
                    subStoreCategoryValue={subStoreCategoryValue}
                    selectedPropertyTypes={selectedPropertyTypes}
                    selectedDealTypes={selectedDealTypes}
                    onSelectedPropertyTypesChange={handlePropertyTypesChange}
                    onSelectedDealTypesChange={handleDealTypesChange}
                    onDepositMinChange={handleDepositMinChange}
                    onDepositMaxChange={handleDepositMaxChange}
                    onMonthlyMinChange={handleMonthlyMinChange}
                    onMonthlyMaxChange={handleMonthlyMaxChange}
                    onRightMoneyMinChange={handleRightMoneyMinChange}
                    onRightMoneyMaxChange={handleRightMoneyMaxChange}
                    onPriceResetButtonClick={handleResetButtonClick}
                    onStoreCategoryChange={handleStoreCategoryChange}
                    onSubStoreCategoryChange={handleSubStoreCategoryChange}
                    onFilterClick={handleFilterClick}
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
                    filteredMapList.map((estate) => (
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
                onSelectedPropertyTypesChange={handlePropertyTypesChange}
                onSelectedDealTypesChange={handleDealTypesChange}
                selectedPropertyTypes={selectedPropertyTypes}
                selectedDealTypes={selectedDealTypes}
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
                    filteredMapList.map((estate) => (
                      <EstateCard key={estate?.estateId} estate={estate} />
                    ))}
                </StMoodoMap.CardBox>
              </StMoodoMap.EstateCard>
            </StMoodoMap.ContentWrapper>
          </>
        )}
      </>
    </StMoodoMap.Wrapper>
  );
}

export default MoodoMap;
