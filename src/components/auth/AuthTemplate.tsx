import styled from "styled-components";
import { Link } from "react-router-dom";

import flex from "../../libs/styles/utilFlex";

interface AuthFormProps {
  [key: string]: any;
}

function AuthForm({ children }: AuthFormProps) {
  return (
    <StAuthTemplate.Container>
      <StAuthTemplate.Box>
        <div className="logo-area">
          <Link to="/">모두의 중개</Link>
        </div>
        {children}
      </StAuthTemplate.Box>
    </StAuthTemplate.Container>
  );
}

export default AuthForm;

const StAuthTemplate = {
  Container: styled.div`
    ${flex({ direction: "column" })};
    height: 100%;
    min-height: 100vh;
  `,
  Box: styled.div`
    .logo-area {
      display: block;
      padding-bottom: 2rem;
      text-align: center;
      font-weight: bold;
      letter-spacing: 2px;
    }
    margin-top: 3rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    width: 380px;
    background: white;
    border-radius: 2px;
  `,
};
