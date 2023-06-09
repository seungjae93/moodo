import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import SideNav from "../components/common/SideNav/SideNav";
import Button from "../components/common/Button/Button";
import Input from "../components/common/Input";
import PageStartPostCode from "../components/common/EstateListing/PageStartPostCode";
import PostCode from "../components/common/EstateListing/PostCode";
import { profileApi } from "../apis/axios";
import useUser from "../hooks/useUser";
import { StRealEstate } from "../libs/styles/StRealEstate";
import { ProfileEditForm } from "../typings/detail.type";

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
    if (user?.userPhoneNumber) {
      const phoneNumber = user?.userPhoneNumber;
      const formattedPhoneNumber = phoneNumber.replace(
        /(\d{3})(\d{4})(\d{4})/,
        "$1-$2-$3"
      );
      setValue("userPhoneNumber", formattedPhoneNumber);
    }
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
    formData.append("startLocation", data?.startLocation || "");
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
      <StRealEstate.Wrapper>
        <SideNav />
        <StRealEstate.ProfileBox>
          <StRealEstate.Title>프로필 설정</StRealEstate.Title>
          <StRealEstate.Form
            onSubmit={handleSubmit(onValid)}
            encType="multipart/form-data"
          >
            <div className="contentBox">
              <StRealEstate.ProfileSemiTitle>
                내 홈페이지 주소
              </StRealEstate.ProfileSemiTitle>
              <StRealEstate.ProfileContent>
                <div className="MyHomepageAddress">내 홈페이지 주소</div>
              </StRealEstate.ProfileContent>
            </div>
            <div className="contentBox">
              <StRealEstate.ProfileSemiTitle>
                아이디
              </StRealEstate.ProfileSemiTitle>
              <StRealEstate.ProfileContent>
                <Input
                  register={register("userId")}
                  label="아이디"
                  name="userId"
                  type="text"
                  kind="profile"
                />
              </StRealEstate.ProfileContent>
            </div>
            <div className="contentBox">
              <StRealEstate.ProfileSemiTitle>
                중개사 이름
              </StRealEstate.ProfileSemiTitle>
              <StRealEstate.ProfileContent>
                <Input
                  register={register("userName", {
                    required: "필수 응답 항목입니다.",
                  })}
                  label="중개사 이름"
                  name="userName"
                  type="text"
                  kind="profile"
                />
              </StRealEstate.ProfileContent>
            </div>
            <div className="contentBox">
              <StRealEstate.ProfileSemiTitle>
                사무실 전화번호
              </StRealEstate.ProfileSemiTitle>
              <StRealEstate.ProfileContent>
                <Input
                  register={register("userCompanyTelNumber", {
                    required: "필수 응답 항목입니다.",
                  })}
                  label="사무실 전화번호"
                  name="userCompanyTelNumber"
                  type="text"
                  kind="profile"
                />
              </StRealEstate.ProfileContent>
            </div>
            <div className="contentBox">
              <StRealEstate.ProfileSemiTitle>
                본인 연락처
              </StRealEstate.ProfileSemiTitle>
              <StRealEstate.ProfileContent>
                <Input
                  register={register("userPhoneNumber")}
                  label="본인 연락처"
                  name="userPhoneNumber"
                  type="text"
                  kind="profile"
                  readonly
                />
              </StRealEstate.ProfileContent>
            </div>
            <div className="contentBox">
              <StRealEstate.ProfileSemiTitle>
                부동산 이름
              </StRealEstate.ProfileSemiTitle>
              <StRealEstate.ProfileContent>
                <Input
                  register={register("userCompanyName", {
                    required: "필수 응답 항목입니다.",
                  })}
                  label="부동산 이름"
                  name="userCompanyName"
                  type="text"
                  kind="profile"
                />
              </StRealEstate.ProfileContent>
            </div>
            <div className="contentBox">
              <StRealEstate.ProfileSemiTitle>
                홈페이지 시작위치
              </StRealEstate.ProfileSemiTitle>
              <StRealEstate.ProfileContent>
                <PageStartPostCode register={register} />
              </StRealEstate.ProfileContent>
            </div>
            <div className="contentBox">
              <StRealEstate.ProfileSemiTitle>
                사무실 주소
              </StRealEstate.ProfileSemiTitle>
              <StRealEstate.ProfileContent>
                <PostCode register={register} />
              </StRealEstate.ProfileContent>
            </div>
            <div className="contentBox">
              <StRealEstate.ProfileSemiTitle>
                프로필 이미지
              </StRealEstate.ProfileSemiTitle>
              <StRealEstate.ProfileContent>
                <div className="profileWrap">
                  {profileImgPreview ? (
                    <img
                      src={profileImgPreview}
                      className="profileImgPreview"
                    />
                  ) : (
                    <div className="profileImgPreview" />
                  )}
                  <StRealEstate.ProfileLabel htmlFor="userProfileImg">
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
                  </StRealEstate.ProfileLabel>
                </div>
              </StRealEstate.ProfileContent>
            </div>

            <div className="contentBox">
              <StRealEstate.ProfileSemiTitle>
                중개사 자격증
              </StRealEstate.ProfileSemiTitle>
              <StRealEstate.ProfileContent>
                {" "}
                <div className="profileWrap">
                  {licensePreview ? (
                    <img src={licensePreview} className="profileImgPreview" />
                  ) : (
                    <div className="profileImgPreview" />
                  )}
                  <StRealEstate.ProfileLabel htmlFor="userBusinessLicense">
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
                  </StRealEstate.ProfileLabel>
                </div>
              </StRealEstate.ProfileContent>
            </div>
            <div className="btnWrapper">
              <Button.Primary type="submit" size="large" fs="18px" fw="400">
                저장하기
              </Button.Primary>
            </div>
          </StRealEstate.Form>
        </StRealEstate.ProfileBox>
      </StRealEstate.Wrapper>
    </>
  );
}
export default ProfileEdit;
