import type { UseFormRegisterReturn } from "react-hook-form";
interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone";
  register?: UseFormRegisterReturn;
  autoComplete: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

export default function Input({
  label,
  name,
  kind = "text",
  register,
  type,
  placeholder,
  required,
}: InputProps) {
  return (
    <div>
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
      {kind === "text" ? (
        <div>
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            placeholder={placeholder}
            style={{
              width: "100%",
              marginBottom: "0.5rem",
              padding: "0.5rem",
              border: "1px solid #e2e8f0",
              borderRadius: "0 0.25rem 0.25rem 0",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              color: "#718096",
            }}
          />
        </div>
      ) : null}

      {kind === "phone" ? (
        <div
          style={{
            display: "flex",
            borderRadius: "0.375rem",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.5rem",
              padding: "0.6rem",
              borderRadius: "0.25rem 0 0 0.25rem",
              border: "1px solid #e2e8f0",
              borderColor: "#e2e8f0 #fff #e2e8f0 #e2e8f0",
              backgroundColor: "#f7fafc",
              color: "#718096",
              userSelect: "none",
              fontSize: "0.875rem",
            }}
          >
            +82
          </span>
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
