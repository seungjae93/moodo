import { useQuery } from "@tanstack/react-query";
import { profileApi } from "../apis/axios";

interface ProfileData {
  userId: string;
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
  userCompanyName: string;
  userCompanyTelNumber: string;
  userBusinessLocation: string;
  userBusinessLicenseImgUrl: string;
  userProfileImgUrl: string;
}
interface ApiResponse {
  user: ProfileData;
}

export default function useUser() {
  const { data, isLoading }: { data?: ApiResponse; isLoading: boolean } =
    useQuery(["profileData"], profileApi.get);

  return { user: data?.user };
}
