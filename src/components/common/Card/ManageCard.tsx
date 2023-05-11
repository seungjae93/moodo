import React from "react";
import styled from "styled-components";

import Button from "../Button/Button";
import flex from "../../../libs/styles/utilFlex";

function ManageCard() {
  return (
    <StManageCard.Wrapper>
      <StManageCard.Image />
      <StManageCard.ContentBox>
        <StManageCard.Title>레미안크레시티</StManageCard.Title>
        <StManageCard.Content>보증금: 8억</StManageCard.Content>
        <StManageCard.Content>월세: 200만원</StManageCard.Content>
        <StManageCard.Content>서울시 성동구 금호동2가 1</StManageCard.Content>
        <StManageCard.Content>
          방 3개 | 화장실 2개 | 81.2m2(24평)
        </StManageCard.Content>
      </StManageCard.ContentBox>
      <StManageCard.ButtonBox>
        <Button.Primary size="medium" fw="400" fs="20px">
          수정
        </Button.Primary>
        <Button.Primary outlined size="medium" fw="400" fs="20px">
          삭제
        </Button.Primary>
      </StManageCard.ButtonBox>
    </StManageCard.Wrapper>
  );
}

export default ManageCard;

const StManageCard = {
  Wrapper: styled.div`
    ${flex({ justify: "space-between" })}
    background-color: white;
    width: 100%;
    height: 180px;
    border: 0px solid black;
    border-radius: 10px;
    box-shadow: 0px 1px 5px 1px #dddddd;
    text-decoration-line: none;
    color: black;
    overflow: hidden;
    :hover {
      box-shadow: 0px 3px 5px 1px #181818;
      transition: all 0.2s;
    }
  `,
  Image: styled.img`
    width: 300px;
    height: 100%;
  `,
  ContentBox: styled.div`
    width: 350px;
    margin: 10px;
  `,
  Title: styled.div`
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    margin-bottom: 10px;
  `,
  Content: styled.div`
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 350;
    margin-bottom: 10px;
  `,
  ButtonBox: styled.div`
    ${flex({
      direction: "column",
      align: "flex-end",
      gap: "5px",
    })}
    margin-right:10px;
  `,
};
