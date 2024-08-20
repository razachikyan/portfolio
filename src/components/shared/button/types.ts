import { CSSProperties, PropsWithChildren } from "react";

export interface IButtonProps extends PropsWithChildren {
  onClick: () => void;
  className?: string;
  CSS?: CSSProperties;
}
