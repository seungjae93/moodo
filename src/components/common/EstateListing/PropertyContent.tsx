import { useEffect, useState } from "react";
import { StRealEstate } from "../../../libs/styles/StRealEstate";
import NumberInputGroup from "./NumberInputGroup";
import { PropertyContentProps } from "../../../typings/detail.type";
import StoreSelectbox from "./StoreSelectbox";

export default function PropertyContent({
  type,
  register,
  handleCategoryChange,
  handleSubCategoryChange,
}: PropertyContentProps) {
  const isRoomVillaApart = type === "roomVillaApart";
  const isOffice = type === "office";
  const isBuilding = type === "building";

  return (
    <>
      {(isRoomVillaApart || isOffice || isBuilding) && (
        <StRealEstate.Content>
          <div className="contentTitle">면적</div>
          <NumberInputGroup
            type="supplyArea"
            label="공급면적"
            register={register}
          />
          <span>m²</span>
          <div className="marginLeft">|</div>
          <NumberInputGroup
            type="exclusiveArea"
            label="전용"
            register={register}
          />
          <span>m²</span>
        </StRealEstate.Content>
      )}

      {isRoomVillaApart && (
        <StRealEstate.Content>
          <div className="contentTitle">방 개수</div>
          <NumberInputGroup
            type="numOfRoom"
            label="방 개수"
            register={register}
          />
          <span>개</span>
          <div className="marginLeft">|</div>
          <NumberInputGroup
            type="numOfBath"
            label="화장실개수"
            register={register}
          />
          <span>개</span>
        </StRealEstate.Content>
      )}
      {(isRoomVillaApart || isOffice) && (
        <StRealEstate.Content>
          <div className="contentTitle">층수</div>
          <NumberInputGroup
            type="numOfFloor"
            label="건물층수"
            register={register}
          />
          <span>층</span>
          <div className="marginLeft">|</div>
          <NumberInputGroup type="floor" label="해당층수" register={register} />
          <span>층</span>
        </StRealEstate.Content>
      )}
      {isOffice && (
        <StRealEstate.Content>
          <div className="contentTitle">업종</div>
          <StoreSelectbox
            handleCategoryChange={handleCategoryChange}
            handleSubCategoryChange={handleSubCategoryChange}
          />
        </StRealEstate.Content>
      )}
      {isBuilding && (
        <StRealEstate.Content>
          <div className="contentTitle">층수</div>
          <NumberInputGroup
            type="lowestFloor"
            label="저층"
            register={register}
          />
          <span>층</span>
          <div className="marginLeft">|</div>
          <NumberInputGroup
            type="highestFloor"
            label="최상층"
            register={register}
          />
          <span>층</span>
        </StRealEstate.Content>
      )}
    </>
  );
}
