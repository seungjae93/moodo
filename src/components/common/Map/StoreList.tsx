import React, { useState } from "react";

import palette from "../../../libs/styles/palette";
import Button from "../Button/Button";
import { mainCategories, subCategories } from "../../../libs/Categories";
interface Option {
  value: string;
  label: string;
}

interface StoreListProps {
  onStoreCategoryChange: (selectedCategory: string) => void;
  onSubStoreCategoryChange: (selectedSubCategory: string) => void;
}

export default function StoreList({
  onStoreCategoryChange,
  onSubStoreCategoryChange,
}: StoreListProps) {
  const [category, setCategory] = useState("전체");
  const [subCategory, setSubCategory] = useState<Option[]>([]);
  const [subCategoryValue, setSubCategoryValue] = useState("전체");

  const onHandleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    onStoreCategoryChange(selectedCategory);
    if (selectedCategory === "전체") {
      setSubCategoryValue("전체");
      onSubStoreCategoryChange("전체");
      setSubCategory([]);
    } else {
      setSubCategory(subCategories[selectedCategory] || []);
      setSubCategoryValue("전체");
      onSubStoreCategoryChange("전체");
    }
  };
  const onHandleSubCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSubCategory = e.target.value;
    setSubCategoryValue(selectedSubCategory);
    onSubStoreCategoryChange(selectedSubCategory);
  };

  const handleStoreResetButtonClick = () => {
    setCategory("전체");
    setSubCategoryValue("전체");
    onStoreCategoryChange("전체");
    onSubStoreCategoryChange("전체");
  };
  return (
    <>
      <label
        style={{
          display: "block",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "400",
          color: "#90A0AE",
          width: "80px",
          flexWrap: "nowrap",
          overflow: "hidden",
        }}
      >
        대분류
      </label>
      <select
        style={{ width: "220px", height: "30px", borderRadius: "10px" }}
        value={category}
        onChange={onHandleCategoryChange}
      >
        <option value="전체">전체</option>
        {mainCategories.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <label
        style={{
          display: "block",
          fontSize: "15px",
          textAlign: "center",
          fontWeight: "400",
          color: "#90A0AE",
          width: "80px",
          flexWrap: "nowrap",
          overflow: "hidden",
        }}
      >
        소분류
      </label>
      <select
        style={{ width: "220px", height: "30px", borderRadius: "10px" }}
        value={subCategoryValue}
        onChange={onHandleSubCategoryChange}
      >
        <option value="전체">전체</option>
        {subCategory.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Button.Negative
        outlined
        borderColor={palette.cyan[5]}
        color={palette.cyan[5]}
        size="small"
        onClick={handleStoreResetButtonClick}
      >
        조건삭제
      </Button.Negative>
    </>
  );
}
