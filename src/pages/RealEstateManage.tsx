import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import SideNav from "../components/common/SideNav/SideNav";
import ManageCard from "../components/common/Card/ManageCard";
import RadioInput from "../components/common/EstateListing/RadioInput";
import useEstateList from "../hooks/useEstateList";
import { StRealEstate } from "../libs/styles/StRealEstate";

interface ImageData {
  imgOfPropertyId: number;
  estateId: string;
  imgOfUrl: string;
  imgIndex: number;
}
interface EstateListData {
  estateId: string;
  typeOfProperty: string;
  addressOfProperty: string;
  transactionType: string;
  deposit: string;
  monthly: string;
  price: string;
  exclusiveArea: string;
  numOfRoom: string;
  numOfBath: string;
  imgs: ImageData[];
}
const typeOfProperties = [
  "전체보기",
  "원/투룸",
  "주택/빌라",
  "아파트",
  "상가/사무실",
  "건물",
].map((label, index) => ({
  id: `typeOfProperty-${index + 1}`,
  label,
  value: label,
}));

function RealEstateManage() {
  const { estateList } = useEstateList();
  const { register, watch } = useForm();
  const typeOfPropertyWatch = watch("typeOfProperty");
  const [filteredEstateList, setFilteredEstateList] = useState<
    EstateListData[] | null
  >(null);
  useEffect(() => {
    if (estateList) {
      const filteredList =
        typeOfPropertyWatch && typeOfPropertyWatch !== "전체보기"
          ? estateList.filter(
              (estate) => estate?.typeOfProperty === typeOfPropertyWatch
            )
          : estateList;
      setFilteredEstateList(filteredList);
    }
  }, [estateList, typeOfPropertyWatch]);

  return (
    <>
      <StRealEstate.Wrapper>
        <SideNav />
        <StRealEstate.ListingBox>
          <StRealEstate.Title>매물 관리</StRealEstate.Title>
          <StRealEstate.SemiTitle>매물종류</StRealEstate.SemiTitle>

          <RadioInput
            register={register("typeOfProperty")}
            type="radio"
            options={typeOfProperties}
            name="typeOfProperty"
          />
          <StRealEstate.ManageCardBox>
            {filteredEstateList?.map((estate) => (
              <ManageCard key={estate?.estateId} estate={estate} />
            ))}
          </StRealEstate.ManageCardBox>
        </StRealEstate.ListingBox>
      </StRealEstate.Wrapper>
    </>
  );
}

export default RealEstateManage;
