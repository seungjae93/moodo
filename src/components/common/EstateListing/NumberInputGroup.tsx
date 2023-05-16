import RadioInput from "./RadioInput";
import { UseFormRegister } from "react-hook-form";
interface NumberInputGroupProps {
  type:
    | "deposit"
    | "monthly"
    | "price"
    | "maintenanceCost"
    | "supplyArea"
    | "exclusiveArea"
    | "numOfRoom"
    | "numOfBath"
    | "numOfFloor"
    | "floor"
    | "dong"
    | "lowestFloor"
    | "highestFloor";
  label: string;
  register: UseFormRegister<any>;
}

export default function NumberInputGroup({
  type,
  label,
  register,
}: NumberInputGroupProps) {
  return (
    <>
      <RadioInput
        register={register(type, {
          required: "필수 선택 항목입니다",
          pattern: {
            value: /^[0-9]*$/,
            message: "숫자만 입력해주세요",
          },
        })}
        kind="text"
        type="text"
        label={label}
        name={type}
      />
    </>
  );
}
