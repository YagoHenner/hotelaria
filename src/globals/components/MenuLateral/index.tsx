import {
  Bell,
  Chat,
  House,
  IconWeight,
  SignOut,
  SquaresFour,
} from "@phosphor-icons/react";
import styles from "./MenuLateral.module.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ContextoState, contexto } from "../../../api/context/contexto";

export default function MenuLateral() {
  const router = useLocation();
  const page = router.pathname;
  const { tipo, logOut } = contexto();
  const styleIcones = (link: string) => {
    if (page === link) {
      return { color: "white", weight: "regular" };
    }
    return { color: "#FFEDD4", weight: "light" };
  };

  return (
    <nav className={styles.menu}>
      {tipo === 0 ? (
        <>
          <header className={styles.header}>
            <Link to='/funcionario' className={styles.link}>
              <House
                color={styleIcones("/funcionario").color}
                size={32}
                weight={
                  styleIcones("/funcionario").weight as IconWeight | undefined
                }
              />
              <span className={styles.span}>Home</span>
            </Link>
          </header>
          <div className={styles.abas}>
            <div className='flex-column'>
              <Link to='/funcionario/adicionar' className={styles.link}>
                <Bell color='white' size={32} weight='light' />
                <span className={styles.span}>Notificações</span>
              </Link>
              <Link to='/funcionario' className={styles.link}>
                <SquaresFour
                  color={styleIcones("/funcionario").color}
                  size={32}
                  weight={
                    styleIcones("/funcionario").weight as IconWeight | undefined
                  }
                />
                <span className={styles.span}>Span</span>
              </Link>
              <Link to='/funcionario' className={styles.link}>
                <Chat
                  color={styleIcones("/funcionario").color}
                  size={32}
                  weight={
                    styleIcones("/funcionario").weight as IconWeight | undefined
                  }
                />
                <span className={styles.span}>Span</span>
              </Link>
              <Link
                onClick={() => logOut()}
                className={styles.logOut}
                to={"/login"}
              >
                <SignOut
                  color='white'
                  size={32}
                  weight={styleIcones("").weight as IconWeight | undefined}
                />
                <span className={styles.span}>Sair</span>
              </Link>
            </div>
          </div>
        </>
      ) : tipo === 1 ? (
        <>
          <header className={styles.header}>
            <Link to='/' className={styles.link}>
              <House
                color={styleIcones("").color}
                size={32}
                weight={styleIcones("").weight as IconWeight | undefined}
              />
              <span className={styles.span}>Home</span>
            </Link>
          </header>
          <div className={styles.abas}>
            <div className='flex-column'>
              <Link to='/' className={styles.link}>
                <Bell color='white' size={32} weight='light' />
                <span className={styles.span}>Notificações</span>
              </Link>
              <Link to='/' className={styles.link}>
                <SquaresFour
                  color={styleIcones("").color}
                  size={32}
                  weight={styleIcones("").weight as IconWeight | undefined}
                />
                <span className={styles.span}>Span</span>
              </Link>
              <Link to='/' className={styles.link}>
                <Chat
                  color={styleIcones("").color}
                  size={32}
                  weight={styleIcones("").weight as IconWeight | undefined}
                />
                <span className={styles.span}>Span</span>
              </Link>
              <Link
                onClick={() => logOut()}
                className={styles.logOut}
                to={"/login"}
              >
                <SignOut
                  color='white'
                  size={32}
                  weight={styleIcones("").weight as IconWeight | undefined}
                />
                <span className={styles.span}>Sair</span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </nav>
  );
}
