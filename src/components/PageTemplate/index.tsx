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
    <div>
      <MenuLateral />
      <div className={styles.page}>
        <div className={styles.bar}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}
