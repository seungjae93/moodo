import styled from "styled-components";
import Responsive from "../Responsive";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <HeaderWrapper>
        <ResponsiveWrapper>
          <div className="logo">
            <Link to="/">모두의중개</Link>
          </div>
          <div className="nav">
            <div>사용방법</div>
            <div>매물관리</div>
            <div>
              <Link to="/">로그인/회원가입</Link>
            </div>
          </div>
        </ResponsiveWrapper>
      </HeaderWrapper>
      <Spacer />
    </>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const ResponsiveWrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .logo {
    width: 150px;
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .nav {
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .div {
      gap: 30px;
    }
  }
`;
const Spacer = styled.div`
  height: 1.7rem;
`;
