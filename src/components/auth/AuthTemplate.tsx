import styled from "styled-components";
import { Link } from "react-router-dom";

interface AuthFormProps {
  [key: string]: any;
}

function AuthForm({ children }: AuthFormProps) {
  return (
    <AuthTemplateWrapper>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">모두의 중개</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateWrapper>
  );
}

export default AuthForm;

const AuthTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
`;

const WhiteBox = styled.div`
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
`;
