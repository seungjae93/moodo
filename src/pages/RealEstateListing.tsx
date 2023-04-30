import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import SideNav from "../components/common/SideNav/SideNav";
import RadioInput from "../components/common/management/RadioInput";
import palette from "../libs/styles/palette";
import TextArea from "../components/common/Textarea";
import Button from "../components/common/Button/Button";
import { AiOutlinePlus } from "react-icons/ai";

interface RealEstateForm {
  propertyType: string;
  transactionType: string;
  deposit: string;
  monthlyPay: string;
  managementFee: string;
  moveInDate: string;
  houseArea: string;
  exclusiveArea: string;
  rooms: string;
  bedrooms: string;
  buildingFloors: string;
  buildingHigestFloors?: string;
  buildingNumber?: string;
  floorNumber: string;
  parkingAvailability: string;
  elevator: string;
  pet: string;
  options: string;
  photo?: FileList;
  description?: string;
}

const propertyTypes = [
  { id: "propertyType-1", label: "원/투룸", value: "원/투룸" },
  { id: "propertyType-2", label: "주택/빌라", value: "주택/빌라" },
  { id: "propertyType-3", label: "아파트", value: "아파트" },
  { id: "propertyType-4", label: "상가/사무실", value: "상가/사무실" },
  { id: "propertyType-5", label: "건물", value: "건물" },
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
  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<RealEstateForm>({
    mode: "onChange",
    defaultValues: { propertyType: "원/투룸" },
  });

  const propertyType = watch("propertyType");
  const transactionType = watch("transactionType");
  const isResidence = ["원/투룸", "주택/빌라", "아파트"].includes(propertyType);

  const [photoPreview, setPhotoPreview] = useState<string[]>([]);
  const photo = watch("photo");

  useEffect(() => {
    if (photo && photo.length > 0) {
      const previewArray = Array.from(photo)
        .slice(0, 8)
        .map((file) => URL.createObjectURL(file));
      setPhotoPreview(previewArray);
    } else {
      setPhotoPreview([]);
    }
  }, [photo]);

  const onValid = (data: RealEstateForm) => {};
  return (
    <RealEstateListingWrapper>
      <SideNav />
      <RealEstateListingBox>
        <RealEstateListingTitle>매물 등록</RealEstateListingTitle>
        <RealEstateListingForm
          onSubmit={handleSubmit(onValid)}
          encType="multipart/form-data"
        >
          <RealEstateListingSemiTitle>매물 종류</RealEstateListingSemiTitle>
          <RadioInputWrapper>
            {propertyTypes.map(({ id, label, value }) => (
              <RadioInput
                key={id}
                register={register("propertyType", {
                  required: "필수 선택 항목입니다",
                })}
                type="radio"
                id={id}
                label={label}
                value={value}
                name="propertyType"
              />
            ))}
          </RadioInputWrapper>
          <RealEstateListingSemiTitle>매물 위치</RealEstateListingSemiTitle>

          <RealEstateListingSemiTitle>거래 정보</RealEstateListingSemiTitle>
          <RealEstateListingContent>
            <div className="contentTitle">거래 유형</div>
            {transactionTypes.map(({ id, label, value }) => (
              <RadioInput
                key={id}
                register={register("transactionType", {
                  required: "필수 선택 항목입니다",
                })}
                type="radio"
                id={id}
                label={label}
                value={value}
                name="transactionType"
              />
            ))}
          </RealEstateListingContent>
          <RealEstateListingContent>
            {transactionType === "월세" && (
              <>
                <div className="contentTitle">가격 정보</div>
                <RadioInput
                  register={register("deposit", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="보증금"
                  name="deposit"
                />
                <span>만원</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("monthlyPay", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="월세"
                  name="monthlyPay"
                />
                <span>만원</span>
              </>
            )}
            {transactionType === "전세" && (
              <>
                <div className="contentTitle">가격 정보</div>
                <RadioInput
                  register={register("deposit", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="보증금"
                  name="deposit"
                />
                <span>만원</span>
                <div className="marginLeft">|</div>
              </>
            )}
            {transactionType === "매매" && (
              <>
                <div className="contentTitle">가격 정보</div>
                <RadioInput
                  register={register("deposit", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="금액"
                  name="deposit"
                />
                <span>만원</span>
                <div className="marginLeft">|</div>
              </>
            )}
          </RealEstateListingContent>
          <RealEstateListingContent>
            <div className="contentTitle">관리비</div>
            <RadioInput
              register={register("managementFee", {
                required: "필수 선택 항목입니다",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "숫자만 입력해주세요",
                },
              })}
              kind="text"
              type="text"
              label="관리비"
              name="managementFee"
            />
            <span>만원</span>
          </RealEstateListingContent>
          <RealEstateListingContent>
            <div className="contentTitle">입주가능일</div>
            {moveInDate.map(({ id, label, value }) => (
              <RadioInput
                key={id}
                register={register("moveInDate", {
                  required: "필수 선택 항목입니다",
                })}
                type="radio"
                id={id}
                label={label}
                value={value}
                name="moveInDate"
              />
            ))}
          </RealEstateListingContent>
          <RealEstateListingSemiTitle>매물 정보</RealEstateListingSemiTitle>
          {propertyType === "원/투룸" && (
            <>
              <RealEstateListingContent>
                <div className="contentTitle">면적</div>
                <RadioInput
                  register={register("houseArea", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="공급면적"
                  name="houseArea"
                />
                <span>m²</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("exclusiveArea", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="전용"
                  name="exclusiveArea"
                />
                <span>m²</span>
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">방 개수</div>
                <RadioInput
                  register={register("rooms", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="방 개수"
                  name="houseArea"
                />
                <span>개</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("bedrooms", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="화장실개수"
                  name="exclusiveArea"
                />
                <span>개</span>
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">층수</div>
                <RadioInput
                  register={register("buildingFloors", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="건물층수"
                  name="buildingFloors"
                />
                <span>층</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("floorNumber", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="해당층수"
                  name="floorNumber"
                />
                <span>층</span>
              </RealEstateListingContent>
            </>
          )}
          {propertyType === "주택/빌라" && (
            <>
              <RealEstateListingContent>
                <div className="contentTitle">면적</div>
                <RadioInput
                  register={register("houseArea", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="공급면적"
                  name="houseArea"
                />
                <span>m²</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("exclusiveArea", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="전용"
                  name="exclusiveArea"
                />
                <span>m²</span>
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">방 개수</div>
                <RadioInput
                  register={register("rooms", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="방 개수"
                  name="houseArea"
                />
                <span>개</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("bedrooms", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="화장실개수"
                  name="exclusiveArea"
                />
                <span>개</span>
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">층수</div>
                <RadioInput
                  register={register("buildingFloors", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="건물층수"
                  name="buildingFloors"
                />
                <span>층</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("floorNumber", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="해당층수"
                  name="floorNumber"
                />
                <span>층</span>
              </RealEstateListingContent>
            </>
          )}
          {propertyType === "아파트" && (
            <>
              <RealEstateListingContent>
                <div className="contentTitle">면적</div>
                <RadioInput
                  register={register("houseArea", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="공급면적"
                  name="houseArea"
                />
                <span>m²</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("exclusiveArea", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="전용"
                  name="exclusiveArea"
                />
                <span>m²</span>
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">층수</div>
                <RadioInput
                  register={register("buildingFloors", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="건물층수"
                  name="buildingFloors"
                />
                <span>층</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("floorNumber", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="해당층수"
                  name="floorNumber"
                />
                <span>층</span>
              </RealEstateListingContent>

              <RealEstateListingContent>
                <div className="contentTitle">동</div>
                <RadioInput
                  register={register("buildingNumber", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="동"
                  name="buildingNumber"
                />
                <span>동</span>
              </RealEstateListingContent>
            </>
          )}
          {propertyType === "상가/사무실" && (
            <>
              <RealEstateListingContent>
                <div className="contentTitle">면적</div>
                <RadioInput
                  register={register("houseArea", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="공급면적"
                  name="houseArea"
                />
                <span>m²</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("exclusiveArea", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="전용"
                  name="exclusiveArea"
                />
                <span>m²</span>
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">층수</div>
                <RadioInput
                  register={register("buildingFloors", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="건물층수"
                  name="buildingFloors"
                />
                <span>층</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("floorNumber", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="해당층수"
                  name="floorNumber"
                />
                <span>층</span>
              </RealEstateListingContent>
            </>
          )}
          {propertyType === "건물" && (
            <>
              <RealEstateListingContent>
                <div className="contentTitle">면적</div>
                <RadioInput
                  register={register("houseArea", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="공급면적"
                  name="houseArea"
                />
                <span>m²</span>
                <div className="marginLeft">|</div>
                <RadioInput
                  register={register("exclusiveArea", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="전용"
                  name="exclusiveArea"
                />
                <span>m²</span>
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">층수</div>
                <RadioInput
                  register={register("buildingFloors", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="건물층수"
                  name="buildingFloors"
                />
                <span>층</span>
                <div className="marginLeft">~</div>
                <RadioInput
                  register={register("buildingHigestFloors", {
                    required: "필수 선택 항목입니다",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "숫자만 입력해주세요",
                    },
                  })}
                  kind="text"
                  type="text"
                  label="최고층수"
                  name="buildingHigestFloors"
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
                {parkingAvailability.map(({ id, label, value }) => (
                  <RadioInput
                    key={id}
                    register={register("parkingAvailability", {
                      required: "필수 선택 항목입니다",
                    })}
                    type="radio"
                    id={id}
                    label={label}
                    value={value}
                    name="parkingAvailability"
                  />
                ))}
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">엘리베이터</div>
                {elevator.map(({ id, label, value }) => (
                  <RadioInput
                    key={id}
                    register={register("elevator", {
                      required: "필수 선택 항목입니다",
                    })}
                    type="radio"
                    id={id}
                    label={label}
                    value={value}
                    name="elevator"
                  />
                ))}
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">반려동물</div>
                {pet.map(({ id, label, value }) => (
                  <RadioInput
                    key={id}
                    register={register("pet", {
                      required: "필수 선택 항목입니다",
                    })}
                    type="radio"
                    id={id}
                    label={label}
                    value={value}
                    name="pet"
                  />
                ))}
              </RealEstateListingContent>
              <RealEstateListingContent>
                <div className="contentTitle">옵션</div>
                <div className="optionsWrap">
                  {options.map(({ id, label, value }) => (
                    <RadioInput
                      key={id}
                      register={register("options", {
                        required: "필수 선택 항목입니다",
                      })}
                      type="checkbox"
                      id={id}
                      label={label}
                      value={value}
                      name="options"
                    />
                  ))}
                </div>
              </RealEstateListingContent>
            </>
          )}

          <RealEstateListingSemiTitle>사진 추가</RealEstateListingSemiTitle>
          <RealEstateListingContent>
            <div className="contentTitle">사진</div>
            <div className="photoWrap">
              {photoPreview.length > 0 ? (
                photoPreview.map((preview, index) => (
                  <StAvatarPreview key={index} src={preview} alt="Image" />
                ))
              ) : (
                <div className="labelWrap">
                  <label htmlFor="picture" className="photoLabel">
                    <AiOutlinePlus className="photoIcon" />
                    <input
                      {...register("photo")}
                      id="picture"
                      type="file"
                      multiple
                      accept="image/*"
                      className="photoInput"
                    />
                  </label>
                </div>
              )}
            </div>
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
            register={register("description", { required: true })}
            name="description"
            label="상세설명"
            required
          />
          <ButtonWithMarginTop type="submit" cyan fullWidth>
            매물 등록
          </ButtonWithMarginTop>
        </RealEstateListingForm>
      </RealEstateListingBox>
    </RealEstateListingWrapper>
  );
}

export default RealEstateListing;

const RealEstateListingWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  height: 100%;
  width: 1300px;
  min-width: 700px;
`;

const RealEstateListingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 100%;
`;

const RealEstateListingForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  display: flex;
  align-items: center;
  padding-left: 30px;
  gap: 10px;
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
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    gap: 10px;
  }
  .photoWrap {
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    height: 250px;
    padding: 20px;
    gap: 20px;
  }
  .photoLabel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
  }
  .labelWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
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
  }
`;

const StAvatarPreview = styled.img`
  width: 100px;
  height: 100px;
  background-color: transparent;
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;
