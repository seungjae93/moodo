import { StDetail } from "../../../libs/styles/StDetail";

function RoomInfo() {
  return (
    <>
      <StDetail.Title>방 정보</StDetail.Title>
      <StDetail.ContentWrapper>
        <StDetail.Content>
          <div className="semiTitle">공급 / 전용면적</div>
          <div>62m2 / 32m2</div>
        </StDetail.Content>
        <StDetail.Content>
          <div className="semiTitle">해당층 / 건물층</div>
          <div>7층 / 11층</div>
        </StDetail.Content>
      </StDetail.ContentWrapper>
      <StDetail.ContentWrapper>
        <StDetail.Content>
          <div className="semiTitle">방 / 욕실개수</div>
          <div>3개 / 2개</div>
        </StDetail.Content>
        <StDetail.Content>
          <div className="semiTitle">관리비</div>
          <div>5만원</div>
        </StDetail.Content>
      </StDetail.ContentWrapper>
      <StDetail.ContentWrapper>
        <StDetail.Content>
          <div className="semiTitle">입주가능일</div>
          <div>2021.08.23</div>
        </StDetail.Content>
      </StDetail.ContentWrapper>
    </>
  );
}

export default RoomInfo;
