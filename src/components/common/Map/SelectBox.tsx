import React, { useState, ChangeEvent, useCallback } from "react";

import { SelectBoxProps } from "../../../typings/detail.type";
import { CgChevronDown } from "react-icons/cg";
import { StMoodoMapSelectBox } from "../../../libs/styles/StMoodoMapSelectBox";
import palette from "../../../libs/styles/palette";
import Button from "../Button/Button";
import StoreList from "./StoreList";
import { propertyTypes, transactionTypes } from "../../../libs/Categories";

function SelectBox({
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
  onPriceResetButtonClick,
  onStoreCategoryChange,
  onSubStoreCategoryChange,
}: SelectBoxProps) {
  const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(false);
  const [isTransactionTypesOpen, setIsTransactionTypesOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [depositMin, setDepositMin] = useState("");
  const [depositMax, setDepositMax] = useState("");
  const [monthlyMin, setMonthlyMin] = useState("");
  const [monthlyMax, setMonthlyMax] = useState("");
  const [rightMoneyMin, setRightMoneyMin] = useState("");
  const [rightMoneyMax, setRightMoneyMax] = useState("");

  const handlePropertyTypeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const propertyTypeId = event.target.value;
      const updatedPropertyTypes = selectedPropertyTypes.includes(
        propertyTypeId
      )
        ? selectedPropertyTypes.filter((id) => id !== propertyTypeId)
        : [...selectedPropertyTypes, propertyTypeId];
      onSelectedPropertyTypesChange(updatedPropertyTypes);
    },
    [selectedPropertyTypes, onSelectedPropertyTypesChange]
  );

  const handleDealTypeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const dealTypeId = event.target.value;
      const updatedDealTypes = selectedDealTypes.includes(dealTypeId)
        ? selectedDealTypes.filter((id) => id !== dealTypeId)
        : [...selectedDealTypes, dealTypeId];
      onSelectedDealTypesChange(updatedDealTypes);
    },
    [selectedDealTypes, onSelectedDealTypesChange]
  );

  const handleToggleDropdown = useCallback((dropdownName: string) => {
    switch (dropdownName) {
      case "propertyType":
        setIsPropertyTypeOpen(
          (prevIsPropertyTypeOpen) => !prevIsPropertyTypeOpen
        );
        setIsStoreOpen(false);
        setIsPriceOpen(false);
        setIsTransactionTypesOpen(false);
        break;
      case "transactionTypes":
        setIsTransactionTypesOpen(
          (prevIsTransactionTypesOpen) => !prevIsTransactionTypesOpen
        );
        setIsStoreOpen(false);
        setIsPriceOpen(false);
        setIsPropertyTypeOpen(false);
        break;
      case "price":
        setIsPriceOpen((prevIsPriceOpen) => !prevIsPriceOpen);
        setIsStoreOpen(false);
        setIsPropertyTypeOpen(false);
        setIsTransactionTypesOpen(false);
        break;
      case "store":
        setIsStoreOpen((prevIsStoreOpen) => !prevIsStoreOpen);
        setIsPriceOpen(false);
        setIsPropertyTypeOpen(false);
        setIsTransactionTypesOpen(false);
        break;
      default:
        break;
    }
  }, []);
  const handleDepositMinChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      setDepositMin(value);
      onDepositMinChange(value);
    },
    [onDepositMinChange]
  );

  const handleDepositMaxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      setDepositMax(value);
      onDepositMaxChange(value);
    },
    [onDepositMaxChange]
  );

  const handleMonthlyMinChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      setMonthlyMin(value);
      onMonthlyMinChange(value);
    },
    [onMonthlyMinChange]
  );

  const handleMonthlyMaxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      setMonthlyMax(value);
      onMonthlyMaxChange(value);
    },
    [onMonthlyMaxChange]
  );

  const handleRightMoneyMinChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      setRightMoneyMin(value);
      onRightMoneyMinChange(value);
    },
    [onRightMoneyMinChange]
  );

  const handleRightMoneyMaxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      setRightMoneyMax(value);
      onRightMoneyMaxChange(value);
    },
    [onRightMoneyMaxChange]
  );

  const handlePriceResetButtonClick = useCallback(() => {
    setDepositMin("");
    setDepositMax("");
    setMonthlyMin("");
    setMonthlyMax("");
    setRightMoneyMin("");
    setRightMoneyMax("");
    onPriceResetButtonClick();
  }, [onPriceResetButtonClick]);
  return (
    <StMoodoMapSelectBox.Wrapper>
      <div style={{ display: "flex", gap: "10px" }}>
        <StMoodoMapSelectBox.ContentBoxWrapper>
          <StMoodoMapSelectBox.TitleList
            onClick={() => handleToggleDropdown("propertyType")}
          >
            매물 종류
            <CgChevronDown
              style={{
                color: "black",
                width: "20px",
                height: "18px",
              }}
            />
          </StMoodoMapSelectBox.TitleList>
          {isPropertyTypeOpen && (
            <StMoodoMapSelectBox.ContentBox>
              <StMoodoMapSelectBox.CheckBtn>
                <label
                  style={{
                    display: "block",
                    fontSize: "15px",
                    textAlign: "center",
                    fontWeight: "400",
                    color: "#90A0AE",
                    width: "100px",
                    flexWrap: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  매물 유형
                </label>
                <div className="checkBtnContainer">
                  {propertyTypes.map((propertyType) => (
                    <div className="checkBtn" key={propertyType.id}>
                      <input
                        type="checkbox"
                        id={propertyType.id}
                        value={propertyType.id}
                        checked={selectedPropertyTypes.includes(
                          propertyType.id
                        )}
                        onChange={handlePropertyTypeChange}
                      />
                      <label htmlFor={propertyType.id}>
                        {" "}
                        {propertyType.name}
                      </label>
                    </div>
                  ))}
                </div>
              </StMoodoMapSelectBox.CheckBtn>
            </StMoodoMapSelectBox.ContentBox>
          )}
        </StMoodoMapSelectBox.ContentBoxWrapper>
        <StMoodoMapSelectBox.ContentBoxWrapper>
          <StMoodoMapSelectBox.TitleList
            onClick={() => handleToggleDropdown("transactionTypes")}
          >
            거래 유형
            <CgChevronDown
              style={{
                color: "black",
                width: "20px",
                height: "18px",
              }}
            />
          </StMoodoMapSelectBox.TitleList>
          {isTransactionTypesOpen && (
            <StMoodoMapSelectBox.ContentBox>
              <StMoodoMapSelectBox.CheckBtn>
                <label
                  style={{
                    display: "block",
                    fontSize: "15px",
                    textAlign: "center",
                    fontWeight: "400",
                    color: "#90A0AE",
                    width: "100px",
                    flexWrap: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  거래 유형
                </label>
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
                      <label htmlFor={transactionType.id}>
                        {" "}
                        {transactionType.name}
                      </label>
                    </div>
                  ))}
                </div>
              </StMoodoMapSelectBox.CheckBtn>
            </StMoodoMapSelectBox.ContentBox>
          )}
        </StMoodoMapSelectBox.ContentBoxWrapper>
        <StMoodoMapSelectBox.ContentBoxWrapper>
          <StMoodoMapSelectBox.TitleList
            onClick={() => handleToggleDropdown("price")}
          >
            금액대
            <CgChevronDown
              style={{
                color: "black",
                width: "20px",
                height: "18px",
              }}
            />
          </StMoodoMapSelectBox.TitleList>
          {isPriceOpen && (
            <StMoodoMapSelectBox.ContentBox>
              <label
                style={{
                  display: "block",
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "400",
                  color: "#90A0AE",
                  width: "100px",
                  flexWrap: "nowrap",
                  overflow: "hidden",
                }}
              >
                보증금 (만원)
              </label>
              <div>
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
              </div>
              <label
                style={{
                  display: "block",
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "400",
                  color: "#90A0AE",
                  width: "100px",
                  flexWrap: "nowrap",
                  overflow: "hidden",
                }}
              >
                월세 (만원)
              </label>
              <div>
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
              </div>
              <label
                style={{
                  display: "block",
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "400",
                  color: "#90A0AE",
                  width: "100px",
                  flexWrap: "nowrap",
                  overflow: "hidden",
                }}
              >
                권리금 (만원)
              </label>
              <div>
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
              </div>
              <Button.Negative
                outlined
                borderColor={palette.cyan[5]}
                color={palette.cyan[5]}
                size="small"
                onClick={handlePriceResetButtonClick}
              >
                조건삭제
              </Button.Negative>
            </StMoodoMapSelectBox.ContentBox>
          )}
        </StMoodoMapSelectBox.ContentBoxWrapper>
        <StMoodoMapSelectBox.ContentBoxWrapper>
          <StMoodoMapSelectBox.TitleList
            onClick={() => handleToggleDropdown("store")}
          >
            업종
            <CgChevronDown
              style={{
                color: "black",
                width: "20px",
                height: "18px",
              }}
            />
          </StMoodoMapSelectBox.TitleList>
          {isStoreOpen && (
            <StMoodoMapSelectBox.ContentBox>
              <StoreList
                onStoreCategoryChange={onStoreCategoryChange}
                onSubStoreCategoryChange={onSubStoreCategoryChange}
              />
            </StMoodoMapSelectBox.ContentBox>
          )}
        </StMoodoMapSelectBox.ContentBoxWrapper>
      </div>
    </StMoodoMapSelectBox.Wrapper>
  );
}

export default React.memo(SelectBox);
