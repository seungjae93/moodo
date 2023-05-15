import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import SideNav from "../components/common/SideNav/SideNav";
import Button from "../components/common/Button/Button";
import Input from "../components/common/Input";
import palette from "../libs/styles/palette";
import PostCode from "../components/common/management/PostCode";
import { profileApi } from "../apis/axios";
import flex from "../libs/styles/utilFlex";
import useUser from "../hooks/useUser";

interface ProfileEditForm {
  userId?: string;
  userName: string;
  address?: string;
  addressDetail?: string;
  userCompanyTelNumber: string;
  userPhoneNumber?: string;
  userCompanyName: string;
  userBusinessLocation: string;
  userProfileImg: FileList;
  userBusinessLicense: FileList;
}

function ProfileEdit() {
  const { user } = useUser();
  const navigate = useNavigate();
  const { mutate, isError, error } = useMutation(
    async (formData: FormData) => {
      await profileApi.post(formData);
    },
    {
      onSuccess: () => {
        alert("정보를 수정하였습니다.");
        navigate("/profileEdit");
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const { register, watch, handleSubmit, setValue } = useForm<ProfileEditForm>({
    mode: "onChange",
  });

  //image
  const [profileImgPreview, setProfileImgPreview] = useState("");
  const [licensePreview, setLicensePreview] = useState("");
  const userProfileImg = watch("userProfileImg");
  const userBusinessLicense = watch("userBusinessLicense");

  useEffect(() => {
    if (user?.userId) setValue("userId", user?.userId);
    if (user?.userName) setValue("userName", user?.userName);
    if (user?.userPhoneNumber)
      setValue("userPhoneNumber", user?.userPhoneNumber);
    if (user?.userCompanyName)
      setValue("userCompanyName", user?.userCompanyName);
    if (user?.userCompanyTelNumber)
      setValue("userCompanyTelNumber", user?.userCompanyTelNumber);
    if (user?.userBusinessLocation)
      setValue("addressDetail", user?.userBusinessLocation);
  }, [user, setValue]);

  useEffect(() => {
    if (userProfileImg && userProfileImg.length > 0) {
      const userProfileImgFile = userProfileImg[0];
      setProfileImgPreview(URL.createObjectURL(userProfileImgFile));
    }
    if (userBusinessLicense && userBusinessLicense.length > 0) {
      const userBusinessLicenseFile = userBusinessLicense[0];
      setLicensePreview(URL.createObjectURL(userBusinessLicenseFile));
    }
  }, [userProfileImg, userBusinessLicense]);

  const onValid = (data: ProfileEditForm) => {
    const { address, addressDetail } = data;
    const userBusinessLocation = `${address},${addressDetail}`;
    const formData = new FormData();
    formData.append("userId", data?.userId || "");
    formData.append("userName", data?.userName || "");
    formData.append("userCompanyTelNumber", data?.userCompanyTelNumber || "");
    formData.append("userPhoneNumber", data?.userPhoneNumber || "");
    formData.append("userCompanyName", data?.userCompanyName || "");
    formData.append("userBusinessLocation", userBusinessLocation || "");
    if (data?.userProfileImg) {
      for (const file of data.userProfileImg || [""]) {
        formData.append("userProfileImg", file);
      }
    }
    if (data?.userBusinessLicense) {
      for (const file of data.userBusinessLicense || [""]) {
        formData.append("userBusinessLicense", file);
      }
    }
    mutate(formData);
  };
  return (
    <>
      <ProfileEditWrapper>
        <SideNav />
        <ProfileBox>
          <ProfileTitle>프로필 설정</ProfileTitle>
          <ProfileForm
            onSubmit={handleSubmit(onValid)}
            encType="multipart/form-data"
          >
            <div className="contentBox">
              <ProfileSemiTitle>내 홈페이지 주소</ProfileSemiTitle>
              <ProfileContent>
                <div className="MyHomepageAddress">내 홈페이지 주소</div>
              </ProfileContent>
            </div>
            <div className="contentBox">
              <ProfileSemiTitle>아이디</ProfileSemiTitle>
              <ProfileContent>
                <Input
                  register={register("userId")}
                  label="아이디"
                  name="userId"
                  type="text"
                  kind="profile"
                />
              </ProfileContent>
            </div>
            <div className="contentBox">
              <ProfileSemiTitle>중개사 이름</ProfileSemiTitle>
              <ProfileContent>
                <Input
                  register={register("userName", {
                    required: "필수 응답 항목입니다.",
                  })}
                  label="중개사 이름"
                  name="userName"
                  type="text"
                  kind="profile"
                />
              </ProfileContent>
            </div>
            <div className="contentBox">
              <ProfileSemiTitle>사무실 전화번호</ProfileSemiTitle>
              <ProfileContent>
                <Input
                  register={register("userCompanyTelNumber", {
                    required: "필수 응답 항목입니다.",
                  })}
                  label="사무실 전화번호"
                  name="userCompanyTelNumber"
                  type="text"
                  kind="profile"
                />
              </ProfileContent>
            </div>
            <div className="contentBox">
              <ProfileSemiTitle>본인 연락처</ProfileSemiTitle>
              <ProfileContent>
                <Input
                  register={register("userPhoneNumber")}
                  label="본인 연락처"
                  name="userPhoneNumber"
                  type="text"
                  kind="profile"
                  readonly
                />
              </ProfileContent>
            </div>
            <div className="contentBox">
              <ProfileSemiTitle>부동산 이름</ProfileSemiTitle>
              <ProfileContent>
                <Input
                  register={register("userCompanyName", {
                    required: "필수 응답 항목입니다.",
                  })}
                  label="부동산 이름"
                  name="userCompanyName"
                  type="text"
                  kind="profile"
                />
              </ProfileContent>
            </div>
            <div className="contentBox">
              <ProfileSemiTitle>사무실 주소</ProfileSemiTitle>
              <ProfileContent>
                <PostCode register={register} />
              </ProfileContent>
            </div>
            <div className="contentBox">
              <ProfileSemiTitle>프로필 이미지</ProfileSemiTitle>
              <ProfileContent>
                <div className="profileWrap">
                  {profileImgPreview ? (
                    <img
                      src={profileImgPreview}
                      className="profileImgPreview"
                    />
                  ) : (
                    <div className="profileImgPreview" />
                  )}
                  <StLabel htmlFor="userProfileImg">
                    사진 변경
                    <input
                      {...register("userProfileImg", {
                        required: "필수 선택 항목입니다",
                      })}
                      id="userProfileImg"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </StLabel>
                </div>
              </ProfileContent>
            </div>

            <div className="contentBox">
              <ProfileSemiTitle>중개사 자격증</ProfileSemiTitle>
              <ProfileContent>
                {" "}
                <div className="profileWrap">
                  {licensePreview ? (
                    <img src={licensePreview} className="profileImgPreview" />
                  ) : (
                    <div className="profileImgPreview" />
                  )}
                  <StLabel htmlFor="userBusinessLicense">
                    사진 변경
                    <input
                      {...register("userBusinessLicense", {
                        required: "필수 선택 항목입니다",
                      })}
                      id="userBusinessLicense"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </StLabel>
                </div>
              </ProfileContent>
            </div>
            <div className="btnWrapper">
              <Button.Primary type="submit" size="large" fs="18px" fw="400">
                저장하기
              </Button.Primary>
            </div>
          </ProfileForm>
        </ProfileBox>
      </ProfileEditWrapper>
    </>
  );
}
export default ProfileEdit;

const ProfileEditWrapper = styled.div`
  ${flex({ align: "" })}
  padding-top: 30px;
  height: 100%;
  width: 1300px;
  min-width: 700px;
`;

const ProfileBox = styled.div`
  ${flex({ direction: "column", justify: "" })}
  padding: 50px;
  width: 100%;
  .contentBox {
    width: 100%;
    display: flex;
    gap: 20px;
    border-bottom: 1px solid ${palette.gray[0]};
  }
`;
const ProfileTitle = styled.div`
  width: 100%;
  padding: 0 20px 10px 0;
  font-weight: 700;
  font-size: 24px;
  border-bottom: 3px solid black;
`;

const ProfileForm = styled.form`
  width: 100%;
  .btnWrapper {
    ${flex({})}
    margin-top:15px;
  }
`;

const ProfileSemiTitle = styled.div`
  ${flex({ justify: "" })}
  width: 150px;
  padding: 20px 20px 20px 0;
  font-weight: 350;
  font-size: 13px;
`;

const ProfileContent = styled.div`
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
`;
const StLabel = styled.label`
  width: 100px;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }
  &:focus-within {
    ring-width: 2px;
    ring-offset-width: 2px;
    ring-offset-color: #ffffff;
    ring-color: #f97316;
  }
`;
