import React from "react";
import styled from "styled-components";
import flex from "../../../libs/styles/utilFlex";
import palette from "../../../libs/styles/palette";

function Footer() {
  return (
    <StFooter.Wrapper>
      <StFooter.Title>고객센터</StFooter.Title>
      <StFooter.content>
        {" "}
        전화 : 02 - 2203 - 0508 (09:00 ~ 18:00 주말, 공휴일 제외)
      </StFooter.content>
      <StFooter.content>이메일 : snu910501@naver.com</StFooter.content>
      <StFooter.Title>뉴씽크</StFooter.Title>
      <StFooter.content>사업자 등록번호 : 875-31-01047</StFooter.content>
      <StFooter.content>서울특별시 광진구 동일로 56길 37, 2층</StFooter.content>
    </StFooter.Wrapper>
  );
}

export default Footer;

const StFooter = {
  Wrapper: styled.div`
    ${flex({ direction: "column", align: "" })}
    width: 1920px;
    height: 300px;
    background-color: ${palette.gray[5]};
    padding: 50px 0px 50px 60px;
    margin: auto;
  `,
  Title: styled.p`
    color: white;
    font-size: 20px;
    margin: 20px 0px 10px 0px;
  `,
  content: styled.p`
    color: #cecece;
    font-size: 16px;
  `,
};
