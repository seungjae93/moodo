import styled from "styled-components";
import flex from "./utilFlex";

import Background from "../../assets/BackGround.svg";

interface PositionProps {
  position: number;
}

export const StHome = {
  Wrapper: styled.div`
    ${flex({ justify: "", direction: "column", gap: "50px" })}
    padding-top: 40px;
    height: 100vh;
    width: 1580px;
    min-width: 1080px;
    margin: auto;
  `,
  ContentWrapper: styled.div`
    ${flex({ justify: "", direction: "column", gap: "150px" })}
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
  NaverBlogImg1: styled.img<PositionProps>`
    margin-left: 150px;
    width: 650px;
    height: 600px;
    position: ${(props) => (props.position > 700 ? "static" : "relative")};
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    transform: ${(props) =>
      props.position > 700 ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${(props) => (props.position > 700 ? 1 : 0)};
  `,
  NaverContent1: styled.div<PositionProps>`
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
    position: ${(props) => (props.position > 700 ? "static" : "relative")};
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    transform: ${(props) =>
      props.position > 700 ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${(props) => (props.position > 700 ? 1 : 0)};
  `,
  NaverBlogImg2: styled.img<PositionProps>`
    margin-left: 50px;
    width: 650px;
    height: 600px;
    position: ${(props) => (props.position > 1500 ? "static" : "relative")};
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    transform: ${(props) =>
      props.position > 1500 ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${(props) => (props.position > 1500 ? 1 : 0)};
  `,
  NaverContent2: styled.div<PositionProps>`
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
    position: ${(props) => (props.position > 1500 ? "static" : "relative")};
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    transform: ${(props) =>
      props.position > 1500 ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${(props) => (props.position > 1500 ? 1 : 0)};
  `,
  InstagramImg1: styled.img<PositionProps>`
    margin-left: 50px;
    width: 650px;
    height: 600px;
    position: ${(props) => (props.position > 2400 ? "static" : "relative")};
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    transform: ${(props) =>
      props.position > 2400 ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${(props) => (props.position > 2400 ? 1 : 0)};
  `,
  InstagramContent1: styled.div<PositionProps>`
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
    position: ${(props) => (props.position > 2400 ? "static" : "relative")};
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    transform: ${(props) =>
      props.position > 2400 ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${(props) => (props.position > 2400 ? 1 : 0)};
  `,
  InstagramImg2: styled.img<PositionProps>`
    margin-left: 50px;
    width: 650px;
    height: 600px;
    position: ${(props) => (props.position > 3000 ? "static" : "relative")};
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    transform: ${(props) =>
      props.position > 3000 ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${(props) => (props.position > 3000 ? 1 : 0)};
  `,
  InstagramContent2: styled.div<PositionProps>`
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
    position: ${(props) => (props.position > 3000 ? "static" : "relative")};
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    transform: ${(props) =>
      props.position > 3000 ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${(props) => (props.position > 3000 ? 1 : 0)};
  `,
  YoutubeImg: styled.img<PositionProps>`
    margin-left: 50px;
    margin-bottom: 150px;
    width: 650px;
    height: 600px;
    position: ${(props) => (props.position > 4200 ? "static" : "relative")};
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    transform: ${(props) =>
      props.position > 4200 ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${(props) => (props.position > 4200 ? 1 : 0)};
  `,

  YoutubeContent: styled.div<PositionProps>`
    ${flex({ align: "", direction: "column" })}
    width: 700px;
    height: 600px;
    padding-left: 100px;
    padding-bottom: 150px;
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
    position: ${(props) => (props.position > 4200 ? "static" : "relative")};
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    transform: ${(props) =>
      props.position > 4200 ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${(props) => (props.position > 4200 ? 1 : 0)};
  `,
};
