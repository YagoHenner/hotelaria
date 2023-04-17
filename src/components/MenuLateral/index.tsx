import {
  Chat,
  House,
  IconWeight,
  MapPin,
  SignOut,
  SquaresFour,
} from "@phosphor-icons/react";
import styles from "./MenuLateral.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MenuLateral() {
  const router = useLocation();
  const page = router.pathname;
  const styleIcones = (link: string) => {
    if (page === link) {
      return { color: "white", weight: "regular" };
    }
    return { color: "grey", weight: "light" };
  };

  return (
    <nav className={styles.menu}>
      <header className={styles.header}>
        <Link to='/' className={styles.link}>
          <House
            color={styleIcones("/").color}
            size={32}
            weight={styleIcones("/").weight as IconWeight | undefined}
          />
          <span className={styles.span}>Home</span>
        </Link>
      </header>
      <div className={styles.abas}>
        <div className='flex-column'>
          <Link to='/' className={styles.link}>
            <MapPin color='white' size={32} weight='light' />
            <span className={styles.span}>Span</span>
          </Link>
          <Link to='/' className={styles.link}>
            <SquaresFour
              color={styleIcones("/").color}
              size={32}
              weight={styleIcones("/").weight as IconWeight | undefined}
            />
            <span className={styles.span}>Span</span>
          </Link>
          <Link to='/' className={styles.link}>
            <Chat
              color={styleIcones("/").color}
              size={32}
              weight={styleIcones("/").weight as IconWeight | undefined}
            />
            <span className={styles.span}>Span</span>
          </Link>
          <Link to='/' className={styles.logOut}>
            <SignOut
              color='white'
              size={32}
              weight={styleIcones("/").weight as IconWeight | undefined}
            />
            <span className={styles.span}>Sair</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
