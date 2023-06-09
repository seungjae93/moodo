import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import flex from "../../../../libs/styles/utilFlex";
import palette from "../../../../libs/styles/palette";
import { realtorApi } from "../../../../apis/axios";
import { Data } from "../../../../typings/detail.type";

function CardProfile() {
  const path = window.location.pathname;
  const userId = path.substring(5);
  const { data, isLoading, error } = useQuery<Data>(["realtor"], async () =>
    realtorApi.get(userId)
  );
  return (
    <StCardProfile.Wrapper>
      <StCardProfile.Img src={data?.userInfo?.userProfileImgUrl} />
      <StCardProfile.Content>
        <div className="companyName">{data?.userInfo?.userCompanyName}</div>
        <div className="userName">중개사: {data?.userInfo?.userName}</div>
        <div className="userName">
          문의: {data?.userInfo?.userCompanyTelNumber}
        </div>
      </StCardProfile.Content>
    </StCardProfile.Wrapper>
  );
}

export default CardProfile;

const StCardProfile = {
  Wrapper: styled.div`
    ${flex({ justify: "center" })}
    width: 400px;
    height: 150px;
    margin-top: 20px;
    padding: 10px;
    border: 0px solid black;
    border-radius: 10px;
    box-shadow: 0px 1px 5px 1px #dddddd;
    @media screen and (max-width: 930px) {
      width: 230px;
      height: 70px;
      z-index: 2;
      position: absolute;
      right: 10px;
      top: 120px;
      background-color: white;
    }
  `,
  Img: styled.img`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    @media screen and (max-width: 930px) {
      width: 50px;
      height: 50px;
    }
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
    @media screen and (max-width: 930px) {
      .companyName {
        font-weight: 700;
        font-size: 12px;
        color: ${palette.cyan[5]};
      }
      .userName {
        font-weight: 400;
        font-size: 8px;
      }
    }
  `,
};
