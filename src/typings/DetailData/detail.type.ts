export interface StImgProps {
  isLarge?: boolean;
  isMore?: boolean;
}

export interface DetailDataProps {
  estateDetail?: EstateDetailData;
}
export interface EstateDetailData {
  userId?: string;
  addressOfProperty?: string;
  addressOfJibun?: string;
  deposit?: string;
  detail?: string;
  dong?: string;
  elevator?: string;
  typeOfProperty?: string;
  estateId?: number;
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
  transactionType?: string;
  lat?: string;
  lng?: string;
}

export interface ImageData {
  imgOfPropertyId: number;
  estateId: string;
  imgOfUrl: string;
  imgIndex: number;
}
