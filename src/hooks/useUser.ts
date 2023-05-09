import { useQuery } from "@tanstack/react-query";
import { profileApi } from "../apis/axios";

interface ProfileData {
  userId: string;
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
  userCompanyName: string | null;
  userCompanyTelNumber: string | null;
  userBusinessLocation: string | null;
  userBusinessLicenseImgUrl: string | null;
  userProfileImgUrl: string | null;
}
interface ApiResponse {
  user: ProfileData;
}

export default function useUser() {
  const { data, isLoading }: { data?: ApiResponse; isLoading: boolean } =
    useQuery(["profileData"], profileApi.get);

  return { user: data?.user };
}
