import styled from "styled-components";

interface AvatarProps {
  image: string;
}

function Avatar({ image }: AvatarProps) {
  return <ImageWrapper src={image} alt="avatar" />;
}

export default Avatar;

const ImageWrapper = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 100%;
`;
