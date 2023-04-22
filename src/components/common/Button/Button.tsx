import styled, { css } from "styled-components";
import palette from "../../../libs/styles/palette";

interface ButtonProps {
  fullWidth?: string;
  cyan?: string;
  [key: string]: any;
}

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props: ButtonProps) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props: ButtonProps) =>
    props.cyan &&
    css`
      background: ${palette.gray[9]};
      &:hover {
        background: ${palette.gray[8]};
      }
    `}
`;

const Button = (props: ButtonProps) => <StyledButton {...props} />;
export default Button;
