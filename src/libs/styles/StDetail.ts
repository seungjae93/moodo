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
  Map: styled.div`
    padding: 20px 0px 30px 0px;
    width: 100%;
    height: 700px;
  `,
  ImgInfoWrapper: styled.div`
    ${flex({ gap: "30px" })}
  `,
  ImgWrapper: styled.div`
    ${flex({ justify: "", direction: "column" })}
    width:100%;
    height: 550px;
    margin-top: 50px;
  `,
  ImgBox: styled.div`
    ${flex({ align: "", gap: "15px" })}
    flex-wrap: wrap;
    margin-top: 15px;
  `,
  SummaryWrapper: styled.div`
    ${flex({
      direction: "column",
      align: "",
      justify: "",
      gap: "30px",
    })}
    width: 400px;
    height: 400px;
  `,
};
