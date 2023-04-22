import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../libs/styles/palette";
import Button from "../common/Button/Button";

const textMap = {
  login: "로그인",
  signup: "회원가입",
};
interface AuthFormProps {
  type: "login" | "signup";
}
function AuthForm({ type }: AuthFormProps) {
  const text = textMap[type];
  return (
    <AuthFormWrapper>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          type="text"
        />
        <StyledInput
          autoComplete="password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === "signup" && (
          <>
            <StyledInput
              autoComplete="passwordConfirm"
              name="passwordConfirm"
              placeholder="비밀번호 재확인"
              type="password"
            />
            <StyledInput
              autoComplete="name"
              name="name"
              placeholder="이름"
              type="text"
            />
            <StyledInput
              autoComplete="passwordConfirm"
              name="passwordConfirm"
              placeholder="이메일"
              type="email"
            />
            <StyledInput
              autoComplete="passwordConfirm"
              name="passwordConfirm"
              placeholder="휴대전화"
              type="text"
            />
          </>
        )}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: "1rem" }}>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === "login" ? (
          <span>
            혹시 공인중개사님이신가요? 회원가입은{" "}
            <Link to="/signup">여기서</Link> 하세요.
          </span>
        ) : null}
      </Footer>
    </AuthFormWrapper>
  );
}

export default AuthForm;

const AuthFormWrapper = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;

  border: 0.5px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  &:focus {
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1.5rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-weight: 400;
  font-size: 12px;

  a {
    color: ${palette.cyan[5]};
    text-decoration: underline;
    &:hover {
      color: ${palette.cyan[4]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;
