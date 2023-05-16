import styled from "styled-components";

import Button from "../Button/Button";
import flex from "../../../libs/styles/utilFlex";
import palette from "../../../libs/styles/palette";

function MemberCard() {
  return (
    <StMemberCard.Wrapper>
      <StMemberCard.Image />
      <StMemberCard.ContentBox>
        <StMemberCard.Content>부동산 이름</StMemberCard.Content>
        <StMemberCard.Content>중개사 이름</StMemberCard.Content>
        <StMemberCard.Content>중개사 전화번호</StMemberCard.Content>
        <StMemberCard.Content>사무실 전화번호</StMemberCard.Content>
      </StMemberCard.ContentBox>
      <StMemberCard.ButtonWrapper>
        <StMemberCard.ButtonBox>
          <Button.Primary size="medium" fw="400" fs="18px">
            자격증 보기
          </Button.Primary>
          <Button.Negative
            outlined
            borderColor="black"
            size="medium"
            fw="400"
            fs="18px"
          >
            현재상태 <br />
            미승인
          </Button.Negative>
        </StMemberCard.ButtonBox>
        <Button.Primary fw="400" fs="18px">
          승인
        </Button.Primary>
      </StMemberCard.ButtonWrapper>
    </StMemberCard.Wrapper>
  );
}

export default MemberCard;

const StMemberCard = {
  Wrapper: styled.div`
    ${flex({ justify: "space-around" })}
    cursor: pointer;
    background-color: white;
    width: 900px;
    height: 180px;
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
  Image: styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: 1px solid ${palette.gray[1]};
  `,
  ContentBox: styled.div`
    width: 350px;
    margin: 10px;
  `,
  Content: styled.div`
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    margin-bottom: 10px;
  `,
  ButtonBox: styled.div`
    ${flex({
      direction: "column",
      align: "flex-end",
      gap: "5px",
    })}
  `,
  ButtonWrapper: styled.div`
    ${flex({ gap: "5px" })}
  `,
};
