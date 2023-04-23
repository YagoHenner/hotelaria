import { CardParentProps } from "../../interfaces/interfaces";
import styles from "./CardParent.module.css";

export default function CardParent({
  children,
  width,
  height,
}: CardParentProps) {
  return (
    <div
      style={{
        width: width ? width : "300px",
        height: height ? height : "300px",
      }}
      className={styles.container}
    >
      {children}
    </div>
  );
}
