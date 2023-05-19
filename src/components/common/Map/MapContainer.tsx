import { Map } from "react-kakao-maps-sdk";

function MapContainer() {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
      style={{ width: "100%", height: "100%" }} // 지도 크기
      level={3}
    />
  );
}

export default MapContainer;
