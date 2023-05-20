import React, { useState, useCallback, useEffect, useRef } from "react";
import { Map } from "react-kakao-maps-sdk";

interface MapContainerProps {
  searchValue: string;
}

const { kakao } = window;

function MapContainer({ searchValue }: MapContainerProps) {
  const [location, setLocation] = useState({
    // 지도의 초기 위치
    center: { lat: 37.5472661928352, lng: 127.068276018078 },
  });

  //지도 레벨
  const [zoomLevel, setZoomLevel] = useState(6);

  //서버에서 받는 지도 좌표
  const [positions, setPositions] = useState();

  //마커 좌표
  const [markerArray, setMarkerArray] = useState([]);

  //장소 검색 객체 생성
  useEffect(() => {
    const ps = new kakao.maps.services.Places();
    const placesSearchCB = function (data: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setLocation({
          center: { lat: Number(newSearch.y), lng: Number(newSearch.x) },
        });
      }
    };
    if (searchValue) {
      ps.keywordSearch(searchValue, placesSearchCB);
    }
  }, [searchValue]);

  return (
    <Map
      center={location.center}
      style={{ width: "100%", height: "100%" }}
      isPanto={true}
      level={6}
      maxLevel={8}
    />
  );
}

export default MapContainer;
