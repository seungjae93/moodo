import { ReactNode } from "react";
import styled, { css, StyledComponentProps } from "styled-components";

import palette from "../../../libs/styles/palette";
import flex from "../../../libs/styles/utilFlex";
interface StyledButtonProps {
  children?: ReactNode;
  fs?: string;
  bc?: string;
  color?: string;
  ma?: string;
  fw?: string;
  activeBc?: string;
  hoverBc?: string;
  size?: string;
  type?: string;
  [key: string]: any;
}

//primitive Button
const PrimitiveButton = ({ children, ...restProps }: StyledButtonProps) => {
  return (
    <StyledButton {...restProps}>
      <ButtonInner>{children}</ButtonInner>
    </StyledButton>
  );
};

//Primary Style
const PrimaryButton = (props: StyledButtonProps) => {
  return (
    <PrimitiveButton
      {...props}
      bc={palette.gray[6]}
      color="white"
      activeBc={palette.gray[8]}
    />
  );
};

const Primary = PrimaryButton;

const Button = { Primary };
export default Button;

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: ${({ fs }) => fs};
  background-color: ${({ bc }) => bc};
  color: ${({ color }) => color};
  margin: ${({ ma }) => ma};
  font-weight: ${({ fw }) => fw};
  &:hover {
    background-color: ${({ hoverBc }) => hoverBc};
  }
  &:active {
    background-color: ${({ activeBc }) => activeBc};
    transition: 0.2s;
  }

  ${({ size }) => {
    switch (size) {
      case "xLarge":
        return css`
          height: 50px;
          width: 380px;
        `;
      case "large":
        return css`
          height: 50px;
          width: 200px;
        `;
      case "medium":
        return css`
          height: 75px;
          width: 120px;
        `;
      case "small":
        return css`
          height: 30px;
          width: 80px;
        `;
      default:
        return css`
          height: 35px;
          width: 100px;
        `;
    }
  }}
  ${({ outlined, bc }) => {
    if (outlined) {
      return css`
        color: red;
        border: 1px solid ${bc};
        background-color: #fff;
        font-weight: 600;
        &:active {
          background-color: #eeeeee;
        }
      `;
    }
  }}
`;

const ButtonInner = styled.div`
  ${flex({ gap: "7px" })}
`;
