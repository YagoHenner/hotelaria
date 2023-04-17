import MenuLateral from "../MenuLateral";
import styles from "./PageTemplate.module.css";

export default function PageTemplate({
  title,
  children,
}: {
  title?: string;
  children: JSX.Element;
}) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MenuLateral />
      <div className={styles.page}>
        <div className={styles.bar}>
          <h1>{title}</h1>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}
