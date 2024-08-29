import classNames from "classnames";
import { IImageProps } from "./types";

import styles from "./styles.css";

export const Image = ({
  src,
  alt,
  size,
  className = "",
}: IImageProps): JSX.Element => {
  const width = size ? (typeof size === "number" ? size : size.width) : "100%";
  const height = size
    ? typeof size === "number"
      ? size
      : size.height
    : "100%";

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNames(styles.image, className)}
    />
  );
};
