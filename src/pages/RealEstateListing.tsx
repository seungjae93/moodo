import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import { AiOutlinePlus } from "react-icons/ai";
import { estateApi } from "../apis/axios";
import SideNav from "../components/common/SideNav/SideNav";
import NumberInputGroup from "../components/common/management/NumberInputGroup";
import RadioInput from "../components/common/management/RadioInput";
import palette from "../libs/styles/palette";
import TextArea from "../components/common/Textarea";
import Button from "../components/common/Button/Button";
import PostCode from "../components/common/management/PostCode";
import flex from "../libs/styles/utilFlex";
import DragabbleImage from "../components/common/management/DragabbleImage";

interface RealEstateForm {
  userId: string;
  typeOfProperty: string;
  addressOfProperty: string;
  address?: string;
  addressDetail?: string;
  transactionType?: string;
  deposit?: string;
  monthly?: string;
  price?: string;
  maintenanceCost?: string;
  moveInDate?: string;
  supplyArea?: string;
  exclusiveArea?: string;
  numOfRoom?: string;
  numOfBath?: string;
  lowestFloor?: string;
  highestFloor?: string;
  numOfFloor?: string;
  dong?: string;
  floor?: string;
  parking?: string;
  elevator?: string;
  pet?: string;
  options?: string;
  images?: FileList;
  detail?: string;
  moveInDateInput?: string;
}

const typeOfProperties = [
  { id: "typeOfProperty-1", label: "원/투룸", value: "원/투룸" },
  { id: "typeOfProperty-2", label: "주택/빌라", value: "주택/빌라" },
  { id: "typeOfProperty-3", label: "아파트", value: "아파트" },
  { id: "typeOfProperty-4", label: "상가/사무실", value: "상가/사무실" },
  { id: "typeOfProperty-5", label: "건물", value: "건물" },
];
const transactionTypes = [
  { id: "transactionType-1", label: "월세", value: "월세" },
  { id: "transactionType-2", label: "전세", value: "전세" },
  { id: "transactionType-3", label: "매매", value: "매매" },
];
const moveInDate = [
  { id: "moveInDate-1", label: "즉시 입주", value: "즉시 입주" },
  { id: "moveInDate-2", label: "날짜 협의", value: "날짜 협의" },
  { id: "moveInDate-3", label: "날짜 설정", value: "날짜 설정" },
];
const parkingAvailability = [
  { id: "parkingAvailability-1", label: "가능", value: "가능" },
  { id: "parkingAvailability-2", label: "불가능", value: "불가능" },
];
const elevator = [
  { id: "elevator-1", label: "있음", value: "있음" },
  { id: "elevator-2", label: "없음", value: "없음" },
];
const pet = [
  { id: "pet-1", label: "가능", value: "가능" },
  { id: "pet-2", label: "불가능", value: "불가능" },
];
const options = [
  { id: "options-1", label: "가스레인지", value: "가스레인지" },
  { id: "options-2", label: "인덕션", value: "인덕션" },
  { id: "options-3", label: "냉장고", value: "냉장고" },
  { id: "options-4", label: "에어컨", value: "에어컨" },
  { id: "options-5", label: "전자레인지", value: "전자레인지" },
  { id: "options-6", label: "TV", value: "TV" },
  { id: "options-7", label: "옷장", value: "옷장" },
  { id: "options-8", label: "비데", value: "비데" },
  { id: "options-9", label: "도어락", value: "도어락" },
];

function RealEstateListing() {
  const navigate = useNavigate();
  const userId = {
    userId: "q376t5k2",
    age: 30,
    email: "johndoe@example.com",
  };
  const { mutate } = useMutation(
    async (formData: FormData) => {
      try {
        await estateApi.post(formData);
        // 성공적으로 회원가입이 완료되었을 때의 로직
        alert("등록이 완료되었습니다!");
        navigate("/");
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
    },
  });

  const propertyRoomVilla = () => {
    return (
      <>
        <RealEstateListingContent>
          <div className="contentTitle">면적</div>
          <NumberInputGroup
            type="supplyArea"
            label="공급면적"
            register={register}
          />
          <span>m²</span>
          <div className="marginLeft">|</div>
          <NumberInputGroup
            type="exclusiveArea"
            label="전용"
            register={register}
          />
          <span>m²</span>
        </RealEstateListingContent>
        <RealEstateListingContent>
          <div className="contentTitle">방 개수</div>
          <NumberInputGroup
            type="numOfRoom"
            label="방 개수"
            register={register}
          />
          <span>개</span>
          <div className="marginLeft">|</div>
          <NumberInputGroup
            type="numOfBath"
            label="화장실개수"
            register={register}
          />
          <span>개</span>
        </RealEstateListingContent>
        <RealEstateListingContent>
          <div className="contentTitle">층수</div>
          <NumberInputGroup
            type="numOfFloor"
            label="건물층수"
            register={register}
          />
          <span>층</span>
          <div className="marginLeft">|</div>
          <NumberInputGroup type="floor" label="해당층수" register={register} />
          <span>층</span>
        </RealEstateListingContent>
      </>
    );
  };
  const propertyApartmentOffice = () => {
    return (
      <>
        <RealEstateListingContent>
          <div className="contentTitle">면적</div>
          <NumberInputGroup
            type="supplyArea"
            label="공급면적"
            register={register}
          />
          <span>m²</span>
          <div className="marginLeft">|</div>
          <NumberInputGroup
            type="exclusiveArea"
            label="전용"
            register={register}
          />
          <span>m²</span>
        </RealEstateListingContent>
        <RealEstateListingContent>
          <div className="contentTitle">층수</div>
          <NumberInputGroup
            type="numOfFloor"
            label="건물층수"
            register={register}
          />
          <span>층</span>
          <div className="marginLeft">|</div>
          <NumberInputGroup type="floor" label="해당층수" register={register} />
          <span>층</span>
        </RealEstateListingContent>
      </>
    );
  };
  const typeOfPropertyWatch = watch("typeOfProperty");
  const transactionTypeWatch = watch("transactionType");
  const moveInDateWatch = watch("moveInDate");

  const isResidence = ["원/투룸", "주택/빌라", "아파트"].includes(
    typeOfPropertyWatch
  );

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

  const onDragEnd = ({ destination, source }: DropResult) => {
    // 드래그 앤 드롭 종료 시 실행되는 콜백 함수

    if (!destination) {
      return;
    }
    const updatedImagesPreview = [...imagesPreview];
    const [draggedImage] = updatedImagesPreview.splice(source.index, 1);
    updatedImagesPreview.splice(destination.index, 0, draggedImage);
    setImagesPreview(updatedImagesPreview);
  };

  //handleSubmit
  const onValid = (data: RealEstateForm) => {
    const { address, addressDetail } = data;
    const addressOfProperty = `${address}, ${addressDetail}`;
    const formData = new FormData();
    formData.append("userId", userId?.userId || "");
    formData.append("typeOfProperty", data?.typeOfProperty || "");
    formData.append("addressOfProperty", addressOfProperty || "");
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
    formData.append("detail", data?.detail || "");
    // 이미지 파일을 formData에 추가
    if (data?.images) {
      for (const file of data.images) {
        formData.append("images", file);
      }
    }
    mutate(formData);
  };

  return (
    <RealEstateListingWrapper>
      <SideNav />
      <RealEstateListingBox>
        <RealEstateListingTitle>매물 등록</RealEstateListingTitle>
        <RealEstateListingForm
          onSubmit={handleSubmit(onValid)}
          encType="multipart/form-data"
        >
          <RealEstateListingSemiTitle>매물종류</RealEstateListingSemiTitle>
          <RadioInputWrapper>
            <RadioInput
              register={register("typeOfProperty", {
                required: "필수 선택 항목입니다",
              })}
              type="radio"
              options={typeOfProperties}
              name="typeOfProperty"
            />
          </RadioInputWrapper>
          <RealEstateListingSemiTitle>매물 위치</RealEstateListingSemiTitle>
          <RealEstateListingContent>
            <div className="contentTitle">주소</div>
            <PostCode register={register} />
          </RealEstateListingContent>
          <RealEstateListingSemiTitle>거래 정보</RealEstateListingSemiTitle>
          <RealEstateListingContent>
            <div className="contentTitle">거래 유형</div>
            <RadioInput
              register={register("transactionType", {
                required: "필수 선택 항목입니다",
              })}
              type="radio"
              options={transactionTypes}
              name="transactionType"
            />
          </RealEstateListingContent>
          <RealEstateListingContent>
            {transactionTypeWatch === "월세" && (
              <>
                <div className="contentTitle">가격 정보</div>
                <NumberInputGroup
                  type="deposit"
                  label="보증금"
                  register={register}
                />
                <span>만원</span>
                <div className="marginLeft">|</div>
                <NumberInputGroup
                  type="monthly"
                  label="월세"
                  register={register}
                />
                <span>만원</span>
              </>
            )}
            {transactionTypeWatch === "전세" && (
              <>
                <div className="contentTitle">가격 정보</div>
                <NumberInputGroup
                  type="deposit"
                  label="보증금"
                  register={register}
                />
                <span>만원</span>
                <div className="marginLeft">|</div>
              </>
            )}
            {transactionTypeWatch === "매매" && (
              <>
                <div className="contentTitle">가격 정보</div>
                <NumberInputGroup
                  type="price"
                  label="금액"
                  register={register}
                />
                <span>만원</span>
                <div className="marginLeft">|</div>
              </>
            )}
          </RealEstateListingContent>
          <RealEstateListingContent>
            <div className="contentTitle">관리비</div>
            <NumberInputGroup
              type="maintenanceCost"
              label="관리비"
              register={register}
            />
            <span>만원</span>
          </RealEstateListingContent>
          <RealEstateListingContent>
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
          </RealEstateListingContent>
          <RealEstateListingSemiTitle>매물 정보</RealEstateListingSemiTitle>
          {typeOfPropertyWatch === "원/투룸" && <>{propertyRoomVilla()}</>}
          {typeOfPropertyWatch === "주택/빌라" && <>{propertyRoomVilla()}</>}
          {typeOfPropertyWatch === "아파트" && (
            <>
              {propertyApartmentOffice()}

              <RealEstateListingContent>
                <div className="contentTitle">동</div>
                <NumberInputGroup type="dong" label="동" register={register} />
                <span>동</span>
              </RealEstateListingContent>
            </>
          )}
          {typeOfPropertyWatch === "상가/사무실" && (
            <>{propertyApartmentOffice()}</>
          )}
          {typeOfPropertyWatch === "건물" && (
            <>
              <RealEstateListingContent>
                <div className="contentTitle">면적</div>
                <NumberInputGroup
                  type="supplyArea"
                  label="공급면적"
                  register={register}
                />
                <span>m²</span>
                <div className="marginLeft">|</div>
                <NumberInputGroup
                  type="exclusiveArea"
                  label="전용"
                  register={register}
                />
                <span>m²</span>
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">층수</div>
                <NumberInputGroup
                  type="lowestFloor"
                  label="저층"
                  register={register}
                />
                <span>층</span>
                <div className="marginLeft">|</div>
                <NumberInputGroup
                  type="highestFloor"
                  label="최상층"
                  register={register}
                />
                <span>층</span>
              </RealEstateListingContent>
            </>
          )}

          {isResidence && (
            <>
              <RealEstateListingSemiTitle>추가 정보</RealEstateListingSemiTitle>
              <RealEstateListingContent>
                <div className="contentTitle">주차 여부</div>
                <RadioInput
                  register={register("parking", {
                    required: "필수 선택 항목입니다",
                  })}
                  type="radio"
                  options={parkingAvailability}
                  name="parking"
                />
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">엘리베이터</div>
                <RadioInput
                  register={register("elevator", {
                    required: "필수 선택 항목입니다",
                  })}
                  type="radio"
                  options={elevator}
                  name="elevator"
                />
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">반려동물</div>
                <RadioInput
                  register={register("pet", {
                    required: "필수 선택 항목입니다",
                  })}
                  type="radio"
                  options={pet}
                  name="pet"
                />
              </RealEstateListingContent>
              <RealEstateListingContent>
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
              </RealEstateListingContent>
            </>
          )}

          <RealEstateListingSemiTitle>사진 추가</RealEstateListingSemiTitle>
          <RealEstateListingContent>
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
          </RealEstateListingContent>
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
          <RealEstateListingSemiTitle>상세 설명</RealEstateListingSemiTitle>
          <TextArea
            register={register("detail")}
            name="detail"
            label="상세설명"
          />
          <div className="btnWrapper">
            <Button.Primary type="submit" size="large" fs="14px" fw="400">
              매물 등록
            </Button.Primary>
          </div>
        </RealEstateListingForm>
      </RealEstateListingBox>
    </RealEstateListingWrapper>
  );
}

export default RealEstateListing;

const RealEstateListingWrapper = styled.div`
  ${flex({ justify: "", align: "" })}
  padding-top: 30px;
  height: 100%;
  width: 1300px;
  min-width: 700px;
`;

const RealEstateListingBox = styled.div`
  padding: 50px;
  width: 100%;
`;

const RealEstateListingForm = styled.form`
  width: 100%;
  .btnWrapper {
    ${flex({})}
    margin-top:15px;
  }
`;

const RealEstateListingTitle = styled.div`
  width: 100%;
  padding: 0 20px 10px 0;
  font-weight: 700;
  font-size: 24px;
  border-bottom: 3px solid black;
`;

const RealEstateListingSemiTitle = styled.div`
  width: 100%;
  padding: 20px 20px 10px 0;
  font-weight: 400;
  font-size: 16px;
  border-bottom: 1px solid #000000;
`;

const RadioInputWrapper = styled.div`
  display: flex;
`;

const RealEstateListingContent = styled.div`
  ${flex({ justify: "", gap: "10px" })}
  padding: 10px 0 10px 30px;
  border-bottom: 1px solid ${palette.gray[0]};
  span {
    margin-left: 10px;
  }
  .contentTitle {
    width: 80px;
    text-align: center;
  }
  .marginLeft {
    margin-left: 30px;
    margin-bottom: 5px;
    font-size: 25px;
    text-align: center;
    color: ${palette.gray[0]};
  }
  .optionsWrap {
    ${flex({ justify: "", gap: "10px" })}
    width: 600px;
  }
  .photoWrap {
    ${flex({ justify: "", gap: "10px" })}
    flex-wrap: wrap;
    width: 600px;
    height: 250px;
    padding: 20px;
  }
  .photoLabel {
    ${flex({})}
    width: 70px;
    height: 70px;
  }
  .labelWrap {
    ${flex({})}
    width: 100%;
    height: 200px;
  }
  .photoInput {
    width: 10px;
    opacity: 0;
    cursor: pointer;
  }
  .photoIcon {
    font-size: 50px;
    color: ${palette.gray[3]};
    cursor: pointer;
  }
`;
