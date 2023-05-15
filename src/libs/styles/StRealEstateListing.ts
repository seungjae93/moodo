import styled from "styled-components";

import palette from "./palette";
import flex from "./utilFlex";

export const StRealEstateListing = {
  Wrapper: styled.div`
    ${flex({ align: "", justify: "" })}
    padding-top: 30px;
    height: 100%;
    width: 1300px;
    min-width: 700px;
  `,

  Box: styled.div`
    padding: 50px;
    width: 100%;
  `,

  Form: styled.form`
    width: 100%;
    .btnWrapper {
      ${flex({})}
      margin-top:15px;
    }
  `,

  Title: styled.div`
    width: 100%;
    padding: 0 20px 10px 0;
    font-weight: 700;
    font-size: 24px;
    border-bottom: 3px solid black;
  `,

  SemiTitle: styled.div`
    width: 100%;
    padding: 20px 20px 10px 0;
    font-weight: 400;
    font-size: 16px;
    border-bottom: 1px solid #000000;
  `,

  RadioInputWrapper: styled.div`
    display: flex;
  `,

  Content: styled.div`
    ${flex({ justify: "", gap: "10px" })}
    padding: 10px 0 10px 30px;
    border-bottom: 1px solid ${palette.gray[0]};
    span {
      margin-left: 10px;
    }
    .contentTitle {
      width: 80px;
      text-align: center;
    }
    .marginLeft {
      margin-left: 30px;
      margin-bottom: 5px;
      font-size: 25px;
      text-align: center;
      color: ${palette.gray[0]};
    }
    .optionsWrap {
      ${flex({ justify: "", gap: "10px" })}
      width: 600px;
    }
    .photoWrap {
      ${flex({ justify: "", gap: "10px" })}
      flex-wrap: wrap;
      width: 600px;
      height: 250px;
      padding: 20px;
    }
    .photoLabel {
      ${flex({})}
      width: 70px;
      height: 70px;
    }
    .labelWrap {
      ${flex({})}
      width: 100%;
      height: 200px;
    }
    .photoInput {
      width: 10px;
      opacity: 0;
      cursor: pointer;
    }
    .photoIcon {
      font-size: 50px;
      color: ${palette.gray[3]};
      cursor: pointer;
    }
  `,
};
