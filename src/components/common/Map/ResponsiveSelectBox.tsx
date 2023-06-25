import React, { useState, ChangeEvent } from "react";

import Button from "../Button/Button";
import { StMoodoMapSelectBox } from "../../../libs/styles/StMoodoMapSelectBox";
import { ResponsiveSelectBoxProps } from "../../../typings/detail.type";
import {
  propertyTypes,
  transactionTypes,
  mainCategories,
  subCategories,
} from "../../../libs/Categories";

interface Option {
  value: string;
  label: string;
}

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
