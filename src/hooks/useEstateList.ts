import { useQuery } from "@tanstack/react-query";

import { estateApi } from "../apis/axios";

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

interface ApiResponse {
  estateList: EstateListData[];
}
export default function useUser() {
  const { data, isLoading }: { data?: ApiResponse; isLoading: boolean } =
    useQuery(["estateList"], estateApi.getList, {
      onError: (error) => {
        console.error(error);
      },
    });
  return { estateList: data?.estateList };
}
