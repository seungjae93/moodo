import styled from "styled-components";
import useUser from "../../../hooks/useUser";

function Avatar() {
  const { user } = useUser();
  return <ImageWrapper src={user?.userProfileImgUrl} alt="avatar" />;
}

export default Avatar;

const ImageWrapper = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 100%;
`;
