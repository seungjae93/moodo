import styled from "styled-components";
import { Link } from "react-router-dom";
import flex from "../../../libs/styles/utilFlex";

function Header() {
  const userId = localStorage.getItem("userId");
  const handleMapClick = () => {
    if (!userId) {
      // 로그인되어 있지 않은 경우, 로그인 페이지로 이동하거나 다른 처리를 수행할 수 있습니다.
      // 예시로는 다음과 같이 로그인 페이지로 리다이렉트하는 방법이 있습니다.
      return;
    } else {
      // 로그인된 경우, 지도 페이지로 이동합니다.
      window.location.href = `/map/${userId}`;
    }
  };

  return (
    <>
      <HeaderWrapper>
        <ResponsiveWrapper>
          <div className="logo">
            <Link to="/">모두의중개</Link>
          </div>
          <div className="nav">
            <div>사용방법</div>
            <div>
              {" "}
              <div style={{ cursor: "pointer" }} onClick={handleMapClick}>
                지도
              </div>
            </div>
            <div>
              <Link to="/profileEdit">매물관리</Link>
            </div>
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

const HeaderWrapper = styled.nav`
  ${flex({ justify: "center" })}
  position: fixed;
  width: 100%;
  min-width: 600px;
  top: 0;
  background-color: white;
  font-size: 14px;
  padding: 20px 60px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 100;
`;

const ResponsiveWrapper = styled.div`
  ${flex({ gap: "20px" })}
  .logo {
    width: 150px;
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .nav {
    ${flex({ justify: "space-around" })}
    width: 350px;
    .div {
      gap: 30px;
    }
  }
`;
const Spacer = styled.div`
  height: 1.7rem;
`;
