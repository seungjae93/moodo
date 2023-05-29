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
