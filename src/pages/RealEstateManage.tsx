import styled from "styled-components";

import SideNav from "../components/common/SideNav/SideNav";
import MyEstateCard from "../components/common/management/MyEstateCard";
import flex from "../libs/styles/utilFlex";
function RealEstateManage() {
  return (
    <>
      <StRealEstateManage.Wrapper>
        <SideNav />
        <StRealEstateManage.Box>
          <StRealEstateManage.Title>매물 관리</StRealEstateManage.Title>
          <StRealEstateManage.SemiTitle>매물종류</StRealEstateManage.SemiTitle>
          <MyEstateCard />
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
};
