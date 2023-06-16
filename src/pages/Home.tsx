import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flex from "../libs/styles/utilFlex";
import NaverBlog from "../assets/NaverBlog.svg";
import Youtube from "../assets/Youtube.svg";
import Instagram from "../assets/Instagram.svg";
import Background from "../assets/BackGround.svg";
import SocialLogo from "../assets/SocialLogo.svg";
import MapImage from "../assets/MapImage.svg";
import NaverBlogExample1 from "../assets/NaverBlogExample1.svg";
import NaverBlogExample2 from "../assets/NaverBlogExample2.svg";
import InstagramExample1 from "../assets/InstagramExample1.svg";
import InstagramExample2 from "../assets/InstagramExample2.svg";
import YoutubeExample from "../assets/YoutubeExample.svg";
import Footer from "../components/common/Footer/Footer";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <>
      <StHome.Wrapper>
        <StHome.ContentWrapper>
          <StHome.Background>
            <Slider {...settings}>
              <StHome.CarouselImage src={MapImage} />
              <StHome.CarouselContent>
                <h2>홈페이지 완성은</h2>
                <h2 className="largeText">단 2분</h2>
                <p>비용은 줄이고</p>
                <p>지속적인 업데이트와</p>
                <p>유지보수를 약속하겠습니다.</p>
              </StHome.CarouselContent>

              <StHome.CarouselImage src={SocialLogo} />
              <StHome.CarouselContent>
                <h2>홈페이지를 이용해서</h2>
                <h2 className="largeText">마케팅 효율을 높이세요</h2>
                <p>
                  <span>블로그, 인스타그램, 유튜브</span>로
                </p>
                <p>
                  유입되는 고객들을 <span>홈페이지로 유도해</span>
                </p>
                <p>
                  더 많은 매물을 보여주고 <span>마케팅 효율을 높이세요!</span>
                </p>
              </StHome.CarouselContent>
            </Slider>
          </StHome.Background>
          <img src={NaverBlog} />
          <StHome.MainContentContainer>
            <StHome.MainImage src={NaverBlogExample1} />
            <StHome.MainContent>
              <h2>블로그를 200%</h2>
              <h2>활용해보세요!</h2>
              <p style={{ marginTop: "30px" }}>
                부동산 마케팅의 기본은 블로그!
              </p>
              <p>블로그의 마케팅 효율성을 높이세요.</p>
              <p style={{ marginTop: "30px" }}>
                블로그로 유입되는 고객님을 홈페이지로 유입해
              </p>
              <p>더 많은 매물을 보여주고, 지역의 전문성을 보여주세요!</p>
            </StHome.MainContent>
          </StHome.MainContentContainer>
          <StHome.MainContentContainer>
            <StHome.MainImage src={NaverBlogExample2} />
            <StHome.MainContent>
              <h2>정성스럽게 작성한</h2>
              <h2>포스팅에 홈페이지 링크를!</h2>
              <p style={{ marginTop: "30px" }}>포스팅에 홈페이지 링크를 넣어</p>
              <p>고객님들이 다른 블로그로 빠져나가지 못하도록 하세요</p>
              <p style={{ marginTop: "30px" }}>
                매물문의 전화 <span>증가!</span>
              </p>
              <p>
                마케팅 효율 <span>UP!</span>
              </p>
            </StHome.MainContent>
          </StHome.MainContentContainer>
          <img src={Instagram} />
          <StHome.MainContentContainer>
            <StHome.MainImage src={InstagramExample1} />
            <StHome.MainContent>
              <h2>인스타그램 프로필에</h2>
              <h2>홈페이지 링크를 달아보세요!</h2>
              <p style={{ marginTop: "30px" }}>
                인스타그램에서 다 보여주지 못한 매물을
              </p>
              <p>홈페이지를 통해서 고객들에게 보여주세요!</p>
              <p style={{ marginTop: "30px" }}>
                인스타그램의 마케팅 효율이 올라요!
              </p>
            </StHome.MainContent>
          </StHome.MainContentContainer>
          <StHome.MainContentContainer>
            <StHome.MainImage src={InstagramExample2} />
            <StHome.MainContent>
              {" "}
              <h2>인스타그램의</h2>
              <h2>매물 게시글에 링크를 달아보세요!</h2>
              <p style={{ marginTop: "30px" }}>
                인스타그램에서 다 보여주지 못한 매물을
              </p>
              <p>홈페이지를 통해서 고객들에게 보여주세요!</p>
              <p style={{ marginTop: "30px" }}>
                인스타그램의 마케팅 효율이 올라요!
              </p>
            </StHome.MainContent>
          </StHome.MainContentContainer>
          <img src={Youtube} />
          <StHome.MainContentContainer>
            <StHome.MainImage className="small-content" src={YoutubeExample} />
            <StHome.MainContent>
              {" "}
              <h2>유튜브 매물 영상에</h2>
              <h2>홈페이지 링크를 달아보세요</h2>
              <p style={{ marginTop: "30px" }}>
                요즘 마케팅 대세는 유튜브입니다.
              </p>
              <p>유튜브로 매물 영상을 보는 고객님들을 홈페이지로 유도하세요!</p>
            </StHome.MainContent>
          </StHome.MainContentContainer>
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
    height: 100vh;
    width: 1580px;
    min-width: 1080px;
    margin: auto;
  `,
  ContentWrapper: styled.div`
    ${flex({ justify: "", direction: "column", gap: "50px" })}
    width: 100%;
  `,
  Background: styled.div`
    margin-top: 50px;
    width: 100%;
    height: 700px;
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
  `,

  CarouselImage: styled.img`
    margin-left: 100px;
    margin-top: 80px;
    width: 650px;
    height: 500px;
  `,
  CarouselContent: styled.div`
    ${flex({ gap: "10px" })}
    padding: 170px 0px 0px 120px;
    h2 {
      font-size: 40px;
      margin-bottom: 20px;
      color: black;
    }
    p {
      font-size: 20px;
      margin-bottom: 10px;
      color: gray;
    }
    span {
      font-weight: bold;
    }
    .largeText {
      font-weight: bold;
      color: black;
    }
  `,
  MainContentContainer: styled.div`
    ${flex({})}
    width: 100%;
    height: 600px;
  `,
  MainImage: styled.img`
    margin-left: 50px;
    width: 650px;
    height: 600px;
  `,
  MainContent: styled.div`
    ${flex({ align: "", direction: "column" })}
    width: 700px;
    height: 600px;
    padding-left: 100px;
    h2 {
      font-size: 38px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: 500;
      color: gray;
    }
    span {
      font-weight: bold;
    }
  `,
};
