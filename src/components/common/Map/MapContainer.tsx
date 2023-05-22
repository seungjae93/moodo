import React, { useState, useCallback, useEffect, useRef } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { useQuery, useMutation } from "@tanstack/react-query";
import { debounce } from "lodash";

import { mapApi } from "../../../apis/axios";
import useUser from "../../../hooks/useUser";

interface MapContainerProps {
  searchValue: string;
}

interface Coordinates {
  swLatLng: { lat: number; lng: number };
  neLatLng: { lat: number; lng: number };
  zoomLevel: number;
}

const { kakao } = window;

function MapContainer({ searchValue }: MapContainerProps) {
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
  const [responseData, setResponseData] = useState<any>(null);

  //마커 좌표
  const [markerArray, setMarkerArray] = useState([]);

  const mutation = useMutation<any, unknown, Coordinates>(
    (coordinates) => mapApi.post(userId as string, coordinates),
    {
      onSuccess: (data) => {
        // 서버로부터의 응답을 처리합니다.
        console.log(data);
        const response = data?.mapList?.dongList;
        setResponseData(response);
      },
      onError: (error) => {
        // 서버로부터의 에러 응답을 처리합니다.
        console.error("변이 에러", error);
      },
    }
  );
  // console.log(responseData);
  // const { data }: { data?: any } = useQuery(
  //   ["mapEstateList", userId],
  //   () => mapApi.post(userId as string),
  //   {
  //     onError: (error) => {
  //       console.error(error);
  //     },
  //   }
  // );
  // console.log(data);

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
      maxLevel={8}
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
      {responseData &&
        responseData?.map((el: any) => {
          return (
            <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
              // 커스텀 오버레이가 표시될 위치입니다
              key={el.id}
              position={{
                lat: el?.lat,
                lng: el?.lng,
              }}
            >
              {/* 커스텀 오버레이에 표시할 내용입니다 */}
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
        })}
    </Map>
  );
}

export default MapContainer;
