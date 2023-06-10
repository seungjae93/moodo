import { useState } from "react";
import styled, { css } from "styled-components";
import palette from "../../../libs/styles/palette";
import Button from "../Button/Button";
import DetailCarousel from "./DetailCarousel";

import { StDetail } from "../../../libs/styles/StDetail";
import { formatCurrency } from "../../../libs/FormatCurrency";
import { StImgProps, DetailDataProps } from "../../../typings/detail.type";
import { CgClose } from "react-icons/cg";

function ImgInfo({ estateDetail }: DetailDataProps) {
  const [imageModal, setImageModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageGroup = estateDetail?.imgs;
  const visibleImageGroup = imageGroup?.slice(0, 5);

  const onImageModal = (el: any, index: number) => {
    setImageModal(true);
    setCurrentImageIndex(index);
  };
  const onImageModalClose = () => {
    setImageModal(false);
  };
  //클릭한 이미지 DetailCarousel에서 보여주기
  const rearrangedImageGroup = imageGroup
    ? [
        imageGroup[currentImageIndex],
        ...imageGroup.slice(0, currentImageIndex),
        ...imageGroup.slice(currentImageIndex + 1),
      ]
    : [];
  return (
    <StDetail.ImgInfoWrapper>
      <StDetail.ImgWrapper>
        <StDetail.ImgBox>
          {imageGroup && (
            <StImg
              src={imageGroup[0]?.imgOfUrl}
              isLarge
              onClick={() => onImageModal(imageGroup, 0)}
            />
          )}
          {visibleImageGroup?.slice(1).map((el, index) => (
            <StImg
              key={el?.imgOfPropertyId}
              src={el?.imgOfUrl}
              onClick={() => onImageModal(imageGroup, index + 1)}
            />
          ))}
          {imageModal && (
            <ModalBackdrop>
              <StimageDetail>
                <DetailCarousel imageGroup={rearrangedImageGroup} />
                <CgClose
                  style={{
                    color: "2d2d2d",
                    position: "absolute",
                    width: "25px",
                    height: "25px",
                    right: "10px",
                    top: "10px",
                  }}
                  onClick={onImageModalClose}
                />
              </StimageDetail>
            </ModalBackdrop>
          )}
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
            ? `${estateDetail?.transactionType} ${
                estateDetail?.deposit && formatCurrency(estateDetail?.deposit)
              }`
            : estateDetail?.transactionType === "매매"
            ? `${estateDetail?.transactionType} ${
                estateDetail?.price && formatCurrency(estateDetail?.price)
              }`
            : null}
        </div>
        {estateDetail?.typeOfProperty === "상가/사무실" && (
          <div
            style={{
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            권리금:{" "}
            {estateDetail?.rightMoney &&
              formatCurrency(estateDetail?.rightMoney)}
          </div>
        )}

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
          {estateDetail?.addressOfProperty}
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
        <Button.Negative
          outlined
          borderColor={palette.cyan[5]}
          color={palette.cyan[5]}
          fw="500"
          fs="18px"
          size="xLarge"
        >
          이 매물 문의하기
        </Button.Negative>
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
  @media (max-width: 768px) {
    width: 350px;
    height: 250px;

    ${(props) =>
      !props.isLarge &&
      css`
        display: none;
      `}
  }
`;
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
`;

const StimageDetail = styled.div`
  width: 550px;
  height: 400px;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  @media (max-width: 768px) {
    width: 350px;
    height: 400px;
  }
`;
