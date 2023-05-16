import { UseFormRegister } from "react-hook-form";
import { StRealEstate } from "../../../libs/styles/StRealEstate";

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
    <StRealEstate.Content>
      <div className="contentTitle">{title}</div>
      <RadioInput
        register={register(name, {
          required: "필수 선택 항목입니다",
        })}
        type="radio"
        options={options}
        name={name}
      />
    </StRealEstate.Content>
  );
}

export default AdditionalInfo;
