import styled from "styled-components";
import flex from "./utilFlex";
import palette from "./palette";

export const StMoodoMapSelectBox = {
  Wrapper: styled.div`
    width: 80%;
  `,
  CheckBtn: styled.div`
    ${flex({ direction: "column", align: "", gap: "15px" })}
    .checkBtnContainer {
      ${flex({ justify: "", align: "", gap: "5px" })}
      flex-wrap:wrap;
    }
    .selectContainer {
      ${flex({ gap: "5px" })}
      margin-right:30px;
    }
    .inputContainer {
      ${flex({ gap: "5px" })}
    }
    .completeBtnContainer {
      ${flex({})}
    }
    .checkBtn {
      font-size: 17px;
      width: 100px;
      height: 36px;
      border: none;
      padding: 5px;
    }
    .checkBtn input[type="checkbox"] {
      display: none;
    }
    .checkBtn label {
      display: block;
      border-radius: 10px;
      text-align: center;
      line-height: 30px;
      font-weight: 400;
      font-size: 14px;
      cursor: pointer;
    }

    /* hover */
    .checkBtn input[type="checkbox"]:hover + label {
      background-color: ${palette.cyan[5]};
      color: #fff;
    }
    /* Checked */
    .checkBtn input[type="checkbox"]:checked + label {
      background-color: ${palette.cyan[5]};
      color: #fff;
    }
    /* Disabled */
    .checkBtn input[type="checkbox"] + label {
      border: 2px solid #c4cbcd;
    }
  `,
  Select: styled.select`
    border: 1px solid black;
    border-radius: 10px;
    width: 100px;
    height: 30px;
  `,
  Input: styled.input`
    width: 100px;
    height: 30px;
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
  `,
  TitleList: styled.div`
    ${flex({ justify: "space-between" })}
    border: 1px solid #eee;
    background-color: #fff;
    width: 160px;
    height: 40px;
    border-radius: 5px;
    padding-left: 5px;
    font-size: 13px;
    :hover {
      border: 2px solid black;
    }
  `,
  ContentBoxWrapper: styled.div`
    position: relative;
  `,
  ContentBox: styled.div`
    ${flex({ direction: "column", align: "", justify: "", gap: "10px" })}
    padding: 10px;
    position: absolute;
    border: 1px solid #eee;
    background-color: #fff;
    width: 250px;
    height: 250px;
    border-radius: 5px;
    font-size: 14px;
    z-index: 10;
  `,
};
