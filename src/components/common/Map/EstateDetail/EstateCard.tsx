import styled from "styled-components";

import useUser from "../../../../hooks/useUser";
import flex from "../../../../libs/styles/utilFlex";
import palette from "../../../../libs/styles/palette";

function EstateCard() {
  return <StEstateCard.Wrapper>EstateDetail</StEstateCard.Wrapper>;
}

export default EstateCard;

const StEstateCard = {
  Wrapper: styled.div`
    ${flex({ justify: "space-between", gap: "10px", direction: "column" })}
    margin-top:15px;
    cursor: pointer;
    background-color: white;
    width: 230px;
    height: 345px;
    border: 0px solid black;
    border-radius: 10px;
    box-shadow: 0px 1px 5px 1px #dddddd;
    text-decoration-line: none;
    color: black;
    overflow: hidden;
    :hover {
      box-shadow: 0px 3px 5px 1px #181818;
      transition: all 0.2s;
    }
  `,
};
