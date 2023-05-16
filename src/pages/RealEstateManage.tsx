import SideNav from "../components/common/SideNav/SideNav";
import ManageCard from "../components/common/Card/ManageCard";
import RadioInput from "../components/common/EstateListing/RadioInput";
import useEstateList from "../hooks/useEstateList";
import { StRealEstate } from "../libs/styles/StRealEstate";

const typeOfProperties = [
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

  return (
    <>
      <StRealEstate.Wrapper>
        <SideNav />
        <StRealEstate.ListingBox>
          <StRealEstate.Title>매물 관리</StRealEstate.Title>
          <StRealEstate.SemiTitle>매물종류</StRealEstate.SemiTitle>

          <RadioInput
            type="radio"
            options={typeOfProperties}
            name="typeOfProperty"
          />
          <StRealEstate.ManageCardBox>
            {estateList?.map((estate) => (
              <ManageCard key={estate?.estateId} estate={estate} />
            ))}
          </StRealEstate.ManageCardBox>
        </StRealEstate.ListingBox>
      </StRealEstate.Wrapper>
    </>
  );
}

export default RealEstateManage;
