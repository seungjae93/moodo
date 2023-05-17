import styled from "styled-components";

import flex from "../libs/styles/utilFlex";
import useEstateDetail from "../hooks/useEstateDetail";
import RoomInfo from "../components/common/Detail/RoomInfo";
import AdditionalInfo from "../components/common/Detail/AdditionalInfo";
import DetailDesc from "../components/common/Detail/DetailDesc";
import DetailMap from "../components/common/Detail/DetailMap";
import ImgInfo from "../components/common/Detail/ImgInfo";

function RealEstateDetail() {
  const { estateDetail } = useEstateDetail();
  return (
    <StRealEstateDetail.Wrapper>
      <ImgInfo estateDetail={estateDetail} />
      <RoomInfo estateDetail={estateDetail} />
      <AdditionalInfo estateDetail={estateDetail} />
      <DetailDesc estateDetail={estateDetail} />
      <DetailMap estateDetail={estateDetail} />
    </StRealEstateDetail.Wrapper>
  );
}

export default RealEstateDetail;

const StRealEstateDetail = {
  Wrapper: styled.div`
    ${flex({ justify: "", direction: "column" })}
    width: 1028px;
    padding-top: 50px;
    height: 190vh;
    margin: auto;
  `,
};
