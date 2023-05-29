import NumberInputGroup from "./NumberInputGroup";
import { PriceInfoProps } from "../../../typings/detail.type";

function PriceInfo({ type, label, register }: PriceInfoProps) {
  return (
    <>
      <NumberInputGroup type={type} label={label} register={register} />
      <span>만원</span>
    </>
  );
}

export default PriceInfo;
