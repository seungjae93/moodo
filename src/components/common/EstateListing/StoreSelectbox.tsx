import React, { useState } from "react";

import palette from "../../../libs/styles/palette";
import { mainCategories, subCategories } from "../../../libs/Categories";

interface Option {
  value: string;
  label: string;
}
interface StoreSelectboxProps {
  handleCategoryChange?: ((category: string) => void) | undefined;
  handleSubCategoryChange?: ((subCategoryValue: string) => void) | undefined;
}

export default function StoreSelectbox({
  handleCategoryChange,
  handleSubCategoryChange,
}: StoreSelectboxProps) {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState<Option[]>([]);
  const [subCategoryValue, setSubCategoryValue] = useState("");

  const onHandleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubCategory(subCategories[selectedCategory] || []);
    if (handleCategoryChange) {
      handleCategoryChange(selectedCategory);
    } // 선택한 메인 카테고리에 따라 해당 서브 카테고리 설정
  };

  const onHandleSubCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSubCategory = e.target.value;
    setSubCategoryValue(selectedSubCategory);
    if (handleSubCategoryChange) {
      handleSubCategoryChange(selectedSubCategory);
    }
  };

  return (
    <>
      <label
        style={{
          display: "block",
          fontSize: "16px",
          textAlign: "center",
          fontWeight: "400",
          color: "#90A0AE",
          width: "100px",
          flexWrap: "nowrap",
          overflow: "hidden",
        }}
      >
        대분류
      </label>
      <select
        style={{ width: "115px", height: "30px" }}
        value={category}
        onChange={onHandleCategoryChange}
      >
        <option value="">대분류 선택</option>
        {mainCategories.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div
        style={{
          marginLeft: "30px",
          marginBottom: " 5px",
          fontSize: "25px",
          textAlign: "center",
          color: palette.gray[0],
        }}
      >
        |
      </div>
      <label
        style={{
          display: "block",
          fontSize: "16px",
          textAlign: "center",
          fontWeight: "400",
          color: "#90A0AE",
          width: "100px",
          flexWrap: "nowrap",
          overflow: "hidden",
          marginLeft: "10px",
        }}
      >
        소분류
      </label>
      <select
        style={{ width: "115px", height: "30px" }}
        value={subCategoryValue}
        onChange={onHandleSubCategoryChange}
      >
        <option value="">소분류 선택</option>
        {subCategory.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
