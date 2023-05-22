import styled from "styled-components";

import useUser from "../../../../hooks/useUser";
import flex from "../../../../libs/styles/utilFlex";
import palette from "../../../../libs/styles/palette";

function CardProfile() {
  const { user } = useUser();

  return (
    <StCardProfile.Wrapper>
      <StCardProfile.Img src={user?.userProfileImgUrl} />
      <StCardProfile.Content>
        <div className="companyName">{user?.userCompanyName}</div>
        <div className="userName">중개사: {user?.userName}</div>
        <div className="userName">문의: {user?.userCompanyTelNumber}</div>
      </StCardProfile.Content>
    </StCardProfile.Wrapper>
  );
}

export default CardProfile;

const StCardProfile = {
  Wrapper: styled.div`
    ${flex({ justify: "center" })}
    padding:10px;
    width: 400px;
    height: 150px;
    border: 0px solid black;
    border-radius: 10px;
    box-shadow: 0px 1px 5px 1px #dddddd;
  `,
  Img: styled.img`
    width: 120px;
    height: 120px;
    border-radius: 100%;
  `,
  Content: styled.div`
    ${flex({ align: "", direction: "column", gap: "15px" })}
    margin-left:30px;
    .companyName {
      font-weight: 700;
      font-size: 24px;
      color: ${palette.cyan[5]};
    }
    .userName {
      font-weight: 400;
      font-size: 16px;
    }
  `,
};
