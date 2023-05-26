import React, { useState, useCallback, useEffect, useRef } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { useMutation } from "@tanstack/react-query";
import { debounce } from "lodash";

import { mapApi } from "../../../apis/axios";
import useUser from "../../../hooks/useUser";

interface MapContainerProps {
  searchValue: string;
  onDataReceived: (data: any) => void;
}

interface Coordinates {
  swLatLng: { lat: number; lng: number };
  neLatLng: { lat: number; lng: number };
  zoomLevel: number;
}

const { kakao } = window;

function MapContainer({ searchValue, onDataReceived }: MapContainerProps) {
  const { user } = useUser();
  const userId = user?.userId;
  const [location, setLocation] = useState({
    // 지도의 초기 위치
    center: { lat: 37.5472661928352, lng: 127.068276018078 },
  });

  const mapRef = useRef<kakao.maps.Map | null>(null);
  const markerRef = useRef(null);
  //지도 레벨
  const [zoomLevel, setZoomLevel] = useState(6);

  //서버에서 받은 response
  const [dongListData, setDongListData] = useState<any>(null);

  //마커 좌표
  const [markerArray, setMarkerArray] = useState([]);

  const mutation = useMutation<any, unknown, Coordinates>(
    (coordinates) => mapApi.post(userId as string, coordinates),
    {
      onSuccess: (data) => {
        const dongList = data?.mapList?.dongList;
        const mapList = zoomLevel < 4 ? data?.mapList : data?.mapList?.mapList;

        setDongListData(dongList);
        onDataReceived(mapList);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );
  const customOverlayDong = () => {
    if (!dongListData) return null;
    if (zoomLevel < 4) return null;
    return (
      <>
        {zoomLevel > 3
          ? dongListData?.map((el: any) => {
              return (
                <CustomOverlayMap
                  key={el.id}
                  position={{ lat: Number(el?.lat), lng: Number(el?.lng) }}
                >
                  <div
                    className="label"
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "20px",
                      backgroundColor: "red",
                    }}
                  >
                    <span className="center">{el.nameOfDong}</span>
                  </div>
                </CustomOverlayMap>
              );
            })
          : null}
      </>
    );
  };

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

  useEffect(() => {
    /* 현재 보이는 위치에 대한 좌표 값을 받아와주는 부분 */
    const mapObject = mapRef.current;
    if (!mapObject) return;
    const coordinates: Coordinates = {
      swLatLng: {
        lat: mapObject.getBounds().getSouthWest().getLat(),
        lng: mapObject.getBounds().getSouthWest().getLng(),
      },
      neLatLng: {
        lat: mapObject.getBounds().getNorthEast().getLat(),
        lng: mapObject.getBounds().getNorthEast().getLng(),
      },
      zoomLevel: mapObject.getLevel(),
    };
    mutation.mutate(coordinates);
  }, [location]);

  return (
    <Map
      center={location.center}
      style={{ width: "100%", height: "100%" }}
      isPanto={true}
      level={6}
      maxLevel={10}
      ref={mapRef}
      onZoomChanged={(map) => setZoomLevel(map.getLevel())}
      onDragEnd={(map) => {
        const coordinates: Coordinates = {
          swLatLng: {
            lat: map.getBounds().getSouthWest().getLat(),
            lng: map.getBounds().getSouthWest().getLng(),
          },
          neLatLng: {
            lat: map.getBounds().getNorthEast().getLat(),
            lng: map.getBounds().getNorthEast().getLng(),
          },
          zoomLevel: map.getLevel(),
        };

        mutation.mutate(coordinates);
      }}
      onBoundsChanged={debounce((map) => {
        const coordinates: Coordinates = {
          swLatLng: {
            lat: map.getBounds().getSouthWest().getLat(),
            lng: map.getBounds().getSouthWest().getLng(),
          },
          neLatLng: {
            lat: map.getBounds().getNorthEast().getLat(),
            lng: map.getBounds().getNorthEast().getLng(),
          },
          zoomLevel: map.getLevel(),
        };

        mutation.mutate(coordinates);
      }, 600)}
    >
      {customOverlayDong()}
    </Map>
  );
}

export default MapContainer;
