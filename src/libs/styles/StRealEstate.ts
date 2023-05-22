import styled from "styled-components";

import palette from "./palette";
import flex from "./utilFlex";

export const StRealEstate = {
  Wrapper: styled.div`
    ${flex({ align: "", justify: "" })}
    padding-top: 30px;
    height: 150vh;
    width: 1080px;
    min-width: 700px;
  `,

  ProfileBox: styled.div`
    padding: 50px;
    width: 100%;
    .contentBox {
      width: 870px;
      ${flex({ align: "", justify: "", gap: "20px" })}
      border-bottom: 1px solid ${palette.gray[0]};
    }
  `,

  ListingBox: styled.div`
    padding: 50px;
    width: 100%;
  `,

  ManageCardBox: styled.div`
    ${flex({ direction: "column", gap: "15px" })}
    width:870px;
    margin-top: 20px;
  `,

  Form: styled.form`
    width: 100%;
    .btnWrapper {
      ${flex({})}
      margin-top: 15px;
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

  ProfileSemiTitle: styled.div`
    ${flex({ justify: "" })}
    width: 150px;
    padding: 20px 20px 20px 0;
    font-weight: 350;
    font-size: 13px;
  `,

  RadioInputWrapper: styled.div`
    ${flex({ justify: "" })}
  `,
  ProfileContent: styled.div`
    width: 450px;
    padding: 0 20px 20px 0;
    padding-top: 20px;
    font-weight: 350;
    font-size: 13px;
    .profileImgPreview {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      border: 1px solid ${palette.gray[1]};
    }
    .profileWrap {
      ${flex({ direction: "column", gap: "20px", align: "" })}
    }
    .MyHomepageAddress {
      width: 100%;
      height: 33.6px;
      padding: 0.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 5px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      color: #718096;
    }
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
      flex-wrap: wrap;
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
  ProfileLabel: styled.label`
    width: 100px;
    text-align: center;
    cursor: pointer;
    padding: 10px;
    border: 1px solid #d1d5db;
    background-color: #ffffff;
    border-radius: 5px;
    font-weight: 500;
  `,
};
