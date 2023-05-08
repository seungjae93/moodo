import { useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

import palette from "../../../libs/styles/palette";
import flex from "../../../libs/styles/utilFlex";
interface RadioProps {
  id: string;
  label: string;
  value: string;
}
interface InputProps {
  key?: string;
  id?: string;
  label?: string;
  name?: string;
  kind?: "radio" | "text" | "checkbox" | "file";
  register?: UseFormRegisterReturn;
  type?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  options?: RadioProps[];
}

export default function RadioInput({
  label,
  name,
  kind = "radio",
  register,
  type,
  required,
  options,
}: InputProps) {
  // const [showInput, setShowInput] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");

  // const handleInputChange = (value: string) => {
  //   setSelectedOption(value);
  //   setShowInput(value === "날짜 설정");
  // };

  // useEffect(() => {
  //   setSelectedOption("");
  // }, [name]);

  return (
    <div>
      {kind === "radio" ? (
        <StRadioBtnWrap>
          {options &&
            options.map(({ id, label, value }) => (
              <div className="radioBtn" key={id}>
                <input
                  id={id}
                  required={required}
                  {...register}
                  name={name}
                  type={type}
                  value={value}
                  // checked={selectedOption === value}
                  // onClick={() => handleInputChange(value)}
                />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
        </StRadioBtnWrap>
      ) : null}

      {kind === "checkbox" ? (
        <StRadioBtnWrap>
          {options &&
            options.map(({ id, label, value }) => (
              <div className="radioBtn" key={id}>
                <input
                  id={id}
                  required={required}
                  {...register}
                  name={name}
                  type={type}
                  value={value}
                />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
        </StRadioBtnWrap>
      ) : null}

      {kind === "text" ? (
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
            htmlFor={name}
          >
            {label}
          </label>
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            style={{
              width: "80px",
              height: "30px",
              fontSize: "16px",
              fontWeight: "400",
              textAlign: "center",
              border: "1px solid #e2e8f0",
              borderRadius: "0 0.25rem 0.25rem 0",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

const StRadioBtnWrap = styled.div`
  padding-bottom: 15px;
  padding-top: 15px;
  ${flex({ gap: "20px", justify: "" })}
  flex-wrap: wrap;

  .radioBtn {
    font-size: 17px;
    width: 130px;
    height: 35px;
    border: none;
    padding: 0 10px 0 10px;
  }
  .radioBtn input[type="radio"],
  .radioBtn input[type="checkbox"] {
    display: none;
  }
  .radioBtn label {
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
    line-height: 32px;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
  }

  /* hover */
  .radioBtn input[type="radio"]:hover + label,
  .radioBtn input[type="checkbox"]:hover + label {
    background-color: ${palette.gray[6]};
    color: #fff;
  }
  /* Checked */
  .radioBtn input[type="radio"]:checked + label,
  .radioBtn input[type="checkbox"]:checked + label {
    background-color: ${palette.gray[6]};
    color: #fff;
  }
  /* Disabled */
  .radioBtn input[type="radio"] + label,
  .radioBtn input[type="checkbox"] + label {
    border: 2px solid #c4cbcd;
  }
`;
