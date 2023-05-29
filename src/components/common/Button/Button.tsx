import { ReactNode } from "react";
import styled, { css } from "styled-components";

import palette from "../../../libs/styles/palette";
import flex from "../../../libs/styles/utilFlex";
import { StyledButtonProps } from "../../../typings/UI.types";

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
      hoverBc={palette.gray[4]}
      activeBc={palette.gray[8]}
    />
  );
};

const NegativeButton = (props: StyledButtonProps) => {
  return (
    <PrimitiveButton
      {...props}
      bc="white"
      hoverBc="lightgray"
      activeBc="lightgray"
    />
  );
};

const Primary = PrimaryButton;
const Negative = NegativeButton;

const Button = { Primary, Negative };
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
      case "sLarge":
        return css`
          height: 40px;
          width: 180px;
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
          height: 155px;
          width: 100px;
        `;
    }
  }}
  ${({ outlined, borderColor, color }) => {
    if (outlined) {
      return css`
        color: color;
        border: 1px solid ${borderColor};
        background-color: #fff;
        font-weight: 600;
        &:hover {
          background-color: #fff;
        }
        &:active {
          background-color: #fff;
        }
      `;
    }
  }}
`;

const ButtonInner = styled.div`
  ${flex({ gap: "7px" })}
`;
