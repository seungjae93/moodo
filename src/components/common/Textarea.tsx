import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";
import palette from "../../libs/styles/palette";

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function TextArea({
  label,
  name,
  register,
  ...rest
}: TextAreaProps) {
  return (
    <TextAreaContainer>
      {label ? <TextAreaLabel htmlFor={name}>{label}</TextAreaLabel> : null}
      <TextAreaInput id={name} {...register} {...rest} />
    </TextAreaContainer>
  );
}

const TextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 20px;
`;

const TextAreaLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: #374151;
  margin-right: 30px;
`;

const TextAreaInput = styled.textarea`
  width: 700px;
  height: 200px;
  margin-top: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #4b5563;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: none;
  min-height: 3rem;
  &:focus {
    outline: none;
    border-color: ${palette.gray[1]};
    box-shadow: 0 0 0 0.2rem rgba(2, 33, 73, 0.25);
  }
`;
