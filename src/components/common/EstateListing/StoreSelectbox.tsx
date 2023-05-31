import { useState, useEffect, ChangeEvent } from "react";
interface Option {
  value: string;
  label: string;
}

interface StoreSelectBoxProps {
  label?: string;
  options?: Option[];
  onChange?: (selectedValue: string) => void;
}

export function StoreSelectbox({
  label,
  options,
  onChange,
}: StoreSelectBoxProps) {
  const [mainSelectValue, setMainSelectValue] = useState("");
  const [SubSelectValue, setSubSelectValue] = useState("");
  const [subCategories, setSubCategories] = useState<Option[]>([]);

  const mainHandleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setMainSelectValue(value);
    if (onChange) {
      onChange(value);
    }
  };
  const subHandleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSubSelectValue(value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <label
        style={{
          display: "block",
          fontSize: "16px",
          textAlign: "center",
          fontWeight: "400",
          color: "#90A0AE",
          width: "100px",
          flexWrap: "nowrap",
          overflow: "hidden",
        }}
      >
        {label}
      </label>
      <select
        style={{ width: "115px", height: "30px" }}
        value={mainSelectValue}
        onChange={mainHandleChange}
      >
        {options?.map((option) => (
          <option
            style={{
              fontSize: "14px",
              fontWeight: "400",
              textAlign: "center",
            }}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {subCategories.length > 0 && (
        <>
          <div className="marginLeft">|</div>
          <select
            style={{ width: "115px", height: "30px" }}
            value={SubSelectValue}
            onChange={subHandleChange}
          >
            {subCategories.map((subOption) => (
              <option
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
                key={subOption.value}
                value={subOption.value}
              >
                {subOption.label}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}
