import styled from "styled-components";

import flex from "./utilFlex";
import palette from "./palette";

export const StDetail = {
  Title: styled.div`
    width: 100%;
    padding: 0 20px 20px 0;
    font-weight: 700;
    font-size: 24px;
    border-bottom: 2px solid black;
    margin-top: 50px;
  `,
  ContentWrapper: styled.div`
    ${flex({ justify: "", gap: "40px" })}
    width:100%;
    padding: 30px 10px 30px 20px;
    border-bottom: 1px solid ${palette.gray[0]};
  `,
  Content: styled.div`
    ${flex({ justify: "space-between" })}
    width:480px;
    .semiTitle {
      color: ${palette.gray[1]};
    }
  `,
};
