import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";

interface SelectBoxProps {
  onPropertyTypeChange: (propertyType: string) => void;
  onDealTypeChange: (dealType: string) => void;
}

function SelectBox({ onPropertyTypeChange, onDealTypeChange }: SelectBoxProps) {
  const [propertyType, setPropertyType] = useState<string>("매물 종류");
  const [dealType, setDealType] = useState<string>("거래 유형");

  useEffect(() => {
    if (propertyType === "매물 종류") {
      setDealType("거래 유형");
    }

    if (propertyType !== "매물 종류") {
      setDealType("거래 유형");
    }
  }, [propertyType]);

  const handlePropertyTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedPropertyType = e.currentTarget.value;
    setPropertyType(selectedPropertyType);
    onPropertyTypeChange(selectedPropertyType);
  };
  const handleDealTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedDealType = e.currentTarget.value;
    setDealType(selectedDealType);
    onDealTypeChange(selectedDealType);
  };

  const propertyOption = [
    { key: 1, value: "매물 종류" },
    { key: 2, value: "원/투룸" },
    { key: 3, value: "주택/빌라" },
    { key: 4, value: "아파트" },
    { key: 5, value: "상가/사무실" },
    { key: 6, value: "건물" },
  ];

  const dealTypeOption = [
    { key: 1, value: "거래 유형" },
    { key: 2, value: "월세" },
    { key: 3, value: "전세" },
    { key: 4, value: "매매" },
  ];

  return (
    <Wrapper>
      <div style={{ display: "flex", gap: "10px" }}>
        <SelectList onChange={handlePropertyTypeChange} value={propertyType}>
          {propertyOption?.map((item) => (
            <SelectOption key={item.key} value={item.value}>
              {item.value}
            </SelectOption>
          ))}
        </SelectList>
        <SelectList onChange={handleDealTypeChange} value={dealType}>
          {dealTypeOption?.map((item) => (
            <SelectOption key={item.key} value={item.value}>
              {item.value}
            </SelectOption>
          ))}
        </SelectList>
      </div>
    </Wrapper>
  );
}

export default SelectBox;

const SelectList = styled.select`
  border: 1px solid #eee;
  background-color: #fff;
  width: 200px;
  height: 40px;
`;

const SelectOption = styled.option`
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 50px;

  :hover {
    background-color: #eee;
  }
`;

const Wrapper = styled.div`
  width: 600px;
`;
