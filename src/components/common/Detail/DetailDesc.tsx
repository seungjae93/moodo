import { StDetail } from "../../../libs/styles/StDetail";
import { DetailDataProps } from "../../../typings/detail.type";

function DetailDesc({ estateDetail }: DetailDataProps) {
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
