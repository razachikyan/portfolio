import { PropsWithChildren } from "react";

export interface IModalProps extends PropsWithChildren {
  onClose: () => void;
  open: boolean;
  className?: string;
  icon?: string;
}
