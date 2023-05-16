import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { estateApi } from "../apis/axios";
import { EstateDetailData } from "../types/DetailData/detail.type";

interface ApiResponse {
  estate: EstateDetailData[];
}
export default function useEstateDetail() {
  const estateId = useParams().id as string;
  const { data, isLoading }: { data?: ApiResponse; isLoading: boolean } =
    useQuery(["estateDetail", estateId], () => estateApi.get(estateId));
  return { estateDetail: data?.estate };
}
