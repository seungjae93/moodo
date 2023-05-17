import { StDetail } from "../../../libs/styles/StDetail";
import { EstateDetailData } from "../../../typings/DetailData/detail.type";

interface DetailMapProps {
  estateDetail?: EstateDetailData;
}

function DetailMap({ estateDetail }: DetailMapProps) {
  return (
    <>
      <StDetail.Title>
        상세 위치{" "}
        <span style={{ fontSize: "18px" }}>서울특별시 강남구 서초동</span>
      </StDetail.Title>
      <StDetail.Map>지도자리</StDetail.Map>
    </>
  );
}

export default DetailMap;
