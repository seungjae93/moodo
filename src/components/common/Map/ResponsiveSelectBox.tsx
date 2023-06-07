import React, { useState, ChangeEvent } from "react";

import Button from "../Button/Button";
import { StMoodoMapSelectBox } from "../../../libs/styles/StMoodoMapSelectBox";
import { ResponsiveSelectBoxProps } from "../../../typings/detail.type";

interface PropertyType {
  id: string;
  name: string;
}

interface TransactionType {
  id: string;
  name: string;
}

interface Option {
  value: string;
  label: string;
}

interface SubCategory {
  [key: string]: Option[];
}
const propertyTypes: PropertyType[] = [
  { id: "원/투룸", name: "원/투룸" },
  { id: "빌라/주택", name: "빌라/주택" },
  { id: "아파트", name: "아파트" },
  { id: "상가/사무실", name: "상가/사무실" },
  { id: "건물", name: "건물" },
];

const transactionTypes: TransactionType[] = [
  { id: "매매", name: "매매" },
  { id: "전세", name: "전세" },
  { id: "월세", name: "월세" },
];

const mainCategories: Option[] = [
  { value: "사무실", label: "사무실" },
  { value: "휴게음식점", label: "휴게음식점" },
  { value: "일반음식점", label: "일반음식점" },
  { value: "주류", label: "주류" },
  { value: "오락/체육시설", label: "오락/체육시설" },
  { value: "판매점", label: "판매점" },
  { value: "서비스업", label: "서비스업" },
  { value: "기타업종", label: "기타업종" },
];

const subCategories: SubCategory = {
  사무실: [{ value: "사무실", label: "사무실" }],
  휴게음식점: [
    { value: "카페", label: "카페" },
    { value: "치킨집", label: "치킨집" },
    { value: "제과점", label: "제과점" },
    { value: "피자집", label: "피자집" },
    { value: "패스트푸드", label: "패스트푸드" },
    { value: "기타", label: "기타" },
  ],
  일반음식점: [
    { value: "한식", label: "한식" },
    { value: "고기집", label: "고기집" },
    { value: "분식집", label: "분식집" },
    { value: "회", label: "회" },
    { value: "중국집", label: "중국집" },
    { value: "일식", label: "일식" },
    { value: "레스토랑", label: "레스토랑" },
    { value: "기타", label: "기타" },
  ],
  주류: [
    { value: "호프집", label: "호프집" },
    { value: "바", label: "바" },
    { value: "이자카야", label: "이자카야" },
    { value: "노래주점", label: "노래주점" },
    { value: "실내포차", label: "실내포차" },
    { value: "기타", label: "기타" },
  ],
  "오락/체육시설": [
    { value: "당구장", label: "당구장" },
    { value: "노래방", label: "노래방" },
    { value: "피씨방", label: "피씨방" },
    { value: "헬스장", label: "헬스장" },
    { value: "스크린골프", label: "스크린골프" },
    { value: "요가", label: "요가" },
    { value: "만화방", label: "만화방" },
    { value: "기타", label: "기타" },
  ],
  판매점: [{ value: "기타", label: "기타" }],
  서비스업: [
    { value: "미용실", label: "미용실" },
    { value: "마사지샵", label: "마사지샵" },
    { value: "세차장", label: "세차장" },
    { value: "키즈카페", label: "키즈카페" },
    { value: "네일아트", label: "네일아트" },
    { value: "빨래방", label: "빨래방" },
    { value: "독서실", label: "독서실" },
    { value: "기타", label: "기타" },
  ],
  기타업종: [
    { value: "학원", label: "학원" },
    { value: "병원/약국", label: "병원/약국" },
    { value: "펜션", label: "펜션" },
    { value: "모텔", label: "모텔" },
    { value: "사우나", label: "사우나" },
    { value: "주유소", label: "주유소" },
    { value: "기타", label: "기타" },
  ],
};
export default function ResponsiveSelectBox({
  depositMin,
  depositMax,
  monthlyMin,
  monthlyMax,
  rightMoneyMin,
  rightMoneyMax,
  storeCategory,
  subStoreCategoryValue,
  selectedPropertyTypes,
  selectedDealTypes,
  onSelectedPropertyTypesChange,
  onSelectedDealTypesChange,
  onDepositMinChange,
  onDepositMaxChange,
  onMonthlyMinChange,
  onMonthlyMaxChange,
  onRightMoneyMinChange,
  onRightMoneyMaxChange,
  onStoreCategoryChange,
  onSubStoreCategoryChange,
  onFilterClick,
}: ResponsiveSelectBoxProps) {
  const [subCategory, setSubCategory] = useState<Option[]>([]);

  const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const propertyTypeId = event.target.value;
    const updatedPropertyTypes = selectedPropertyTypes.includes(propertyTypeId)
      ? selectedPropertyTypes.filter((id) => id !== propertyTypeId)
      : [...selectedPropertyTypes, propertyTypeId];
    onSelectedPropertyTypesChange(updatedPropertyTypes);
  };

  const handleDealTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dealTypeId = event.target.value;
    const updatedDealTypes = selectedDealTypes.includes(dealTypeId)
      ? selectedDealTypes.filter((id) => id !== dealTypeId)
      : [...selectedDealTypes, dealTypeId];
    onSelectedDealTypesChange(updatedDealTypes);
  };

  const handleDepositMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    onDepositMinChange(value);
  };

  const handleDepositMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    onDepositMaxChange(value);
  };

  const handleMonthlyMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    onMonthlyMinChange(value);
  };

  const handleMonthlyMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    onMonthlyMaxChange(value);
  };

  const handleRightMoneyMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    onRightMoneyMinChange(value);
  };

  const handleRightMoneyMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    onRightMoneyMaxChange(value);
  };

  const onHandleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    onStoreCategoryChange(selectedCategory);

    if (selectedCategory === "전체") {
      onSubStoreCategoryChange("전체");
      setSubCategory([]);
    } else {
      setSubCategory(subCategories[selectedCategory] || []);
      onSubStoreCategoryChange("전체");
    }
  };
  const onHandleSubCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSubCategory = e.target.value;
    onSubStoreCategoryChange(selectedSubCategory);
  };

  return (
    <StMoodoMapSelectBox.CheckBtn>
      <h2>매물 유형</h2>
      <div className="checkBtnContainer">
        {propertyTypes.map((propertyType) => (
          <div className="checkBtn" key={propertyType.id}>
            <input
              type="checkbox"
              id={propertyType.id}
              value={propertyType.id}
              checked={selectedPropertyTypes.includes(propertyType.id)}
              onChange={handlePropertyTypeChange}
            />
            <label htmlFor={propertyType.id}> {propertyType.name}</label>
          </div>
        ))}
      </div>
      <h2>거래 유형</h2>
      <div className="checkBtnContainer">
        {transactionTypes.map((transactionType) => (
          <div className="checkBtn" key={transactionType.id}>
            <input
              type="checkbox"
              id={transactionType.id}
              value={transactionType.id}
              checked={selectedDealTypes.includes(transactionType.id)}
              onChange={handleDealTypeChange}
            />
            <label htmlFor={transactionType.id}> {transactionType.name}</label>
          </div>
        ))}
      </div>
      <h2>업종</h2>
      <div className="selectContainer">
        <StMoodoMapSelectBox.Select
          value={storeCategory}
          onChange={onHandleCategoryChange}
        >
          <option value="전체">전체</option>
          {mainCategories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StMoodoMapSelectBox.Select>
        ~
        <StMoodoMapSelectBox.Select
          value={subStoreCategoryValue}
          onChange={onHandleSubCategoryChange}
        >
          <option value="전체">전체</option>
          {subCategory.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StMoodoMapSelectBox.Select>
      </div>
      <h2>보증금</h2>
      <div className="inputContainer">
        <StMoodoMapSelectBox.Input
          type="number"
          value={depositMin}
          onChange={handleDepositMinChange}
        />
        ~
        <StMoodoMapSelectBox.Input
          type="number"
          value={depositMax}
          onChange={handleDepositMaxChange}
        />
        만원
      </div>
      <h2>월세</h2>
      <div className="inputContainer">
        <StMoodoMapSelectBox.Input
          type="number"
          value={monthlyMin}
          onChange={handleMonthlyMinChange}
        />
        ~
        <StMoodoMapSelectBox.Input
          type="number"
          value={monthlyMax}
          onChange={handleMonthlyMaxChange}
        />
        만원
      </div>
      <h2>권리금</h2>
      <div className="inputContainer">
        <StMoodoMapSelectBox.Input
          type="number"
          value={rightMoneyMin}
          onChange={handleRightMoneyMinChange}
        />
        ~
        <StMoodoMapSelectBox.Input
          type="number"
          value={rightMoneyMax}
          onChange={handleRightMoneyMaxChange}
        />
        만원
      </div>
      <div className="completeBtnContainer">
        <Button.Cyan size="large" onClick={onFilterClick}>
          적용하기
        </Button.Cyan>
      </div>
    </StMoodoMapSelectBox.CheckBtn>
  );
}
