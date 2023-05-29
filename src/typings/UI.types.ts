import { ReactNode } from "react";
//button
export interface StyledButtonProps {
  children?: ReactNode;
  fs?: string;
  bc?: string;
  color?: string;
  ma?: string;
  fw?: string;
  activeBc?: string;
  hoverBc?: string;
  size?: string;
  type?: string;
  [key: string]: any;
}

export interface flexProps {
  justify?: string;
  align?: string;
  direction?: string;
  gap?: string;
}
