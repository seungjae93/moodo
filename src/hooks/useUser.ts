import { useQuery } from "@tanstack/react-query";

import { profileApi } from "../apis/axios";
import { ProfileData } from "../typings/detail.type";

interface ApiResponse {
  user: ProfileData;
}

export default function useUser() {
  const { data }: { data?: ApiResponse; isLoading: boolean } = useQuery(
    ["profileData"],
    profileApi.get
  );

  return { user: data?.user };
}
