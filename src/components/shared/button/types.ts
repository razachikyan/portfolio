import { CSSProperties, PropsWithChildren } from "react";

export interface IButtonProps extends PropsWithChildren {
  onClick?: (e: React.FormEvent) => void;
  className?: string;
  CSS?: CSSProperties;
  type?: "button" | "submit" | "reset";
}
