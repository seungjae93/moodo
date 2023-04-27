import styled from "styled-components";
import SideNav from "../components/common/SideNav/SideNav";
import Button from "../components/common/Button/Button";

function ProfileEdit() {
  return (
    <>
      <ProfileEditWrapper>
        <SideNav />
        <ProfileItem>
          <ProfileTitle>프로필 설정</ProfileTitle>
          <ProfileContent>내 홈페이지 주소</ProfileContent>
          <ProfileContent>중개사 이름</ProfileContent>
          <ProfileContent>사무실 전화번호</ProfileContent>
          <ProfileContent>본인 연락처</ProfileContent>
          <ProfileContent>사무실 주소</ProfileContent>
          <ProfileContent>프로필 이미지</ProfileContent>
          <ProfileContent>중개사 자격증</ProfileContent>
          <ButtonWithMarginTop type="submit" cyan fullWidth>
            저장하기
          </ButtonWithMarginTop>
        </ProfileItem>
      </ProfileEditWrapper>
    </>
  );
}
export default ProfileEdit;

const ProfileEditWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  height: 100%;
  min-width: 1000px;
`;

const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 100%;
`;

const ProfileTitle = styled.div`
  width: 100%;
  padding: 0 20px 20px 0;
  font-weight: 700;
  font-size: 24px;
  border-bottom: 3px solid black;
`;

const ProfileContent = styled.div`
  width: 100%;
  padding: 0 20px 20px 0;
  padding-top: 20px;
  font-weight: 350;
  font-size: 13px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
`;
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;
