import styled from "styled-components";

import { WorningWordProps } from "../../typings/detail.type";

export const WorningWord = ({ children, color }: WorningWordProps) => {
  return (
    <ValidationText color={color ? "#ff5656" : "transparent"}>
      {children}
    </ValidationText>
  );
};

const ValidationText = styled.div`
  font-size: 12px;
  margin-bottom: 15px;
  color: ${({ color }) => color};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
