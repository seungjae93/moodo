interface StoreSelectBoxProps {
  label: string;
  options: Array<{ value: string; label: string }>;
  register: any;
}
export function StoreSelectbox({
  label,
  options,
  register,
}: StoreSelectBoxProps) {
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
      <select style={{ width: "115px", height: "30px" }} {...register}>
        {options.map((option) => (
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
    </div>
  );
}
