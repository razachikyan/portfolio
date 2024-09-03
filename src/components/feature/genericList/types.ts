import { IEntry } from "../../../types/shared";

export interface GenericListProps<T extends IEntry> {
  items: T[];
}