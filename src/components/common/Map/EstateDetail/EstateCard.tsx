import styled from "styled-components";

import flex from "../../../../libs/styles/utilFlex";
import palette from "../../../../libs/styles/palette";
import Button from "../../Button/Button";
import useEstateList from "../../../../hooks/useEstateList";
import { EstateDetailData } from "../../../../typings/detail.type";

interface EstateCardProps {
  estate: EstateDetailData;
}
function EstateCard({ estate }: EstateCardProps) {
  const { estateList } = useEstateList();
  const estateId = estate?.estateId;
  const imgUrls = estateList
    ?.filter((item) => item.estateId === estateId)
    .flatMap((item) => item.imgs.map((img) => img.imgOfUrl));

  const openNewWindow = () => {
    window.open(`http://localhost:3000/realEstateManage/${estateId}`, "_blank");
  };
  return (
    <StEstateCard.Wrapper onClick={openNewWindow}>
      <div className="image">
        {imgUrls && imgUrls.length > 0 && (
          <StEstateCard.Image src={imgUrls[0]} />
        )}
        <span className="transactionTypes">{estate?.transactionType}</span>
      </div>
      <StEstateCard.ContentBox>
        <StEstateCard.Title>{estate?.typeOfProperty}</StEstateCard.Title>

        {estate?.transactionType === "매매" ? (
          <>
            <StEstateCard.Content>
              매매가:{" "}
              <span style={{ fontWeight: "bold" }}>{estate?.price}억</span>
            </StEstateCard.Content>
          </>
        ) : estate?.transactionType === "월세" ? (
          <>
            <StEstateCard.Content>
              보증금:{" "}
              <span style={{ fontWeight: "bold" }}>{estate?.deposit}만원</span>
            </StEstateCard.Content>
            <StEstateCard.Content>
              월세:{" "}
              <span style={{ fontWeight: "bold" }}>{estate?.monthly}만원</span>
            </StEstateCard.Content>
          </>
        ) : estate?.transactionType === "전세" ? (
          <>
            <StEstateCard.Content>
              보증금:{" "}
              <span style={{ fontWeight: "bold" }}>{estate?.deposit}만원</span>
            </StEstateCard.Content>
          </>
        ) : null}
        {estate?.typeOfProperty === "상가/사무실" ? (
          <StEstateCard.Content>{estate?.exclusiveArea}m²</StEstateCard.Content>
        ) : estate?.typeOfProperty === "건물" ? (
          <>
            <StEstateCard.Content>{estate?.detail}m²</StEstateCard.Content>
            <StEstateCard.Content>
              {estate?.supplyArea}/{estate?.exclusiveArea}m² ,{" "}
              {estate?.lowestFloor}/{estate?.highestFloor}층
            </StEstateCard.Content>
          </>
        ) : (
          <StEstateCard.Content>
            방 {estate?.numOfRoom}개 | 화장실 {estate?.numOfBath}개 |{" "}
            {estate?.exclusiveArea}m²
          </StEstateCard.Content>
        )}

        <StEstateCard.Content>{estate?.addressOfProperty}</StEstateCard.Content>
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
          {estate?.moveInDate === "날짜 설정"
            ? estate?.moveInDateInput
            : estate?.moveInDate}
        </Button.Negative>
      </div>
    </StEstateCard.Wrapper>
  );
}

export default EstateCard;

const StEstateCard = {
  Wrapper: styled.div`
    ${flex({ justify: "", direction: "column", align: "", gap: "5px" })}
    cursor: pointer;
    background-color: white;
    width: 195px;
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
      background-color: ${palette.cyan[5]};
      color: white;
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
    height: 124px;
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
