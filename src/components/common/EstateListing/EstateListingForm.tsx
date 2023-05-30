import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import { AiOutlinePlus } from "react-icons/ai";
import { estateApi } from "../../../apis/axios";
import { StRealEstate } from "../../../libs/styles/StRealEstate";

import SideNav from "../SideNav/SideNav";
import NumberInputGroup from "./NumberInputGroup";
import RadioInput from "./RadioInput";
import TextArea from "../Textarea";
import Button from "../Button/Button";
import PostCode from "./PostCode";
import DragabbleImage from "./DragabbleImage";
import PropertyContent from "./PropertyContent";
import PriceInfo from "./PriceInfo";
import AdditionalInfo from "./AdditionalInfo";
import {
  RealEstateForm,
  EstateListingFormProps,
} from "../../../typings/detail.type";

const typeOfProperties = [
  "원/투룸",
  "주택/빌라",
  "아파트",
  "상가/사무실",
  "건물",
].map((label, index) => ({
  id: `typeOfProperty-${index + 1}`,
  label,
  value: label,
}));

const transactionTypes = ["월세", "전세", "매매"].map((label, index) => ({
  id: `transactionType-${index + 1}`,
  label,
  value: label,
}));

const moveInDate = ["즉시 입주", "날짜 협의", "날짜 설정"].map(
  (label, index) => ({
    id: `moveInDate-${index + 1}`,
    label,
    value: label,
  })
);

const parkingAvailability = ["가능", "불가능"].map((label, index) => ({
  id: `parkingAvailability-${index + 1}`,
  label,
  value: label,
}));

const elevator = ["있음", "없음"].map((label, index) => ({
  id: `elevator-${index + 1}`,
  label,
  value: label,
}));

const pet = ["가능", "불가능"].map((label, index) => ({
  id: `pet-${index + 1}`,
  label,
  value: label,
}));

const options = [
  "가스레인지",
  "인덕션",
  "냉장고",
  "에어컨",
  "전자레인지",
  "TV",
  "옷장",
  "비데",
  "도어락",
].map((label, index) => ({
  id: `options-${index + 1}`,
  label,
  value: label,
}));

//추가 정보
const additionalInfoOptions = [
  {
    title: "주차 여부",
    options: parkingAvailability,
    name: "parking",
  },
  {
    title: "엘리베이터",
    options: elevator,
    name: "elevator",
  },
  {
    title: "반려동물",
    options: pet,
    name: "pet",
  },
];

function EstateListingForm({ estateId, isUpdate }: EstateListingFormProps) {
  const navigate = useNavigate();

  const { mutate } = useMutation(
    async (formData: FormData) => {
      try {
        if (isUpdate) {
          await estateApi.put(formData);
          alert("수정이 완료되었습니다!");
        } else {
          await estateApi.post(formData);
          alert("등록이 완료되었습니다!");
        }
        navigate("/realEstateManage");
      } catch (error) {
        console.error(error);
      }
    },
    {
      onError: (error) => {
        console.error(error);
      },
    }
  );

  //useForm
  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<RealEstateForm>({
    mode: "onChange",
    defaultValues: {
      typeOfProperty: "원/투룸",
      transactionType: "월세",
      deposit: "",
      monthly: "",
      price: "",
      addressDetail: "",
      maintenanceCost: "",
      moveInDate: "즉시 입주",
      supplyArea: "",
      dong: "",
      exclusiveArea: "",
      numOfRoom: "",
      numOfBath: "",
      numOfFloor: "",
      floor: "",
      parking: "가능",
      elevator: "있음",
      pet: "가능",
      options: "가스레인지",
      lowestFloor: "",
      highestFloor: "",
      detail: "",
      moveInDateInput: "",
      rightMoney: "",
      mainCategory: "",
      subCategory: "",
    },
  });

  const typeOfPropertyWatch = watch("typeOfProperty");
  const transactionTypeWatch = watch("transactionType");
  const moveInDateWatch = watch("moveInDate");

  const isResidence = ["원/투룸", "주택/빌라", "아파트"].includes(
    typeOfPropertyWatch
  );
  console.log(watch());
  //imagesPreview
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const images = watch("images");
  useEffect(() => {
    if (images && images.length > 0) {
      const previewArray = [...images]
        .slice(0, 8)
        .map((file) => URL.createObjectURL(file));
      setImagesPreview(previewArray);
    } else {
      setImagesPreview([]);
    }
  }, [images]);

  //images dnd
  const onDragEnd = useCallback(({ destination, source }: DropResult) => {
    // 드래그 앤 드롭 종료 시 실행되는 콜백 함수
    if (!destination) {
      return;
    }
    const updatedImagesPreview = [...imagesPreview];
    const [draggedImage] = updatedImagesPreview.splice(source.index, 1);
    updatedImagesPreview.splice(destination.index, 0, draggedImage);
    setImagesPreview(updatedImagesPreview);
  }, []);

  //handleSubmit
  const onValid = useCallback((data: RealEstateForm) => {
    const { address, addressDetail } = data;
    const addressOfProperty = `${address}, ${addressDetail}`;
    const formData = new FormData();
    if (estateId) {
      formData.append("estateId", estateId);
    }
    formData.append("addressOfProperty", addressOfProperty || "");
    formData.append("typeOfProperty", data?.typeOfProperty || "");
    formData.append("addressOfJibun", data?.addressOfJibun || "");
    formData.append("transactionType", data?.transactionType || "");
    formData.append("deposit", data?.deposit || "");
    formData.append("monthly", data?.monthly || "");
    formData.append("price", data?.price || "");
    formData.append("maintenanceCost", data?.maintenanceCost || "");
    formData.append("moveInDateInput", data?.moveInDateInput || "");
    formData.append("moveInDate", data?.moveInDate || "");
    formData.append("supplyArea", data?.supplyArea || "");
    formData.append("exclusiveArea", data?.exclusiveArea || "");
    formData.append("numOfRoom", data?.numOfRoom || "");
    formData.append("numOfBath", data?.numOfBath || "");
    formData.append("dong", data?.dong || "");
    formData.append("lowestFloor", data?.lowestFloor || "");
    formData.append("highestFloor", data?.highestFloor || "");
    formData.append("floor", data?.floor || "");
    formData.append("numOfFloor", data?.numOfFloor || "");
    formData.append("parking", data?.parking || "");
    formData.append("elevator", data?.elevator || "");
    formData.append("pet", data?.pet || "");
    formData.append("options", data?.options || "");
    formData.append("rightMoney", data?.rightMoney || "");
    // formData.append("mainCategory", data?.mainCategory || "");
    // formData.append("subCategory", data?.subCategory || "");
    // 이미지 파일을 formData에 추가
    if (data?.images) {
      for (const file of data.images) {
        formData.append("images", file);
      }
    }

    mutate(formData);
  }, []);
  return (
    <StRealEstate.Wrapper>
      <SideNav />
      <StRealEstate.ListingBox>
        <StRealEstate.Title>매물 등록</StRealEstate.Title>
        <StRealEstate.Form
          onSubmit={handleSubmit(onValid)}
          encType="multipart/form-data"
        >
          <StRealEstate.SemiTitle>매물종류</StRealEstate.SemiTitle>

          <RadioInput
            register={register("typeOfProperty", {
              required: "필수 선택 항목입니다",
            })}
            type="radio"
            options={typeOfProperties}
            name="typeOfProperty"
          />
          <StRealEstate.SemiTitle>매물 위치</StRealEstate.SemiTitle>
          <StRealEstate.Content>
            <div className="contentTitle">주소</div>
            <PostCode register={register} />
          </StRealEstate.Content>
          <StRealEstate.SemiTitle>거래 정보</StRealEstate.SemiTitle>
          <StRealEstate.Content>
            <div className="contentTitle">거래 유형</div>
            <RadioInput
              register={register("transactionType", {
                required: "필수 선택 항목입니다",
              })}
              type="radio"
              options={transactionTypes}
              name="transactionType"
            />
          </StRealEstate.Content>
          <StRealEstate.Content>
            <div className="contentTitle">가격 정보</div>
            {transactionTypeWatch === "월세" && (
              <>
                <PriceInfo type="deposit" label="보증금" register={register} />
                <div className="marginLeft">|</div>
                <PriceInfo type="monthly" label="월세" register={register} />
              </>
            )}
            {transactionTypeWatch === "전세" && (
              <>
                <PriceInfo type="deposit" label="보증금" register={register} />
                <div className="marginLeft">|</div>
              </>
            )}
            {transactionTypeWatch === "매매" && (
              <>
                <PriceInfo type="price" label="금액" register={register} />
                <div className="marginLeft">|</div>
              </>
            )}
          </StRealEstate.Content>
          <StRealEstate.Content>
            <div className="contentTitle">관리비</div>
            <PriceInfo
              type="maintenanceCost"
              label="관리비"
              register={register}
            />
          </StRealEstate.Content>
          {typeOfPropertyWatch === "상가/사무실" && (
            <StRealEstate.Content>
              <div className="contentTitle">권리금</div>
              <PriceInfo type="rightMoney" label="권리금" register={register} />
            </StRealEstate.Content>
          )}

          <StRealEstate.Content>
            <div className="contentTitle">입주가능일</div>
            <RadioInput
              register={register("moveInDate", {
                required: "필수 선택 항목입니다",
              })}
              type="radio"
              options={moveInDate}
              name="moveInDate"
            />
            {moveInDateWatch === "날짜 설정" && (
              <>
                <input
                  type="text"
                  placeholder="yyyy.mm.dd"
                  {...register("moveInDateInput", {
                    pattern: {
                      value: /^\d{4}\.\d{2}\.\d{2}$/,
                      message: "yyyy.mm.dd 형식으로 입력해주세요",
                    },
                  })}
                  style={{
                    width: "150px",
                    height: "30px",
                    fontSize: "16px",
                    fontWeight: "400",
                    textAlign: "center",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0 0.25rem 0.25rem 0",
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  }}
                />
                <span>이후</span>
              </>
            )}
          </StRealEstate.Content>
          <StRealEstate.SemiTitle>매물 정보</StRealEstate.SemiTitle>
          {typeOfPropertyWatch === "원/투룸" && (
            <PropertyContent type="roomVillaApart" register={register} />
          )}
          {typeOfPropertyWatch === "주택/빌라" && (
            <PropertyContent type="roomVillaApart" register={register} />
          )}
          {typeOfPropertyWatch === "아파트" && (
            <>
              <PropertyContent type="roomVillaApart" register={register} />
              <StRealEstate.Content>
                <div className="contentTitle">동</div>
                <NumberInputGroup type="dong" label="동" register={register} />
                <span>동</span>
              </StRealEstate.Content>
            </>
          )}
          {typeOfPropertyWatch === "상가/사무실" && (
            <PropertyContent type="office" register={register} />
          )}
          {typeOfPropertyWatch === "건물" && (
            <PropertyContent type="building" register={register} />
          )}

          {isResidence && (
            <>
              <StRealEstate.SemiTitle>추가 정보</StRealEstate.SemiTitle>
              {additionalInfoOptions?.map((info) => (
                <AdditionalInfo
                  key={info.title}
                  title={info.title}
                  options={info.options}
                  name={info.name}
                  register={register}
                />
              ))}
              <StRealEstate.Content>
                <div className="contentTitle">옵션</div>
                <div className="optionsWrap">
                  <RadioInput
                    register={register("options", {
                      required: "필수 선택 항목입니다",
                    })}
                    kind="checkbox"
                    type="checkbox"
                    options={options}
                    name="options"
                  />
                </div>
              </StRealEstate.Content>
            </>
          )}

          <StRealEstate.SemiTitle>사진 추가</StRealEstate.SemiTitle>
          <StRealEstate.Content>
            <div className="contentTitle">사진</div>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="imageList" direction="horizontal">
                {(provided) => (
                  <div
                    className="photoWrap"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {imagesPreview.length > 0 ? (
                      imagesPreview.map((preview, index) => (
                        <DragabbleImage
                          key={preview}
                          preview={preview}
                          index={index}
                        />
                      ))
                    ) : (
                      <div className="labelWrap">
                        <label htmlFor="picture" className="photoLabel">
                          <AiOutlinePlus className="photoIcon" />
                          <input
                            {...register("images")}
                            id="picture"
                            type="file"
                            multiple
                            accept="image/*"
                            className="photoInput"
                          />
                        </label>
                      </div>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </StRealEstate.Content>
          <div style={{ marginTop: "20px" }}>
            · 첫번째로 등록한 사진이 대표 사진이 되며 대표사진은 변경할 수
            있습니다.
          </div>
          <div style={{ marginTop: "20px" }}>
            · 사진은 최대 8장까지 가능합니다. (jpg, jpeg, png, jfif 확장자만
            등록 가능)
          </div>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            · 사진의 크기는 최대 5MB까지 가능합니다.
          </div>
          <StRealEstate.SemiTitle>상세 설명</StRealEstate.SemiTitle>
          <StRealEstate.Content>
            <TextArea
              register={register("detail")}
              name="detail"
              label="상세설명"
            />
          </StRealEstate.Content>
          <div className="btnWrapper">
            <Button.Primary type="submit" size="large" fs="14px" fw="400">
              {isUpdate ? "수정하기" : "매물 등록"}
            </Button.Primary>
          </div>
        </StRealEstate.Form>
      </StRealEstate.ListingBox>
    </StRealEstate.Wrapper>
  );
}
export default EstateListingForm;
