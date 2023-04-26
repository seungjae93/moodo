import styled from "styled-components";
import Responsive from "../Responsive";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <>
      <SideNavWrapper>
        <SideNavBox></SideNavBox>
      </SideNavWrapper>
      <Spacer />
    </>
  );
}

export default SideNav;

const SideNavWrapper = styled.div`
  position: fixed;
  height: 100%;
  background: #46535f;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const SideNavBox = styled.div`
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
