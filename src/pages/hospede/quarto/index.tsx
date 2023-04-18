import MenuLateral from "../../../components/MenuLateral";
import styles from "./Quarto.module.css";
import PageTemplate from "../../../components/PageTemplate";
import { Quarto } from "../../../types";
import { useLocation } from "react-router-dom";

export default function QuartoPage() {
  const location = useLocation();
  const quartoData = location.state as Quarto;

  return (
    <div>
      <MenuLateral />
      <PageTemplate title={"Detalhes do Quarto"}>
        <div className={styles.fotoDiv}>
          <img src={quartoData.pic}></img>
        </div>
        <div className='flex-row'>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              Quarto {`${quartoData.numero}`}
            </div>
            <div className={styles.sectionDescription}>
              {quartoData.idTipoQuarto.descricao}
            </div>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}
