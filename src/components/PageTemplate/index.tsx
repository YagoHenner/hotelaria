import MenuLateral from "../MenuLateral";
import styles from "./PageTemplate.module.css";
import { motion } from "framer-motion";

export default function PageTemplate({
  title,
  children,
}: {
  title?: string;
  children: JSX.Element | JSX.Element[];
}) {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100vw",
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };
  return (
    <div>
      <MenuLateral />
      <div className={styles.page}>
        <div className={styles.bar}>
          <div className={styles.title}>{title}</div>
        </div>
        <motion.div
          initial='initial'
          animate='in'
          exit='out'
          variants={pageVariants}
          transition={pageTransition}
          className={styles.children}
        >
          {/* <div className={styles.children}> */}
          {children}
          {/* </div> */}
        </motion.div>
      </div>
    </div>
  );
}
