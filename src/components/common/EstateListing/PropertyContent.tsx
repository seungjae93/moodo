import { StRealEstate } from "../../../libs/styles/StRealEstate";
import NumberInputGroup from "./NumberInputGroup";
import { PropertyContentProps } from "../../../typings/detail.type";
import { StoreSelectbox } from "./StoreSelectbox";

export default function PropertyContent({
  type,
  register,
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
            label="대분류"
            options={[
              { value: "사무실", label: "사무실" },
              { value: "휴게음식점", label: "휴게음식점" },
              { value: "일반음식점", label: "일반음식점" },
              { value: "주류", label: "주류" },
              { value: "오락/체육시설", label: "오락/체육시설" },
              { value: "판매점", label: "판매점" },
              { value: "서비스업", label: "서비스업" },
              { value: "기타업종", label: "기타업종" },
            ]}
            register={register("mainCategory")}
          />
          <div className="marginLeft">|</div>
          <StoreSelectbox
            label="소분류"
            options={[
              { value: "사무실", label: "사무실" },
              { value: "option2", label: "음" },
              { value: "option3", label: "Option 3" },
            ]}
            register={register("subCategory")}
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
