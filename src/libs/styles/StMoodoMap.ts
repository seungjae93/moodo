import styled from "styled-components";
import flex from "./utilFlex";

export const StMoodoMap = {
  Wrapper: styled.div`
    ${flex({ justify: "", align: "", direction: "column" })}
    width:100%;
    height: calc(100vh - 29px);
    overflow: hidden;
    overflow-y: hidden;
    @media screen and (max-width: 930px) {
      width: 100%;
    }
  `,
  searchBox: styled.div`
    ${flex({ justify: "", gap: "10px" })}
    padding: 60px 0px 20px 0px;
    width: 100%;
    height: 90px;
    z-index: 10;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    @media screen and (max-width: 930px) {
      padding: 25px 0px 25px 0px;
      width: 300px;
      height: 40px;
      z-index: 1000;
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      top: 70px;
      background-color: white;
      border: none;
    }
  `,
  ContentWrapper: styled.div`
    ${flex({ justify: "" })}
    width: 100%;
    height: 100%;
    @media screen and (max-width: 930px) {
      ${flex({
        direction: "column",
        gap: "",
      })}
    }
  `,
  Map: styled.div`
    width: 75%;
    height: 100%;
    @media screen and (max-width: 930px) {
      width: 100%;
      height: 100%;
    }
  `,
  EstateCard: styled.div`
    ${flex({ direction: "column", justify: "flex-start" })}
    width: 500px;
    height: 100%;

    @media screen and (max-width: 930px) {
      transition: height 0.6s ease;
      width: 100%;
      height: ${({ expanded }: { expanded: boolean }) =>
        expanded ? "60%" : "70px"};
      bottom: 0px;
      z-index: 50;
      position: absolute;
      background-color: white;
      overflow-y: hidden;
      overflow-x: hidden;
    }
  `,

  CardBox: styled.div`
    ${flex({ align: "flex-start", gap: "12px" })}
    padding-bottom:10px;
    margin: 30px 10px 95px 10px;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: #ccc;
    }
    @media screen and (max-width: 930px) {
      margin: 30px 10px 0px 10px;
    }
  `,
  FilterBox: styled.div`
    ${flex({ direction: "column", align: "", justify: "" })}
    padding: 10px;
    position: absolute;
    border: 1px solid #eee;
    background-color: #fff;
    width: 340px;
    height: 580px;
    border-radius: 5px;
    font-size: 15px;
    z-index: 10;
    top: 50px;
  `,
};
