import { StaticMap } from "react-kakao-maps-sdk";

import { StDetail } from "../../../libs/styles/StDetail";
import { DetailDataProps } from "../../../typings/detail.type";

function DetailMap({ estateDetail }: DetailDataProps) {
  if (!estateDetail || !estateDetail.lat || !estateDetail.lng) {
    return null;
  }

  const lat = Number(estateDetail.lat);
  const lng = Number(estateDetail.lng);
  const location = { center: { lat, lng } };
  const marker = { position: { lat, lng } };

  return (
    <>
      <StDetail.Title>
        상세 위치{" "}
        <span style={{ fontSize: "16px" }}>{estateDetail?.addressOfJibun}</span>
      </StDetail.Title>
      <StDetail.Map>
        <StaticMap
          style={{ width: "100%", height: "100%" }}
          center={location.center}
          marker={marker}
          level={3}
        />
      </StDetail.Map>
    </>
  );
}

export default DetailMap;
