import styled from "styled-components";

import SideNav from "../components/common/SideNav/SideNav";
import ManageCard from "../components/common/Card/ManageCard";
import flex from "../libs/styles/utilFlex";
import RadioInput from "../components/common/management/RadioInput";
import useEstateList from "../hooks/useEstateList";

const typeOfProperties = [
  { id: "typeOfProperty-1", label: "원/투룸", value: "원/투룸" },
  { id: "typeOfProperty-2", label: "주택/빌라", value: "주택/빌라" },
  { id: "typeOfProperty-3", label: "아파트", value: "아파트" },
  { id: "typeOfProperty-4", label: "상가/사무실", value: "상가/사무실" },
  { id: "typeOfProperty-5", label: "건물", value: "건물" },
];

function RealEstateManage() {
  const { estateList } = useEstateList();
  return (
    <>
      <StRealEstateManage.Wrapper>
        <SideNav />
        <StRealEstateManage.Box>
          <StRealEstateManage.Title>매물 관리</StRealEstateManage.Title>
          <StRealEstateManage.SemiTitle>매물종류</StRealEstateManage.SemiTitle>
          <StRealEstateManage.InputBox>
            <RadioInput
              type="radio"
              options={typeOfProperties}
              name="typeOfProperty"
            />
          </StRealEstateManage.InputBox>
          <StRealEstateManage.CardBox>
            {estateList?.map((estate) => (
              <ManageCard key={estate?.estateId} estate={estate} />
            ))}
          </StRealEstateManage.CardBox>
        </StRealEstateManage.Box>
      </StRealEstateManage.Wrapper>
    </>
  );
}

export default RealEstateManage;

const StRealEstateManage = {
  Wrapper: styled.div`
    ${flex({ justify: "", align: "" })}
    padding-top: 30px;
    height: 100%;
    width: 1300px;
    min-width: 700px;
  `,
  Box: styled.div`
    padding: 50px;
    width: 100%;
  `,
  Title: styled.div`
    width: 100%;
    padding: 0 20px 10px 0;
    font-weight: 700;
    font-size: 24px;
    border-bottom: 3px solid black;
  `,
  SemiTitle: styled.div`
    width: 100%;
    padding: 20px 20px 10px 0;
    font-weight: 400;
    font-size: 16px;
    border-bottom: 1px solid #000000;
  `,
  InputBox: styled.div`
    ${flex({ justify: "" })}
  `,
  CardBox: styled.div`
    ${flex({ direction: "column", gap: "15px" })}
  `,
};
