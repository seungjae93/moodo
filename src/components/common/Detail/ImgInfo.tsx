import styled, { css } from "styled-components";

import { StDetail } from "../../../libs/styles/StDetail";
import palette from "../../../libs/styles/palette";
import Button from "../Button/Button";
import { CgPlayList } from "react-icons/cg";
import { EstateDetailData } from "../../../typings/DetailData/detail.type";
interface StImgProps {
  isLarge?: boolean;
  isMore?: boolean;
}

interface ImgInfoProps {
  estateDetail?: EstateDetailData;
}

function ImgInfo({ estateDetail }: ImgInfoProps) {
  console.log(estateDetail?.typeOfProperty);
  const imageGroup = estateDetail?.imgs;
  const visibleImageGroup = imageGroup?.slice(0, 5);
  return (
    <StDetail.ImgInfoWrapper>
      <StDetail.ImgWrapper>
        <StDetail.ImgBox>
          {imageGroup && <StImg src={imageGroup[0]?.imgOfUrl} isLarge />}
          {visibleImageGroup?.slice(1).map((el) => (
            <StImg key={el?.imgOfPropertyId} src={el?.imgOfUrl} />
          ))}
        </StDetail.ImgBox>
      </StDetail.ImgWrapper>
      <StDetail.SummaryWrapper>
        <div
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: palette.cyan[5],
            color: "white",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {estateDetail?.typeOfProperty}
        </div>
        <div
          style={{
            fontWeight: "500",
            fontSize: "36px",
          }}
        >
          {estateDetail?.transactionType === "월세"
            ? `${estateDetail?.transactionType} ${estateDetail?.deposit} / ${estateDetail?.monthly}`
            : estateDetail?.transactionType === "전세"
            ? `${estateDetail?.transactionType} ${estateDetail?.deposit}`
            : estateDetail?.transactionType === "매매"
            ? `${estateDetail?.transactionType} ${estateDetail?.price}`
            : null}
        </div>
        <div
          style={{
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          {estateDetail?.floor}층 / {estateDetail?.supplyArea}m²
        </div>
        <div
          style={{
            fontWeight: "400",
            fontSize: "16px",
            borderBottom: "1px solid " + palette.gray[1],
            padding: "0px 0px 10px 0px",
          }}
        >
          {estateDetail?.typeOfProperty === "아파트"
            ? `${estateDetail?.addressOfProperty} ${estateDetail?.dong}동`
            : estateDetail?.addressOfProperty}
        </div>
        <div
          style={{
            fontWeight: "500",
            fontSize: "24px",
          }}
        >
          김훈찬{" "}
          <span
            style={{
              fontWeight: "500",
              fontSize: "18px",
              color: palette.gray[1],
            }}
          >
            중개인
          </span>
        </div>
        <Button.Primary size="xLarge">이 매물 문의하기</Button.Primary>
      </StDetail.SummaryWrapper>
    </StDetail.ImgInfoWrapper>
  );
}

export default ImgInfo;

const StImg = styled.img<StImgProps>`
  width: 120px;
  height: 120px;
  ${(props) =>
    props.isLarge &&
    css`
      width: 600px;
      height: 400px;
    `}
`;
