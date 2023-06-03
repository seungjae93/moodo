import { useState, ChangeEvent } from "react";
import styled from "styled-components";

import { SelectBoxProps } from "../../../typings/detail.type";
import { CgChevronDown } from "react-icons/cg";
import flex from "../../../libs/styles/utilFlex";
import Button from "../Button/Button";
import palette from "../../../libs/styles/palette";
import StoreList from "./StoreList";

function SelectBox({ onPropertyTypeChange, onDealTypeChange }: SelectBoxProps) {
  const [propertyType, setPropertyType] = useState<string>("매물 종류");
  const [dealType, setDealType] = useState<string>("거래 유형");
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [depositMin, setDepositMin] = useState("");
  const [depositMax, setDepositMax] = useState("");
  const [monthlyMin, setMonthlyMin] = useState("");
  const [monthlyMax, setMonthlyMax] = useState("");
  const [rightMoneyMin, setRightMoneyMin] = useState("");
  const [rightMoneyMax, setRightMoneyMax] = useState("");

  const handlePropertyTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedPropertyType = e.currentTarget.value;
    setPropertyType(selectedPropertyType);
    setDealType(
      selectedPropertyType === "매물 종류" ? "거래 유형" : "거래 유형"
    );
    onPropertyTypeChange(selectedPropertyType);
  };

  const handleDealTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedDealType = e.currentTarget.value;
    setDealType(selectedDealType);
    onDealTypeChange(selectedDealType);
  };

  const handlePriceClick = () => {
    setIsPriceOpen(!isPriceOpen);
    setIsStoreOpen(false);
  };

  const handleStoreClick = () => {
    setIsStoreOpen(!isStoreOpen);
    setIsPriceOpen(false);
  };

  const handleDepositMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDepositMin(e.currentTarget.value);
  };

  const handleDepositMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDepositMax(e.currentTarget.value);
  };

  const handleMonthlyMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMonthlyMin(e.currentTarget.value);
  };

  const handleMonthlyMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMonthlyMax(e.currentTarget.value);
  };

  const handleRightMoneyMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRightMoneyMin(e.currentTarget.value);
  };

  const handleRightMoneyMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRightMoneyMax(e.currentTarget.value);
  };

  const handleResetButtonClick = () => {
    setDepositMin("");
    setDepositMax("");
    setMonthlyMin("");
    setMonthlyMax("");
    setRightMoneyMin("");
    setRightMoneyMax("");
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
        <div>
          <SelectList onChange={handlePropertyTypeChange} value={propertyType}>
            {propertyOption?.map((item) => (
              <SelectOption key={item.key} value={item.value}>
                {item.value}
              </SelectOption>
            ))}
          </SelectList>
        </div>
        <div>
          <SelectList onChange={handleDealTypeChange} value={dealType}>
            {dealTypeOption?.map((item) => (
              <SelectOption key={item.key} value={item.value}>
                {item.value}
              </SelectOption>
            ))}
          </SelectList>
        </div>
        <SelectPriceListContainer>
          <SelectPriceList onClick={handlePriceClick}>
            금액대
            <CgChevronDown
              style={{
                color: "black",
                width: "20px",
                height: "18px",
              }}
            />
          </SelectPriceList>
          {isPriceOpen && (
            <SelectPriceBox>
              <label>보증금</label>
              <div>
                <SelectPriceInput
                  type="number"
                  value={depositMin}
                  onChange={handleDepositMinChange}
                />
                ~
                <SelectPriceInput
                  type="number"
                  value={depositMax}
                  onChange={handleDepositMaxChange}
                />
                만원
              </div>
              <label>월세</label>
              <div>
                <SelectPriceInput
                  type="number"
                  value={monthlyMin}
                  onChange={handleMonthlyMinChange}
                />
                ~
                <SelectPriceInput
                  type="number"
                  value={monthlyMax}
                  onChange={handleMonthlyMaxChange}
                />
                만원
              </div>
              <label>권리금</label>
              <div>
                <SelectPriceInput
                  type="number"
                  value={rightMoneyMin}
                  onChange={handleRightMoneyMinChange}
                />
                ~
                <SelectPriceInput
                  type="number"
                  value={rightMoneyMax}
                  onChange={handleRightMoneyMaxChange}
                />
                만원
              </div>
              <Button.Negative
                outlined
                borderColor={palette.cyan[5]}
                color={palette.cyan[5]}
                size="small"
                onClick={handleResetButtonClick}
              >
                조건삭제
              </Button.Negative>
            </SelectPriceBox>
          )}
        </SelectPriceListContainer>
        <SelectPriceListContainer>
          <SelectPriceList onClick={handleStoreClick}>
            업종
            <CgChevronDown
              style={{
                color: "black",
                width: "20px",
                height: "18px",
              }}
            />
          </SelectPriceList>
          {isStoreOpen && (
            <SelectPriceBox>
              <StoreList />
              <Button.Negative
                outlined
                borderColor={palette.cyan[5]}
                color={palette.cyan[5]}
                size="small"
                onClick={handleResetButtonClick}
              >
                조건삭제
              </Button.Negative>
            </SelectPriceBox>
          )}
        </SelectPriceListContainer>
      </div>
    </Wrapper>
  );
}

export default SelectBox;

const Wrapper = styled.div`
  width: 80%;
`;

const SelectList = styled.select`
  border: 1px solid #eee;
  background-color: #fff;
  width: 180px;
  height: 40px;
`;

const SelectOption = styled.option`
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 50px;
`;

const SelectPriceList = styled.div`
  ${flex({ justify: "space-between" })}
  border: 1px solid #eee;
  background-color: #fff;
  width: 180px;
  height: 40px;
  border-radius: 5px;
  padding-left: 5px;
  font-size: 13px;
  :hover {
    border: 2px solid black;
  }
`;

const SelectPriceBox = styled.div`
  ${flex({ direction: "column", align: "", justify: "", gap: "10px" })}
  padding: 10px;
  position: absolute;
  border: 1px solid #eee;
  background-color: #fff;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  font-size: 15px;
  z-index: 10;
`;

const SelectPriceListContainer = styled.div`
  position: relative;
`;

const SelectPriceInput = styled.input`
  width: 80px;
  height: 30px;
`;
