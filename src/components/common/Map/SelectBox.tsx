import React, { ChangeEvent } from "react";
import styled from "styled-components";
import * as Select from "../Select/Select";

function SelectBox() {
  return (
    <Wrapper>
      <div style={{ display: "flex", gap: "10px" }}>
        <Select.Root>
          <SelectTrigger>매물종류</SelectTrigger>
          <SelectList>
            <SelectOption value="1">원/투룸</SelectOption>
            <SelectOption value="2">주택/빌라</SelectOption>
            <SelectOption value="3">아파트</SelectOption>
            <SelectOption value="4">상가/사무실</SelectOption>
            <SelectOption value="5">건물</SelectOption>
          </SelectList>
        </Select.Root>

        <Select.Root>
          <SelectTrigger>거래유형</SelectTrigger>
          <SelectList>
            <SelectOption value="1">월세</SelectOption>
            <SelectOption value="2">전세</SelectOption>
            <SelectOption value="3">매매</SelectOption>
          </SelectList>
        </Select.Root>
      </div>
    </Wrapper>
  );
}

export default SelectBox;

const SelectTrigger = styled(Select.Trigger)`
  border: 1px solid #ddd;
  height: 40px;
  width: 200px;
  background-color: #fff;
`;

const SelectList = styled(Select.List)`
  border: 1px solid #eee;
  z-index: 100;
  background-color: #fff;
  width: 200px;
  position: absolute;
  top: 50px;
`;
const OverSelectList = styled(Select.List)`
  border: 1px solid #eee;
  z-index: 100;
  background-color: #fff;
  width: 200px;
  position: absolute;
  top: 40px;
`;

const SelectOption = styled(Select.Option)`
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 40px;

  :hover {
    background-color: #eee;
  }
`;

const Wrapper = styled.div`
  width: 600px;
  /* height: 450px; */
  overflow: hidden;
  position: relative;
  z-index: 100px;
  /* padding-top: 208px; */
`;
