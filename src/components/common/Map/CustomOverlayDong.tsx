import React from "react";
import styled from "styled-components";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { EstateDetailData } from "../../../typings/detail.type";
import clusterer from "../../../assets/clusterer.svg";

interface DongList {
  id: number;
  lat: string;
  lng: string;
  nameOfDong: string;
  numOfDong: string;
  userId: string;
}
interface CustomOverlayDongProps {
  filteredMapList: EstateDetailData[];
  dongListData: DongList[];
  zoomLevel: number;
}
const CustomOverlayDong = ({
  filteredMapList,
  dongListData,
  zoomLevel,
}: CustomOverlayDongProps) => {
  if (!filteredMapList) return null;
  if (zoomLevel < 4) return null;
  // el.dong별로 갯수를 카운트하기 위한 객체
  const dongCount: { [dong: string]: number } = {};

  // el.dong별로 갯수를 카운트
  filteredMapList?.forEach((el: any) => {
    if (el.dong in dongCount) {
      dongCount[el.dong] += 1;
    } else {
      dongCount[el.dong] = 1;
    }
  });

  return (
    <>
      {zoomLevel > 3 &&
        dongListData &&
        dongListData.length > 0 &&
        filteredMapList?.map((el: EstateDetailData) => {
          const dongData = dongListData.find(
            (dongEl: any) => dongEl.nameOfDong === el.dong
          );
          if (!dongData) return null;

          const { lat, lng } = dongData;

          return (
            <CustomOverlayMap
              key={el.estateId}
              position={{
                lat: Number(lat),
                lng: Number(lng),
              }}
            >
              <StCustomOverlayDong.Img>
                <img src={clusterer} alt="clusterer" />
                <StCustomOverlayDong.Index>
                  {dongCount[el.dong]}
                </StCustomOverlayDong.Index>
                <StCustomOverlayDong.Text>{el.dong}</StCustomOverlayDong.Text>
              </StCustomOverlayDong.Img>
            </CustomOverlayMap>
          );
        })}
    </>
  );
};

export default React.memo(CustomOverlayDong);

const StCustomOverlayDong = {
  Img: styled.div`
    background-size: cover;
    position: relative;
  `,
  Index: styled.div`
    position: absolute;
    top: 45%;
    left: 18%;
    transform: translate(-50%, -50%);
    color: #515e00;
    font-size: 12px;
    font-weight: 600;
  `,
  Text: styled.div`
    position: absolute;
    top: 45%;
    left: 60%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 11px;
    font-weight: 550;
  `,
};
