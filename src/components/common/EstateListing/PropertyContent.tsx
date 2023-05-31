import { useEffect, useState } from "react";
import { StRealEstate } from "../../../libs/styles/StRealEstate";
import NumberInputGroup from "./NumberInputGroup";
import { PropertyContentProps } from "../../../typings/detail.type";
import { StoreSelectbox } from "./StoreSelectbox";

interface Option {
  value: string;
  label: string;
}

export default function PropertyContent({
  type,
  register,
}: PropertyContentProps) {
  const isRoomVillaApart = type === "roomVillaApart";
  const isOffice = type === "office";
  const isBuilding = type === "building";

  const [selectedMainCategory, setSelectedMainCategory] = useState("사무실");
  const [selectedSubCategory, setSelectedSubCategory] = useState("사무실");

  const handleMainCategoryChange = (selectedValue: string) => {
    setSelectedMainCategory(selectedValue);
  };
  const handleSubCategoryChange = (selectedValue: string) => {
    setSelectedSubCategory(selectedValue);
  };
  const getSubOptions = (): Option[] => {
    if (selectedMainCategory === "사무실") {
      return [{ value: "사무실", label: "사무실" }];
    } else if (selectedMainCategory === "휴게음식점") {
      return [
        { value: "카페", label: "카페" },
        { value: "치킨집", label: "치킨집" },
        { value: "제과점", label: "제과점" },
        { value: "피자집", label: "피자집" },
        { value: "패스트푸드", label: "패스트푸드" },
        { value: "기타", label: "기타" },
      ];
    } else if (selectedMainCategory === "일반음식점") {
      return [
        { value: "한식", label: "한식" },
        { value: "고기집", label: "고기집" },
        { value: "분식집", label: "분식집" },
        { value: "회", label: "회" },
        { value: "중국집", label: "중국집" },
        { value: "일식", label: "일식" },
        { value: "레스토랑", label: "레스토랑" },
        { value: "기타", label: "기타" },
      ];
    } else if (selectedMainCategory === "주류") {
      return [
        { value: "호프집", label: "호프집" },
        { value: "바", label: "바" },
        { value: "이자카야", label: "이자카야" },
        { value: "노래주점", label: "노래주점" },
        { value: "실내포차", label: "실내포차" },
        { value: "기타", label: "기타" },
      ];
    } else if (selectedMainCategory === "오락/체육시설") {
      return [
        { value: "당구장", label: "당구장" },
        { value: "노래방", label: "노래방" },
        { value: "피씨방", label: "피씨방" },
        { value: "헬스장", label: "헬스장" },
        { value: "스크린골프", label: "스크린골프" },
        { value: "요가", label: "요가" },
        { value: "만화방", label: "만화방" },
        { value: "기타", label: "기타" },
      ];
    } else if (selectedMainCategory === "판매점") {
      return [{ value: "기타", label: "기타" }];
    } else if (selectedMainCategory === "서비스업") {
      return [
        { value: "미용실", label: "미용실" },
        { value: "마사지샵", label: "마사지샵" },
        { value: "세차장", label: "세차장" },
        { value: "키즈카페", label: "키즈카페" },
        { value: "네일아트", label: "네일아트" },
        { value: "빨래방", label: "빨래방" },
        { value: "독서실", label: "독서실" },
        { value: "기타", label: "기타" },
      ];
    } else if (selectedMainCategory === "기타업종") {
      return [
        { value: "학원", label: "학원" },
        { value: "병원/약국", label: "병원/약국" },
        { value: "펜션", label: "펜션" },
        { value: "모텔", label: "모텔" },
        { value: "사우나", label: "사우나" },
        { value: "주유소", label: "주유소" },
        { value: "기타", label: "기타" },
      ];
    } else {
      return [];
    }
  };

  const [subOptions, setSubOptions] = useState<Option[]>(getSubOptions());
  useEffect(() => {
    // 대분류 선택 값이 변경될 때마다 서브카테고리를 업데이트
    setSubOptions(getSubOptions());
  }, [selectedMainCategory]);

  return (
    <>
      {(isRoomVillaApart || isOffice || isBuilding) && (
        <StRealEstate.Content>
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
        </StRealEstate.Content>
      )}

      {isRoomVillaApart && (
        <StRealEstate.Content>
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
        </StRealEstate.Content>
      )}
      {(isRoomVillaApart || isOffice) && (
        <StRealEstate.Content>
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
        </StRealEstate.Content>
      )}
      {isOffice && (
        <StRealEstate.Content>
          <div className="contentTitle">업종</div>
          <StoreSelectbox
            label="대분류"
            options={[
              { value: "사무실", label: "사무실" },
              { value: "휴게음식점", label: "휴게음식점" },
              { value: "일반음식점", label: "일반음식점" },
              { value: "주류", label: "주류" },
              { value: "오락/체육시설", label: "오락/체육시설" },
              { value: "판매점", label: "판매점" },
              { value: "서비스업", label: "서비스업" },
              { value: "기타업종", label: "기타업종" },
            ]}
            onChange={handleMainCategoryChange}
          />
          <div className="marginLeft">|</div>
          <StoreSelectbox
            label="소분류"
            options={subOptions}
            onChange={handleSubCategoryChange}
          />
        </StRealEstate.Content>
      )}
      {isBuilding && (
        <StRealEstate.Content>
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
        </StRealEstate.Content>
      )}
    </>
  );
}
