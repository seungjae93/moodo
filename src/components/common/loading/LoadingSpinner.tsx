import styled, { keyframes } from "styled-components";

function LoadingSpinner() {
  return (
    <StLoadingSpinner.Wrapper>
      <StLoadingSpinner.Spinner />
      <StLoadingSpinner.Text>잠시만 기다려 주세요</StLoadingSpinner.Text>
    </StLoadingSpinner.Wrapper>
  );
}

export default LoadingSpinner;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StLoadingSpinner = {
  Wrapper: styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffffb7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Spinner: styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #000000;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spinAnimation} 1s linear infinite;
  `,
  Text: styled.div`
    text-align: center;
    margin-top: 10px;
  `,
};
