import { css } from "styled-components";

interface flexProps {
  justify?: string;
  align?: string;
  direction?: string;
  gap?: string;
}

export default function flex({
  justify = "center",
  align = "center",
  direction = "row",
  gap = "0",
}: flexProps) {
  return css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    gap: ${gap};
  `;
}
