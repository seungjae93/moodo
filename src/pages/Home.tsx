import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { throttle } from "lodash";

import NaverBlog from "../assets/NaverBlog.svg";
import Youtube from "../assets/Youtube.svg";
import Instagram from "../assets/Instagram.svg";
import SocialLogo from "../assets/SocialLogo.svg";
import MapImage from "../assets/MapImage.svg";
import NaverBlogExample1 from "../assets/NaverBlogExample1.svg";
import NaverBlogExample2 from "../assets/NaverBlogExample2.svg";
import InstagramExample1 from "../assets/InstagramExample1.svg";
import InstagramExample2 from "../assets/InstagramExample2.svg";
import YoutubeExample from "../assets/YoutubeExample.svg";
import Footer from "../components/common/Footer/Footer";
import { StHome } from "../libs/styles/StHome";

function Home() {
  const [position, setPosition] = useState<number>(0);
  const scroll = throttle(() => {
    setPosition(window.scrollY);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
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

          <img
            src={NaverBlog}
            style={{
              position: position > 300 ? "static" : "relative",
              transition:
                "transform 0.4s ease-in-out ,opacity 0.4s ease-in-out",
              transform: position > 300 ? "translateY(0)" : "translateY(-50px)",
              opacity: position > 300 ? 1 : 0,
            }}
          />

          <StHome.MainContentContainer>
            <StHome.NaverBlogImg1 src={NaverBlogExample1} position={position} />
            <StHome.NaverContent1 position={position}>
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
            </StHome.NaverContent1>
          </StHome.MainContentContainer>
          <StHome.MainContentContainer>
            <StHome.NaverBlogImg2 src={NaverBlogExample2} position={position} />
            <StHome.NaverContent2 position={position}>
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
            </StHome.NaverContent2>
          </StHome.MainContentContainer>
          <img
            src={Instagram}
            style={{
              position: position > 2100 ? "static" : "relative",
              transition:
                "transform 0.4s ease-in-out ,opacity 0.4s ease-in-out",
              transform:
                position > 2100 ? "translateY(0)" : "translateY(-50px)",
              opacity: position > 2100 ? 1 : 0,
            }}
          />
          <StHome.MainContentContainer>
            <StHome.InstagramImg1 src={InstagramExample1} position={position} />
            <StHome.InstagramContent1 position={position}>
              <h2>인스타그램 프로필에</h2>
              <h2>홈페이지 링크를 달아보세요!</h2>
              <p style={{ marginTop: "30px" }}>
                인스타그램에서 다 보여주지 못한 매물을
              </p>
              <p>홈페이지를 통해서 고객들에게 보여주세요!</p>
              <p style={{ marginTop: "30px" }}>
                인스타그램의 마케팅 효율이 올라요!
              </p>
            </StHome.InstagramContent1>
          </StHome.MainContentContainer>
          <StHome.MainContentContainer>
            <StHome.InstagramImg2 src={InstagramExample2} position={position} />
            <StHome.InstagramContent2 position={position}>
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
            </StHome.InstagramContent2>
          </StHome.MainContentContainer>
          <img
            src={Youtube}
            style={{
              position: position > 3900 ? "static" : "relative",
              transition:
                "transform 0.4s ease-in-out ,opacity 0.4s ease-in-out",
              transform:
                position > 3900 ? "translateY(0)" : "translateY(-50px)",
              opacity: position > 3900 ? 1 : 0,
            }}
          />
          <StHome.MainContentContainer>
            <StHome.YoutubeImg
              className="small-content"
              src={YoutubeExample}
              position={position}
            />
            <StHome.YoutubeContent position={position}>
              {" "}
              <h2>유튜브 매물 영상에</h2>
              <h2>홈페이지 링크를 달아보세요</h2>
              <p style={{ marginTop: "30px" }}>
                요즘 마케팅 대세는 유튜브입니다.
              </p>
              <p>유튜브로 매물 영상을 보는 고객님들을 홈페이지로 유도하세요!</p>
            </StHome.YoutubeContent>
          </StHome.MainContentContainer>
        </StHome.ContentWrapper>
        <Footer />
      </StHome.Wrapper>
    </>
  );
}

export default Home;
