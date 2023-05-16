import styled, { css } from "styled-components";

import { StDetail } from "../../../libs/styles/StDetail";
import palette from "../../../libs/styles/palette";
import Button from "../Button/Button";
import { CgPlayList } from "react-icons/cg";
import useEstateDetail from "../../../hooks/useEstateDetail";
import { EstateDetailData } from "../../../types/DetailData/detail.type";
interface StImgProps {
  isLarge?: boolean;
  isMore?: boolean;
}

interface ImgInfoProps {
  estateDetail?: EstateDetailData[];
}

function ImgInfo({ estateDetail }: ImgInfoProps) {
  console.log(estateDetail);
  return (
    <StDetail.ImgInfoWrapper>
      <StDetail.ImgWrapper>
        <StDetail.ImgBox></StDetail.ImgBox>
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
          원룸
        </div>
        <div
          style={{
            fontWeight: "500",
            fontSize: "36px",
          }}
        >
          월세 2000 / 80
        </div>
        <div
          style={{
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          7층 / 62m²
        </div>
        <div
          style={{
            fontWeight: "400",
            fontSize: "16px",
            borderBottom: "1px solid " + palette.gray[1],
            padding: "0px 0px 10px 0px",
          }}
        >
          서울특별시 강남구 서초동
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
