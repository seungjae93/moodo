import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

import flex from "../../../libs/styles/utilFlex";
import palette from "../../../libs/styles/palette";
import Button from "../Button/Button";

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
export default function ResponsiveSelectBox() {
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
  const [category, setCategory] = useState("전체");
  const [subCategory, setSubCategory] = useState<Option[]>([]);
  const [subCategoryValue, setSubCategoryValue] = useState("전체");

  const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const propertyTypeId = event.target.value;
    if (selectedPropertyTypes.includes(propertyTypeId)) {
      setSelectedPropertyTypes(
        selectedPropertyTypes.filter((id) => id !== propertyTypeId)
      );
    } else {
      setSelectedPropertyTypes([...selectedPropertyTypes, propertyTypeId]);
    }
  };

  const handleDealTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dealTypeId = event.target.value;
    if (selectedDealTypes.includes(dealTypeId)) {
      setSelectedDealTypes(selectedDealTypes.filter((id) => id !== dealTypeId));
    } else {
      setSelectedDealTypes([...selectedDealTypes, dealTypeId]);
    }
  };

  const handleDepositMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setDepositMin(value);
    // onDepositMinChange(value);
  };

  const handleDepositMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setDepositMax(value);
    // onDepositMaxChange(value);
  };

  const handleMonthlyMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setMonthlyMin(value);
    // onMonthlyMinChange(value);
  };

  const handleMonthlyMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setMonthlyMax(value);
    // onMonthlyMaxChange(value);
  };

  const handleRightMoneyMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setRightMoneyMin(value);
    // onRightMoneyMinChange(value);
  };

  const handleRightMoneyMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setRightMoneyMax(value);
    // onRightMoneyMaxChange(value);
  };

  const onHandleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    // onStoreCategoryChange(selectedCategory);
    if (selectedCategory === "전체") {
      setSubCategoryValue("전체");
      // onSubStoreCategoryChange("전체");
      setSubCategory([]);
    } else {
      setSubCategory(subCategories[selectedCategory] || []);
      setSubCategoryValue("전체");
      // onSubStoreCategoryChange("전체");
    }
  };
  const onHandleSubCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSubCategory = e.target.value;
    setSubCategoryValue(selectedSubCategory);
    // onSubStoreCategoryChange(selectedSubCategory);
  };

  return (
    <StCheckBtn>
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
        <StSelect value={category} onChange={onHandleCategoryChange}>
          <option value="전체">전체</option>
          {mainCategories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StSelect>
        ~
        <StSelect value={subCategoryValue} onChange={onHandleSubCategoryChange}>
          <option value="전체">전체</option>
          {subCategory.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StSelect>
      </div>
      <h2>보증금</h2>
      <div className="inputContainer">
        <StInput
          type="number"
          value={depositMin}
          onChange={handleDepositMinChange}
        />
        ~
        <StInput
          type="number"
          value={depositMax}
          onChange={handleDepositMaxChange}
        />
        만원
      </div>
      <h2>월세</h2>
      <div className="inputContainer">
        <StInput
          type="number"
          value={monthlyMin}
          onChange={handleMonthlyMinChange}
        />
        ~
        <StInput
          type="number"
          value={monthlyMax}
          onChange={handleMonthlyMaxChange}
        />
        만원
      </div>
      <h2>권리금</h2>
      <div className="inputContainer">
        <StInput
          type="number"
          value={rightMoneyMin}
          onChange={handleRightMoneyMinChange}
        />
        ~
        <StInput
          type="number"
          value={rightMoneyMax}
          placeholder="만원"
          onChange={handleRightMoneyMaxChange}
        />
        만원
      </div>
      <div className="completeBtnContainer">
        <Button.Cyan size="large">적용하기</Button.Cyan>
      </div>
    </StCheckBtn>
  );
}

const StCheckBtn = styled.div`
  ${flex({ direction: "column", align: "", gap: "15px" })}
  .checkBtnContainer {
    ${flex({ justify: "", align: "", gap: "5px" })}
    flex-wrap:wrap;
  }
  .selectContainer {
    ${flex({ gap: "5px" })}
    margin-right:30px;
  }
  .inputContainer {
    ${flex({ gap: "5px" })}
  }
  .completeBtnContainer {
    ${flex({})}
  }
  .checkBtn {
    font-size: 17px;
    width: 100px;
    height: 36px;
    border: none;
    padding: 5px;
  }
  .checkBtn input[type="checkbox"] {
    display: none;
  }
  .checkBtn label {
    display: block;
    border-radius: 10px;
    text-align: center;
    line-height: 30px;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
  }

  /* hover */
  .checkBtn input[type="checkbox"]:hover + label {
    background-color: ${palette.cyan[5]};
    color: #fff;
  }
  /* Checked */
  .checkBtn input[type="checkbox"]:checked + label {
    background-color: ${palette.cyan[5]};
    color: #fff;
  }
  /* Disabled */
  .checkBtn input[type="checkbox"] + label {
    border: 2px solid #c4cbcd;
  }
`;

const StSelect = styled.select`
  border: 1px solid black;
  border-radius: 10px;
  width: 100px;
  height: 30px;
`;
const StInput = styled.input`
  width: 100px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
`;
