import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
//detail
export interface StImgProps {
  isLarge?: boolean;
  isMore?: boolean;
}

export interface DetailDataProps {
  estateDetail?: EstateDetailData;
  estateUser?: UserListData;
}

export interface ImageData {
  imgOfPropertyId: number;
  estateId: string;
  imgOfUrl: string;
  imgIndex: number;
}
export interface EstateDetailData {
  userId?: string;
  addressOfProperty?: string;
  addressOfJibun: string;
  deposit?: string;
  detail?: string;
  dong: string;
  elevator?: string;
  typeOfProperty: string;
  estateId?: string;
  exclusiveArea?: string;
  floor?: string;
  highestFloor?: string;
  imgs?: ImageData[];
  lowestFloor?: string;
  maintenanceCost?: string;
  monthly?: string;
  moveInDate?: string;
  moveInDateInput?: string;
  numOfBath?: string;
  numOfFloor?: string;
  numOfRoom?: string;
  options?: string;
  parking?: string;
  pet?: string;
  price?: string;
  supplyArea?: string;
  transactionType: string;
  lat: string;
  lng: string;
  rightMoney?: string;
  mainCategory?: string;
  subCategory?: string;
}

//axios , mapContainer
export interface Coordinates {
  swLatLng: { lat: number; lng: number };
  neLatLng: { lat: number; lng: number };
  zoomLevel: number;
}
//mapContainer
export interface MapContainerProps {
  searchValue: string;
  onDataReceived: (data: EstateDetailData[]) => void;
  filteredMapList: EstateDetailData[];
}

export interface ApiResponse {
  message: string;
}

//manageCard
export interface ImageData {
  imgOfPropertyId: number;
  estateId: string;
  imgOfUrl: string;
  imgIndex: number;
}
export interface EstateListData {
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
export interface ManageCardProps {
  estate: EstateListData;
}

//memberCard
export interface UserListData {
  admin?: string;
  approved?: boolean;
  id?: string;
  userBusinessLicenseImgUrl: string;
  userBusinessLocation: string;
  userCompanyName: string;
  userCompanyTelNumber: string;
  userEmail: string;
  userId: string;
  userKey: string;
  userName: string;
  userPassword: string;
  userPhoneNumber: string;
  userProfileImgUrl: string;
}
export interface UserListDataProps {
  member: UserListData;
}

//estateListing AdditionalInfo
export interface AdditionalInfoProps {
  title: string;
  options: { id: string; label: string; value: string }[];
  name: string;
  register: UseFormRegister<any>;
}
//estateListing DragabbleImage
export interface DragabbleImageProps {
  key: string;
  preview: string;
  index: number;
}

//estateListing numberInputGroup
export interface NumberInputGroupProps {
  type:
    | "deposit"
    | "monthly"
    | "price"
    | "maintenanceCost"
    | "supplyArea"
    | "exclusiveArea"
    | "numOfRoom"
    | "numOfBath"
    | "numOfFloor"
    | "floor"
    | "dong"
    | "lowestFloor"
    | "highestFloor"
    | "rightMoney";
  label: string;
  register: UseFormRegister<any>;
}

//estateListing PriceInfo
export interface PriceInfoProps {
  type: "deposit" | "monthly" | "price" | "maintenanceCost" | "rightMoney";
  label: string;
  register: UseFormRegister<any>;
}
//estateListing PropertyContent
export interface PropertyContentProps {
  type: "roomVillaApart" | "office" | "building";
  register: UseFormRegister<any>;
  handleCategoryChange?: (category: string) => void;
  handleSubCategoryChange?: (subCategoryValue: string) => void;
}

//RadioInput
export interface RadioProps {
  id: string;
  label: string;
  value: string;
}
export interface InputProps {
  key?: string;
  id?: string;
  label?: string;
  name?: string;
  kind?: "radio" | "text" | "checkbox" | "file" | "phone" | "profile";
  register?: UseFormRegisterReturn;
  type?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  readonly?: boolean;
  options?: RadioProps[];
}
//Search
export interface SearchProps {
  onSearch: (value: string) => void;
}
//SelectBOx
export interface SelectBoxProps {
  selectedPropertyTypes: string[];
  selectedDealTypes: string[];
  onSelectedPropertyTypesChange: (updatedPropertyTypes: string[]) => void;
  onSelectedDealTypesChange: (updatedDealTypes: string[]) => void;
  onDepositMinChange: (value: string) => void;
  onDepositMaxChange: (value: string) => void;
  onMonthlyMinChange: (value: string) => void;
  onMonthlyMaxChange: (value: string) => void;
  onRightMoneyMinChange: (value: string) => void;
  onRightMoneyMaxChange: (value: string) => void;
  onPriceResetButtonClick: () => void;
  onStoreCategoryChange: (selectedCategory: string) => void;
  onSubStoreCategoryChange: (selectedSubCategory: string) => void;
}
export interface ResponsiveSelectBoxProps {
  depositMin: string;
  depositMax: string;
  monthlyMin: string;
  monthlyMax: string;
  rightMoneyMin: string;
  rightMoneyMax: string;
  storeCategory: string;
  subStoreCategoryValue: string;
  selectedPropertyTypes: string[];
  selectedDealTypes: string[];
  onSelectedPropertyTypesChange: (updatedPropertyTypes: string[]) => void;
  onSelectedDealTypesChange: (updatedDealTypes: string[]) => void;
  onDepositMinChange: (value: string) => void;
  onDepositMaxChange: (value: string) => void;
  onMonthlyMinChange: (value: string) => void;
  onMonthlyMaxChange: (value: string) => void;
  onRightMoneyMinChange: (value: string) => void;
  onRightMoneyMaxChange: (value: string) => void;
  onPriceResetButtonClick: () => void;
  onStoreCategoryChange: (selectedCategory: string) => void;
  onSubStoreCategoryChange: (selectedSubCategory: string) => void;
  onFilterClick: () => void;
}
//TextArea
export interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}
//WorningWord
export interface WorningWordProps {
  color?: any;
  children?: string;
  [key: string]: any;
}
//ProfileEdit
export interface ProfileEditForm {
  userId?: string;
  userName: string;
  address?: string;
  addressDetail?: string;
  userCompanyTelNumber: string;
  userPhoneNumber?: string;
  userCompanyName: string;
  userBusinessLocation: string;
  startLocation: string;
  startDetail: string;
  userProfileImg: FileList;
  userBusinessLicense: FileList;
}
//RealEstateListing
export interface RealEstateForm {
  userId: string;
  typeOfProperty: string;
  addressOfProperty: string;
  address?: string;
  addressOfJibun?: string;
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
  rightMoney?: string;
  mainCategory?: string;
  subCategory?: string;
}

export interface EstateListData {
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

export interface EstateListingFormProps {
  estateId?: string;
  isUpdate?: boolean;
}
export interface UserInfo {
  userName: string;
  userPhoneNumber: string;
  userCompanyName: string;
  userCompanyTelNumber: string;
  userBusinessLocation: string;
  userProfileImgUrl: string;
}
export interface Data {
  userInfo: UserInfo;
}

export interface ProfileData {
  userId: string;
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
  userCompanyName: string;
  startLocation: string;
  userCompanyTelNumber: string;
  userBusinessLocation: string;
  userBusinessLicenseImgUrl: string;
  userProfileImgUrl: string;
}
