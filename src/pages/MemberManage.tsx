import styled from "styled-components";

import SideNav from "../components/common/SideNav/SideNav";
import MemberCard from "../components/common/Card/MemberCard";
import flex from "../libs/styles/utilFlex";

function MemberManage() {
  return (
    <>
      <StMemberManage.Wrapper>
        <SideNav />
        <StMemberManage.Box>
          <StMemberManage.Title>회원 관리</StMemberManage.Title>

          <StMemberManage.CardBox>
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </StMemberManage.CardBox>
        </StMemberManage.Box>
      </StMemberManage.Wrapper>
    </>
  );
}

export default MemberManage;

const StMemberManage = {
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
  InputBox: styled.div`
    ${flex({ justify: "" })}
  `,
  CardBox: styled.div`
    ${flex({ direction: "column", gap: "15px" })}
    margin-top: 20px;
  `,
};
