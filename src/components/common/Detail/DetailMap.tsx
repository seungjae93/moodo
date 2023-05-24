import { useState, useEffect } from "react";
import { StaticMap } from "react-kakao-maps-sdk";

import { StDetail } from "../../../libs/styles/StDetail";
import { EstateDetailData } from "../../../typings/DetailData/detail.type";

interface DetailMapProps {
  estateDetail?: EstateDetailData;
}

function DetailMap({ estateDetail }: DetailMapProps) {
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
        <span style={{ fontSize: "18px" }}>서울특별시 강남구 서초동</span>
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
