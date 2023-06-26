import { useQuery } from "@tanstack/react-query";

import { estateApi } from "../apis/axios";
import { EstateListData } from "../typings/detail.type";

interface ApiResponse {
  estateList: EstateListData[];
}
export default function useUser() {
  const { data }: { data?: ApiResponse; isLoading: boolean } = useQuery(
    ["estateList"],
    estateApi.getList,
    {
      onError: (error) => {
        console.error(error);
      },
    }
  );
  return { estateList: data?.estateList };
}
