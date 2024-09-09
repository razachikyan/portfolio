export interface INavProps {
  items: { name: string; link: string }[];
  className?: string;
  itemClassName?: string;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
}
