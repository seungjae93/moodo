import RadioInput from "./RadioInput";
import { NumberInputGroupProps } from "../../../typings/detail.type";

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
        })}
        kind="text"
        type="text"
        label={label}
        name={type}
      />
    </>
  );
}
