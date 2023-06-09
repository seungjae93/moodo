import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

import palette from "../../../libs/styles/palette";
import flex from "../../../libs/styles/utilFlex";
import useUser from "../../../hooks/useUser";

function SideNav() {
  const { user } = useUser();
  return (
    <>
      <StSideNav.Wrapper>
        <StSideNav.Box>
          <Avatar />
          <h1>{user?.userCompanyName}</h1>
          <div className="info">
            대표 : {user?.userName} <br />
            문의 : {user?.userCompanyTelNumber}
          </div>
        </StSideNav.Box>
        <StSideNav.ListWrapper>
          <StSideNav.List>
            <Link to="/profileEdit">프로필 설정</Link>
          </StSideNav.List>
          <StSideNav.List>
            <Link to="/realEstateListing">매물 등록</Link>
          </StSideNav.List>
          <StSideNav.List>
            <Link to="/realEstateManage">매물 관리</Link>
          </StSideNav.List>
          <StSideNav.List>
            <Link to="/memberManage">회원 관리</Link>
          </StSideNav.List>
        </StSideNav.ListWrapper>
      </StSideNav.Wrapper>
    </>
  );
}

export default SideNav;

const StSideNav = {
  Wrapper: styled.div`
    height: 100%;
    min-height: 200vh;
    width: 350px;
    min-width: 300px;
    background: ${palette.gray[6]};
  `,
  Box: styled.div`
    ${flex({ direction: "column", gap: "20px" })}
    margin-top: 15px;

    h1 {
      margin-top: 10px;
      font-size: 24px;
      font-weight: 500;
      color: white;
    }
    .info {
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: white;
      line-height: 1.5;
    }
  `,
  ListWrapper: styled.div`
    margin-top: 30px;
  `,
  List: styled.div`
    ${flex({})}
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    color: white;
    border-top: 0.5px solid rgba(255, 255, 255, 0.5);
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
  `,
};
