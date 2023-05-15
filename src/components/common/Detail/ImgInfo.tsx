import styled, { css } from "styled-components";

import { StDetail } from "../../../libs/styles/StDetail";
import palette from "../../../libs/styles/palette";
import Button from "../Button/Button";
import { CgPlayList } from "react-icons/cg";

interface StImgProps {
  isLarge?: boolean;
  isMore?: boolean;
}

const imageGroup = [
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
];
const visibleImageGroup = imageGroup.slice(0, 5);

function ImgInfo() {
  return (
    <StDetail.ImgInfoWrapper>
      <StDetail.ImgWrapper>
        <StImg src={imageGroup[0]} isLarge />
        <StDetail.ImgBox>
          {visibleImageGroup.slice(1).map((el, idx) => (
            <StImg key={idx} src={el} />
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
