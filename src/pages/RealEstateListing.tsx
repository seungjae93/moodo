import styled from "styled-components";
import SideNav from "../components/common/SideNav/SideNav";
import { useForm } from "react-hook-form";
import RadioInput from "../components/common/management/RadioInput";

interface RealEstateForm {
  propertyType: string;
}
function RealEstateListing() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<RealEstateForm>();
  console.log(watch());
  return (
    <RealEstateListingWrapper>
      <SideNav />
      <RealEstateListingBox>
        <RealEstateListingTitle>매물 등록</RealEstateListingTitle>
        <RealEstateListingForm>
          <RealEstateListingSemiTitle>매물종류</RealEstateListingSemiTitle>
          <RadioInputWrapper>
            <RadioInput
              register={register("propertyType", {
                required: "필수 선택 항목입니다",
              })}
              type="radio"
              id="propertyType-1"
              label="원/투룸"
              value="원/투룸"
              name="propertyType"
            />
            <RadioInput
              register={register("propertyType", {
                required: "필수 선택 항목입니다",
              })}
              type="radio"
              id="propertyType-2"
              label="주택/빌라"
              value="주택/빌라"
              name="propertyType"
            />
            <RadioInput
              register={register("propertyType", {
                required: "필수 선택 항목입니다",
              })}
              type="radio"
              id="propertyType-3"
              label="아파트"
              value="아파트"
              name="propertyType"
            />
            <RadioInput
              register={register("propertyType", {
                required: "필수 선택 항목입니다",
              })}
              type="radio"
              id="propertyType-4"
              label="상가/사무실"
              value="상가/사무실"
              name="propertyType"
            />
            <RadioInput
              register={register("propertyType", {
                required: "필수 선택 항목입니다",
              })}
              type="radio"
              id="propertyType-5"
              label="건물"
              value="건물"
              name="propertyType"
            />
          </RadioInputWrapper>
        </RealEstateListingForm>
      </RealEstateListingBox>
    </RealEstateListingWrapper>
  );
}

export default RealEstateListing;

const RealEstateListingWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  height: 100%;
  width: 100%;
`;

const RealEstateListingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 100%;
  gap: 30px;
`;

const RealEstateListingForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RealEstateListingTitle = styled.div`
  width: 100%;
  padding: 0 20px 10px 0;
  font-weight: 700;
  font-size: 24px;
  border-bottom: 3px solid black;
`;

const RealEstateListingSemiTitle = styled.div`
  width: 100%;
  padding: 0 20px 10px 0;
  font-weight: 400;
  font-size: 16px;
  border-bottom: 1px solid #000000;
`;

const RadioInputWrapper = styled.div`
  display: flex;
`;
