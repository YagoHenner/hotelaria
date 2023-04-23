import {
  Bell,
  Chat,
  House,
  IconWeight,
  SignOut,
  SquaresFour,
} from "@phosphor-icons/react";
import styles from "../../../globals/components/MenuLateral/MenuLateral.module.css";
import { Link, useLocation } from "react-router-dom";
import { contexto } from "../../../api/context/contexto";

export const LinksMenuHospede = () => {
  const router = useLocation();
  const page = router.pathname;
  const { logOut } = contexto();
  const styleIcones = (link: string) => {
    if (page === link) {
      return { color: "white", weight: "regular" };
    }
    return { color: "#FFEDD4", weight: "light" };
  };

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <House
            color={styleIcones("/").color}
            size={32}
            weight={styleIcones("/").weight as IconWeight | undefined}
          />
          <span className={styles.span}>Home</span>
        </Link>
      </header>
      <div className={styles.abas}>
        <div className="flex-column">
          <Link to="/" className={styles.link}>
            <Bell color="white" size={32} weight="light" />
            <span className={styles.span}>Notificações</span>
          </Link>
          <Link
            onClick={() => logOut()}
            className={styles.logOut}
            to={"/login"}
          >
            <SignOut
              color="white"
              size={32}
              weight={styleIcones("/").weight as IconWeight | undefined}
            />
            <span className={styles.span}>Sair</span>
          </Link>
        </div>
      </div>
    </>
  );
};
