import SideNav from "../components/common/SideNav/SideNav";
import MemberCard from "../components/common/Card/MemberCard";

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
          </StRealEstate.ManageCardBox>
        </StRealEstate.ListingBox>
      </StRealEstate.Wrapper>
    </>
  );
}

export default MemberManage;
