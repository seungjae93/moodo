import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}
interface SubCategory {
  [key: string]: Option[];
}
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

const StoreSelectbox = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState<Option[]>([]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setSubCategory(subCategories[selectedCategory] || []); // 선택한 메인 카테고리에 따라 해당 서브 카테고리 설정
  };

  const [subCategoryValue, setSubCategoryValue] = useState("");

  const handleSubCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSubCategory = event.target.value;
    setSubCategoryValue(selectedSubCategory);
    // 선택한 소분류 값으로 해야할 작업 수행
  };

  console.log("category", category);
  console.log("subCategoryValue", subCategoryValue);
  return (
    <div>
      <div>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">대분류 선택</option>
          {mainCategories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select value={subCategoryValue} onChange={handleSubCategoryChange}>
          <option value="">소분류 선택</option>
          {subCategory.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StoreSelectbox;
