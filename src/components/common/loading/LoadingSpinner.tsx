import styled from "styled-components";

function LoadingSpinner() {
  return (
    <StLoadingSpinner.Wrapper>
      <StLoadingSpinner.Text>잠시만 기다려 주세요</StLoadingSpinner.Text>
    </StLoadingSpinner.Wrapper>
  );
}

export default LoadingSpinner;

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
  Text: styled.div`
    text-align: center;
    margin-top: 10px;
  `,
};
