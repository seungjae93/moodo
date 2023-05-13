import palette from "../../../libs/styles/palette";
import { StDetail } from "../../../libs/styles/StDetail";

function AdditionalInfo() {
  return (
    <>
      <StDetail.Title>추가 정보</StDetail.Title>
      <StDetail.ContentWrapper>
        <StDetail.Content>
          <div className="semiTitle">주차여부</div>
          <div>가능</div>
        </StDetail.Content>
        <StDetail.Content>
          <div className="semiTitle">엘리베이터</div>
          <div>있음</div>
        </StDetail.Content>
      </StDetail.ContentWrapper>
      <StDetail.ContentWrapper>
        <StDetail.Content>
          <div className="semiTitle">반려동물</div>
          <div>가능</div>
        </StDetail.Content>
      </StDetail.ContentWrapper>
      <StDetail.ContentWrapper>
        <div style={{ color: palette.gray[1] }}>옵션</div>
        <div className="options">
          싱크대, 신발장, 인덕션, 샤워부스, 싱크대, 신발장, 인덕션, 샤워부스,
          샤워부스
        </div>
      </StDetail.ContentWrapper>
    </>
  );
}

export default AdditionalInfo;
