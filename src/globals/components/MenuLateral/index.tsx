import styles from "./MenuLateral.module.css";
import { contexto } from "../../../api/context/contexto";
import { LinksMenuHospede } from "../../../hospede/components/LinksMenu/linksMenuHospede";
import { LinksMenuFunc } from "../../../funcionario/components/LinksMenu/linksMenuFunc";

export default function MenuLateral() {
  const { tipo } = contexto();
  return (
    <nav className={styles.menu}>
      {tipo === 0 ? (
      <LinksMenuFunc />
      ) : tipo === 1 ? (
        <LinksMenuHospede />
      ) : (
        ""
      )}
    </nav>
  );
}
