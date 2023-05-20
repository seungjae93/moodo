import { useQuery } from "@tanstack/react-query";
import SideNav from "../components/common/SideNav/SideNav";
import MemberCard from "../components/common/Card/MemberCard";

import { StRealEstate } from "../libs/styles/StRealEstate";
import { userApprovedAPi } from "../apis/axios";

interface UserListData {
  userList: Array<{
    admin: string;
    approved: boolean;
    id: string;
    userBusinessLicenseImgUrl: string;
    userBusinessLocation: string;
    userCompanyName: string;
    userCompanyTelNumber: string;
    userEmail: string;
    userId: string;
    userKey: string;
    userName: string;
    userPassword: string;
    userPhoneNumber: string;
    userProfileImgUrl: string;
  }>;
}

function MemberManage() {
  const { data }: { data?: UserListData } = useQuery(
    ["userList"],
    userApprovedAPi.getList,
    {
      onError: (error) => {
        console.error(error);
      },
    }
  );

  return (
    <>
      <StRealEstate.Wrapper>
        <SideNav />
        <StRealEstate.ListingBox>
          <StRealEstate.Title>회원 관리</StRealEstate.Title>
          <StRealEstate.ManageCardBox>
            {data?.userList.map((member) => (
              <MemberCard key={member?.id} member={member} />
            ))}
          </StRealEstate.ManageCardBox>
        </StRealEstate.ListingBox>
      </StRealEstate.Wrapper>
    </>
  );
}

export default MemberManage;
