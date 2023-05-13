import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const imageGrop = [
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
];
function DetailCarousel() {
  const Settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <StDetailCarousel.RightDiv>
        <CgChevronRight
          style={{
            color: "white",
            width: "30px",
            height: "30px",
          }}
        />
      </StDetailCarousel.RightDiv>
    ),
    prevArrow: (
      <StDetailCarousel.leftDiv>
        <CgChevronLeft
          style={{
            color: "white",
            width: "30px",
            height: "30px",
          }}
        />
      </StDetailCarousel.leftDiv>
    ),
  };
  return (
    <StDetailCarousel.StSlider {...Settings}>
      {imageGrop?.map((el, index) => {
        return (
          <div key={index}>
            <StDetailCarousel.Img alt="img" src={el} />
          </div>
        );
      })}
    </StDetailCarousel.StSlider>
  );
}

export default React.memo(DetailCarousel);

const StDetailCarousel = {
  leftDiv: styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 16px;
    z-index: 99;
  `,
  RightDiv: styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 16px;
    z-index: 99;
  `,
  StSlider: styled(Slider)`
    width: 100%;
    height: 500%;
    .slick-prev::before,
    .slick-next::before {
      opacity: 0;
      display: none;
    }
    .slick-track {
      width: 600px;
      height: 600px;
    }
    .slick-slide div {
      cursor: pointer;
    }
  `,
  Img: styled.img`
    width: 550px;
    height: 400px;
  `,
};
