import NumberInputGroup from "./NumberInputGroup";
import { UseFormRegister } from "react-hook-form";

interface PriceInfoProps {
  type: "deposit" | "monthly" | "price" | "maintenanceCost";
  label: string;
  register: UseFormRegister<any>;
}

function PriceInfo({ type, label, register }: PriceInfoProps) {
  return (
    <>
      <NumberInputGroup type={type} label={label} register={register} />
      <span>만원</span>
    </>
  );
}

export default PriceInfo;
