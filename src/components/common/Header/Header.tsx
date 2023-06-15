import styled from "styled-components";

import flex from "../../../libs/styles/utilFlex";
import modoo from "../../../assets/modoo.svg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleMapClick = () => {
    if (!userId) {
      return;
    } else {
      // 로그인된 경우, 지도 페이지로 이동합니다.
      window.location.href = `/map/${userId}`;
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    alert("로그아웃 되었습니다!");
    navigate("/");
  };
  return (
    <>
      <HeaderWrapper>
        <ResponsiveWrapper>
          <Link to="/">
            <img src={modoo} alt="Modoo Logo" />
          </Link>
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
              {isLoggedIn ? (
                <div style={{ cursor: "pointer" }} onClick={handleLogout}>
                  로그아웃
                </div>
              ) : (
                <Link to="/login">로그인/회원가입</Link>
              )}
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
  margin: auto;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 100;
`;

const ResponsiveWrapper = styled.div`
  ${flex({ gap: "20px" })}
  /* .logo {
    width: 150px;
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  } */
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
