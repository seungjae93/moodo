import { StDetail } from "../../../libs/styles/StDetail";
import { EstateDetailData } from "../../../typings/DetailData/detail.type";

interface DetailDescProps {
  estateDetail?: EstateDetailData;
}

function DetailDesc({ estateDetail }: DetailDescProps) {
  return (
    <>
      <StDetail.Title>상세 설명</StDetail.Title>
      <StDetail.ContentWrapper>
        • {estateDetail?.detail}
      </StDetail.ContentWrapper>
    </>
  );
}

export default DetailDesc;
