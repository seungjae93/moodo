import styled from "styled-components";

import flex from "./utilFlex";
import palette from "./palette";

export const StDetail = {
  Title: styled.div`
    ${flex({ justify: "space-between" })}
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
    @media screen and (max-width: 550px) {
      ${flex({
        direction: "column",
        gap: "",
      })}
    }
  `,
  Content: styled.div`
    ${flex({ justify: "space-between" })}
    width:450px;
    .semiTitle {
      color: ${palette.gray[1]};
    }
    @media screen and (max-width: 550px) {
      ${flex({ justify: "", gap: "30px" })}
      width:300px;
    }
  `,
  Map: styled.div`
    padding: 20px 0px 30px 0px;
    width: 90%;
    height: 700px;
    @media (max-width: 768px) {
      width: 500px;
      height: 500px;
      margin-top: 0;
    }
  `,
  ImgInfoWrapper: styled.div`
    ${flex({ gap: "30px" })}
    width:100%;
    min-width: 500px;
    @media (max-width: 768px) {
      ${flex({ direction: "column", align: "center", justify: "center" })}
    }
  `,
  ImgWrapper: styled.div`
    ${flex({ justify: "", direction: "column" })}
    width: 80%;
    height: 550px;
    margin-top: 50px;

    @media (max-width: 768px) {
      align-items: flex-start;
      width: 60%;
      height: auto;
      margin-top: 0;
    }
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

    @media screen and (max-width: 768px) {
      ${flex({ direction: "column", justify: "space-around", align: "" })}
    }
  `,
};
