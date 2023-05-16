import { UseFormRegister } from "react-hook-form";
import { StRealEstateListing } from "../../../libs/styles/StRealEstateListing";
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
        <StRealEstateListing.Content>
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
        </StRealEstateListing.Content>
      )}

      {isRoomVilla && (
        <StRealEstateListing.Content>
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
        </StRealEstateListing.Content>
      )}
      {(isRoomVilla || isApartmentOffice) && (
        <StRealEstateListing.Content>
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
        </StRealEstateListing.Content>
      )}
      {isBuilding && (
        <StRealEstateListing.Content>
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
        </StRealEstateListing.Content>
      )}
    </>
  );
}
