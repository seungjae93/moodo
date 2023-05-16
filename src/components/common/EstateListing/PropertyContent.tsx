import { UseFormRegister } from "react-hook-form";
import { StRealEstate } from "../../../libs/styles/StRealEstate";
import NumberInputGroup from "./NumberInputGroup";

interface PropertyContentProps {
  type: "roomVilla" | "apartmentOffice" | "building";
  register: UseFormRegister<any>;
}

export default function PropertyContent({
  type,
  register,
}: PropertyContentProps) {
  const isRoomVilla = type === "roomVilla";
  const isApartmentOffice = type === "apartmentOffice";
  const isBuilding = type === "building";

  return (
    <>
      {(isRoomVilla || isApartmentOffice || isBuilding) && (
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

      {isRoomVilla && (
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
      {(isRoomVilla || isApartmentOffice) && (
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
