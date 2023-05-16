import styled from "styled-components";

import SideNav from "../components/common/SideNav/SideNav";
import MemberCard from "../components/common/Card/MemberCard";
import flex from "../libs/styles/utilFlex";
import { StRealEstate } from "../libs/styles/StRealEstate";

function MemberManage() {
  return (
    <>
      <StRealEstate.Wrapper>
        <SideNav />
        <StRealEstate.ListingBox>
          <StRealEstate.Title>회원 관리</StRealEstate.Title>

          <StRealEstate.ManageCardBox>
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </StRealEstate.ManageCardBox>
        </StRealEstate.ListingBox>
      </StRealEstate.Wrapper>
    </>
  );
}

export default MemberManage;
