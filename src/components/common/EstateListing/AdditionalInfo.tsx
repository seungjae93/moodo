import { UseFormRegister } from "react-hook-form";
import { StRealEstateListing } from "../../../libs/styles/StRealEstateListing";

import RadioInput from "./RadioInput";
interface AdditionalInfoProps {
  title: string;
  options: { id: string; label: string; value: string }[];
  name: string;
  register: UseFormRegister<any>;
}

function AdditionalInfo({
  title,
  options,
  name,
  register,
}: AdditionalInfoProps) {
  return (
    <StRealEstateListing.Content>
      <div className="contentTitle">{title}</div>
      <RadioInput
        register={register(name, {
          required: "필수 선택 항목입니다",
        })}
        type="radio"
        options={options}
        name={name}
      />
    </StRealEstateListing.Content>
  );
}

export default AdditionalInfo;
