import type { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";

interface InputProps {
  id?: string;
  label: string;
  name?: string;
  kind?: "radio" | "text" | "checkbox";
  register?: UseFormRegisterReturn;
  type?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
}

export default function RadioInput({
  id,
  label,
  value,
  name,
  kind = "radio",
  register,
  type,
  required,
}: InputProps) {
  return (
    <div>
      {kind === "radio" ? (
        <StRadioBtnWrap>
          <div className="radioBtn">
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
        </StRadioBtnWrap>
      ) : null}

      {kind === "text" ? (
        <div
          style={{
            display: "flex",
            borderRadius: "0.375rem",
          }}
        >
          <label
            style={{
              marginBottom: "0.6rem",
              display: "block",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#4a5568",
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
              width: "100%",
              marginBottom: "0.5rem",
              paddingLeft: "0.75rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              border: "1px solid #e2e8f0",
              borderRadius: "0 0.25rem 0.25rem 0",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              color: "#718096",
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

const StRadioBtnWrap = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;

  .radioBtn {
    font-size: 17px;
    width: 150px;
    height: 35px;
    border: none;
    padding: 0 10px 0 10px;
  }
  .radioBtn input[type="radio"] {
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
  .radioBtn input[type="radio"]:hover + label {
    background: ${palette.gray[6]};
    color: #fff;
  }
  /* Checked */
  .radioBtn input[type="radio"]:checked + label {
    background: ${palette.gray[6]};
    color: #fff;
  }
  /* Disabled */
  .radioBtn input[type="radio"] + label {
    border: 2px solid #c4cbcd;
  }
`;
