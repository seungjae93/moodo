import { useState, useEffect } from "react";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useUser from "../../../hooks/useUser";
import Button from "../Button/Button";
import flex from "../../../libs/styles/utilFlex";
import palette from "../../../libs/styles/palette";
import { userApprovedAPi } from "../../../apis/axios";

function MemberCard() {
  const { user } = useUser();
  console.log(user);
  const queryClient = useQueryClient();
  //undefined일 경우 빈 문자열로 대체
  const userId = user?.userId ?? "";
  const [approvedStatus, setApprovedStatus] = useState<string>("미승인");

  useEffect(() => {
    const isApproved = localStorage.getItem("approved");

    if (isApproved === "true") {
      setApprovedStatus("승인");
    } else {
      setApprovedStatus("미승인");
    }
  }, []);

  const mutation = useMutation(userApprovedAPi.get, {
    onSuccess: () => {
      queryClient.invalidateQueries(["userApporved", userId]);
    },
  });
  const handleUpdate = () => {
    mutation.mutate(userId);
  };
  const handleDownload = () => {
    if (user && user.userBusinessLicenseImgUrl) {
      const link = document.createElement("a");
      link.href = user.userBusinessLicenseImgUrl;
      link.download = "image.jpg"; // 다운로드될 파일의 이름 설정
      link.click();
    }
  };

  return (
    <StMemberCard.Wrapper>
      <StMemberCard.Image src={user?.userProfileImgUrl} />
      <StMemberCard.ContentBox>
        <StMemberCard.Content>{user?.userCompanyName}</StMemberCard.Content>
        <StMemberCard.Content>{user?.userName}</StMemberCard.Content>
        <StMemberCard.Content>{user?.userPhoneNumber}</StMemberCard.Content>
        <StMemberCard.Content>
          {user?.userCompanyTelNumber}
        </StMemberCard.Content>
      </StMemberCard.ContentBox>
      <StMemberCard.ButtonWrapper>
        <StMemberCard.ButtonBox>
          <Button.Primary
            size="medium"
            fw="400"
            fs="18px"
            onClick={handleDownload}
          >
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
            {approvedStatus}
          </Button.Negative>
        </StMemberCard.ButtonBox>
        <Button.Primary fw="400" fs="18px" onClick={handleUpdate}>
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
    width: 816px;
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
