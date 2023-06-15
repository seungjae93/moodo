import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flex from "../libs/styles/utilFlex";
import Background from "../assets/BackGround.svg";
import SocialLogo from "../assets/SocialLogo.svg";
import Group441 from "../assets/Group441.svg";
import Group1 from "../assets/Group1.svg";
import Group2 from "../assets/Group2.svg";
import Group3 from "../assets/Group3.svg";
import Group4 from "../assets/Group4.svg";
import Footer from "../components/common/Footer/Footer";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <StHome.Wrapper>
        <StHome.ContentWrapper>
          <StHome.Background>
            <Slider {...settings}>
              {/* <StHome.BackgroundContentBox> */}
              <StHome.CarouselImage src={SocialLogo} />
              <StHome.Content>
                홈페이지 완성은
                <br />
                단 2분
                <br />
                비용은 줄이고
                <br />
                지속적인 업데이트와
                <br />
                유지보수를 약속하겠습니다.
              </StHome.Content>
              {/* </StHome.BackgroundContentBox> */}
              {/* <StHome.BackgroundContentBox> */}
              <StHome.CarouselImage src={SocialLogo} />
              <StHome.Content>
                홈페이지 완성은
                <br />
                단 2분
                <br />
                비용은 줄이고
                <br />
                지속적인 업데이트와
                <br />
                유지보수를 약속하겠습니다.
              </StHome.Content>
              {/* </StHome.BackgroundContentBox> */}
            </Slider>
          </StHome.Background>
          <StHome.MainImage src={Group1} />
          <StHome.MainImage src={Group2} />
          <StHome.MainImage src={Group3} />
          <StHome.MainImage src={Group4} />
        </StHome.ContentWrapper>
        <Footer />
      </StHome.Wrapper>
    </>
  );
}

export default Home;

const StHome = {
  Wrapper: styled.div`
    ${flex({ justify: "", direction: "column", gap: "50px" })}
    padding-top: 40px;
    height: 250vh;
  `,
  ContentWrapper: styled.div`
    ${flex({ direction: "column", gap: "50px" })}
    max-width: 1920px;
    margin: auto;
  `,
  Background: styled.div`
    margin-top: 50px;
    width: 1800px;
    height: 769px;
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
  `,
  BackgroundContentBox: styled.div`
    ${flex({ gap: "50px" })}
  `,
  CarouselImage: styled.img`
    width: 710px;
    height: 100%;
  `,
  Content: styled.div`
    font-size: 35px;
  `,
  MainImage: styled.img`
    width: 1080px;
    height: 600px;
  `,
};
