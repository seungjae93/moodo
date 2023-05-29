import { StDetail } from "../../../libs/styles/StDetail";
import { DetailDataProps } from "../../../typings/detail.type";

function RoomInfo({ estateDetail }: DetailDataProps) {
  return (
    <>
      <StDetail.Title>방 정보</StDetail.Title>
      <StDetail.ContentWrapper>
        <StDetail.Content>
          <div className="semiTitle">공급 / 전용면적</div>
          <div>
            {estateDetail?.supplyArea}m² / {estateDetail?.exclusiveArea}m²
          </div>
        </StDetail.Content>
        <StDetail.Content>
          {estateDetail?.typeOfProperty === "건물" ? (
            <>
              <div className="semiTitle">저층 / 최고층</div>
              <div>
                {estateDetail?.lowestFloor}층 / {estateDetail?.highestFloor}층
              </div>
            </>
          ) : (
            <>
              <div className="semiTitle">해당층 / 건물층</div>
              <div>
                {estateDetail?.floor}층 / {estateDetail?.numOfFloor}층
              </div>
            </>
          )}
        </StDetail.Content>
      </StDetail.ContentWrapper>
      <StDetail.ContentWrapper>
        <StDetail.Content>
          <div className="semiTitle">관리비</div>
          <div>{estateDetail?.maintenanceCost}만원</div>
        </StDetail.Content>
        <StDetail.Content>
          {estateDetail?.typeOfProperty === "원/투룸" ||
          estateDetail?.typeOfProperty === "주택/빌라" ? (
            <>
              <div className="semiTitle">방 / 욕실개수</div>
              <div>
                {estateDetail?.numOfRoom}개 / {estateDetail?.numOfBath}개
              </div>
            </>
          ) : null}
        </StDetail.Content>
      </StDetail.ContentWrapper>
      <StDetail.ContentWrapper>
        <StDetail.Content>
          <div className="semiTitle">입주가능일</div>
          <div>
            {estateDetail?.moveInDate === "날짜 설정"
              ? estateDetail?.moveInDateInput
              : estateDetail?.moveInDate}
          </div>
        </StDetail.Content>
      </StDetail.ContentWrapper>
    </>
  );
}

export default RoomInfo;
