import styled from "styled-components";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import flex from "../../../libs/styles/utilFlex";
import palette from "../../../libs/styles/palette";
import { estateApi } from "../../../apis/axios";

interface ImageData {
  imgOfPropertyId: number;
  estateId: string;
  imgOfUrl: string;
  imgIndex: number;
}
interface EstateListData {
  estateId: string;
  typeOfProperty: string;
  addressOfProperty: string;
  transactionType: string;
  deposit: string;
  monthly: string;
  price: string;
  exclusiveArea: string;
  numOfRoom: string;
  numOfBath: string;
  imgs: ImageData[];
}
interface ManageCardProps {
  estate: EstateListData;
}

function ManageCard({ estate }: ManageCardProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    estateId,
    typeOfProperty,
    addressOfProperty,
    transactionType,
    deposit,
    monthly,
    price,
    exclusiveArea,
    numOfRoom,
    numOfBath,
    imgs,
  } = estate;

  const openNewWindow = () => {
    window.open(`http://localhost:3000/realEstateManage/${estateId}`, "_blank");
  };

  const { mutate: postDeleteMutate } = useMutation({
    mutationFn: () => estateApi.delete(estateId),
    onSuccess: () => {
      alert("매물이 삭제되었습니다!");
      queryClient.invalidateQueries(["estateList"]);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const postDeleteHandler = () => {
    postDeleteMutate();
  };
  const postUpdateHandler = () => {
    navigate(`/update/${estateId}`);
  };
  return (
    <StManageCard.Wrapper>
      <StManageCard.Image src={imgs[0]?.imgOfUrl} onClick={openNewWindow} />
      <StManageCard.ContentBox onClick={openNewWindow}>
        <StManageCard.Title>{typeOfProperty}</StManageCard.Title>
        <StManageCard.Content style={{ color: palette.cyan[5] }}>
          {transactionType === "월세"
            ? "월세"
            : transactionType === "매매"
            ? "매매"
            : transactionType === "전세"
            ? "전세"
            : null}
        </StManageCard.Content>
        <StManageCard.Content>
          {transactionType === "월세"
            ? `${deposit}만원 / ${monthly}만원`
            : transactionType === "매매"
            ? `매매가 ${price}억`
            : transactionType === "전세"
            ? `${deposit}억`
            : null}
        </StManageCard.Content>
        <StManageCard.Content>{addressOfProperty}</StManageCard.Content>
        <StManageCard.Content>
          {typeOfProperty === "상가/사무실" || typeOfProperty === "건물"
            ? `${exclusiveArea}m²`
            : `방 ${numOfRoom}개 | 화장실 ${numOfBath}개 | ${exclusiveArea}m² `}
        </StManageCard.Content>
      </StManageCard.ContentBox>
      <StManageCard.ButtonBox>
        <Button.Primary
          size="medium"
          fw="400"
          fs="20px"
          onClick={postUpdateHandler}
        >
          수정
        </Button.Primary>
        <Button.Negative
          outlined
          borderColor="black"
          size="medium"
          fw="400"
          fs="20px"
          onClick={postDeleteHandler}
        >
          삭제
        </Button.Negative>
      </StManageCard.ButtonBox>
    </StManageCard.Wrapper>
  );
}

export default ManageCard;

const StManageCard = {
  Wrapper: styled.div`
    ${flex({ justify: "space-between", gap: "10px" })}
    cursor: pointer;
    background-color: white;
    width: 860px;
    height: 180px;
    border: 0px solid black;
    border-radius: 10px;
    box-shadow: 0px 1px 5px 1px #dddddd;
    text-decoration-line: none;
    color: black;
    overflow: hidden;
    :hover {
      box-shadow: 0px 3px 5px 1px #181818;
      transition: all 0.2s;
    }
  `,
  Image: styled.img`
    width: 300px;
    height: 100%;
  `,
  ContentBox: styled.div`
    width: 350px;
    margin: 10px;
  `,
  Title: styled.div`
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    margin-bottom: 10px;
  `,
  Content: styled.div`
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    margin-bottom: 10px;
  `,
  ButtonBox: styled.div`
    ${flex({
      direction: "column",
      align: "flex-end",
      gap: "5px",
    })}
    margin-right:10px;
  `,
};
