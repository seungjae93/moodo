import React from "react";

import palette from "../../../libs/styles/palette";
import { StDetail } from "../../../libs/styles/StDetail";
import { DetailDataProps } from "../../../typings/detail.type";

function AdditionalInfo({ estateDetail }: DetailDataProps) {
  return (
    <>
      {estateDetail?.typeOfProperty === "원/투룸" ||
      estateDetail?.typeOfProperty === "주택/빌라" ? (
        <>
          <StDetail.Title>추가 정보</StDetail.Title>
          <StDetail.ContentWrapper>
            <StDetail.Content>
              <div className="semiTitle">주차여부</div>
              <div>{estateDetail?.parking}</div>
            </StDetail.Content>
            <StDetail.Content>
              <div className="semiTitle">엘리베이터</div>
              <div>{estateDetail?.elevator}</div>
            </StDetail.Content>
          </StDetail.ContentWrapper>
          <StDetail.ContentWrapper>
            <StDetail.Content>
              <div className="semiTitle">반려동물</div>
              <div>{estateDetail?.pet}</div>
            </StDetail.Content>
          </StDetail.ContentWrapper>
          <StDetail.ContentWrapper>
            <div style={{ color: palette.gray[1] }}>옵션</div>
            <div>{estateDetail?.options}</div>
          </StDetail.ContentWrapper>
        </>
      ) : null}
    </>
  );
}

export default React.memo(AdditionalInfo);
