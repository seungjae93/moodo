import styled from "styled-components";

import flex from "../../../../libs/styles/utilFlex";
import palette from "../../../../libs/styles/palette";
import Button from "../../Button/Button";

function EstateCard() {
  return (
    <StEstateCard.Wrapper>
      <div className="image">
        <StEstateCard.Image src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" />
        <span className="transactionTypes">전세</span>
      </div>
      <StEstateCard.ContentBox>
        <StEstateCard.Title>이클립스 부동산</StEstateCard.Title>
        <StEstateCard.Content>
          보증금: <span style={{ fontWeight: "bold" }}>8억</span>
        </StEstateCard.Content>
        <StEstateCard.Content>
          월세: <span style={{ fontWeight: "bold" }}>200만원</span>
        </StEstateCard.Content>
        <StEstateCard.Content>
          방 3개 | 화장실 2개 | 81.2m²
        </StEstateCard.Content>
        <StEstateCard.Content>서울시 성동구 금호동2가 1</StEstateCard.Content>
      </StEstateCard.ContentBox>
      <div className="btnBox">
        <Button.Negative
          outlined
          borderColor={palette.cyan[5]}
          color={palette.cyan[5]}
          fw="700"
          fs="12px"
          size="sLarge"
        >
          즉시 입주가능
        </Button.Negative>
      </div>
    </StEstateCard.Wrapper>
  );
}

export default EstateCard;

const StEstateCard = {
  Wrapper: styled.div`
    ${flex({ justify: "", direction: "column", align: "", gap: "3px" })}
    cursor: pointer;
    background-color: white;
    width: 200px;
    height: 345px;
    border: 0px solid black;
    border-radius: 10px;
    box-shadow: 0px 1px 5px 1px #dddddd;
    text-decoration-line: none;
    color: black;
    overflow: hidden;
    .image {
      position: relative;
    }
    .transactionTypes {
      position: absolute;
      top: 5%;
      left: 5%;
      background-color: white;
      color: black;
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
    }
    .btnBox {
      ${flex({})}
    }
    :hover {
      box-shadow: 0px 3px 5px 1px #181818;
      transition: all 0.2s;
    }
  `,
  ContentBox: styled.div`
    ${flex({ justify: "", gap: "10px", direction: "column", align: "" })}
    padding: 10px;
    margin-bottom: 10px;
  `,
  Image: styled.img`
    width: 100%;
    height: 150px;
  `,
  Title: styled.div`
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
  `,
  Content: styled.div`
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
  `,
};
