import { css } from "styled-components";

import { flexProps } from "../../typings/UI.types";

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
