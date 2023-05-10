import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

import palette from "../../../libs/styles/palette";
import flex from "../../../libs/styles/utilFlex";

function SideNav() {
  return (
    <>
      <SideNavWrapper>
        <SideNavBox>
          <Avatar />
          <h1>에이파트 부동산</h1>
          <div className="info">
            대표 : 박영호 <br />
            문의 : 02-2203-0508
          </div>
        </SideNavBox>
        <SideNavListWrapper>
          <SideNavList>
            <Link to="/profileEdit">프로필 설정</Link>
          </SideNavList>
          <SideNavList>
            <Link to="/realEstateListing">매물 등록</Link>
          </SideNavList>
          <SideNavList>
            <Link to="/realEstateManage">매물 관리</Link>
          </SideNavList>
        </SideNavListWrapper>
      </SideNavWrapper>
    </>
  );
}

export default SideNav;

const SideNavWrapper = styled.div`
  height: 100%;
  min-height: 200vh;
  width: 350px;
  min-width: 300px;
  background: ${palette.gray[6]};
`;

const SideNavBox = styled.div`
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
`;
const SideNavListWrapper = styled.div`
  margin-top: 30px;
`;
const SideNavList = styled.div`
  ${flex({})}
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  color: white;
  border-top: 0.5px solid rgba(255, 255, 255, 0.5);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
`;
