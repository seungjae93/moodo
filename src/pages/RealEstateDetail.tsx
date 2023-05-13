import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import flex from "../libs/styles/utilFlex";
import { estateApi } from "../apis/axios";
import RoomInfo from "../components/common/Detail/RoomInfo";
import AdditionalInfo from "../components/common/Detail/AdditionalInfo";
import DetailDesc from "../components/common/Detail/DetailDesc";
import DetailMap from "../components/common/Detail/DetailMap";

function RealEstateDetail() {
  const estateId = useParams().id as string;
  const { data } = useQuery(["estateDetail", estateId], () =>
    estateApi.get(estateId)
  );
  return (
    <StRealEstateDetail.Wrapper>
      <RoomInfo />
      <AdditionalInfo />
      <DetailDesc />
      <DetailMap />
    </StRealEstateDetail.Wrapper>
  );
}

export default RealEstateDetail;

const StRealEstateDetail = {
  Wrapper: styled.div`
    ${flex({ justify: "", direction: "column" })}
    width: 1028px;
    padding-top: 50px;
    height: 100vh;
    margin: auto;
  `,
};
