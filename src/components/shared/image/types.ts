export interface IImageProps {
  src: string;
  alt: string;
  size?: number | { width: number, height: number }
  className?: string;
}
