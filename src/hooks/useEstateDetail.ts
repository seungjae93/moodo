import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { estateApi } from "../apis/axios";
import { EstateDetailData, UserListData } from "../typings/detail.type";

interface ApiResponse {
  estate: {
    estate: EstateDetailData;
    user: UserListData;
  };
}
export default function useEstateDetail() {
  const estateId = useParams().id as string;
  const { data }: { data?: ApiResponse; isLoading: boolean } = useQuery(
    ["estateDetail", estateId],
    () => estateApi.get(estateId)
  );
  const estate = data?.estate.estate;
  const user = data?.estate.user;

  return { estateDetail: estate, estateUser: user };
}
