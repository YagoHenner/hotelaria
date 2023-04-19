import { Link } from "react-router-dom";
import CardQuarto from "../../../components/CardQuarto";
import MenuLateral from "../../../components/MenuLateral";
import { Quartos } from "../../../data/Quartos";
import styles from "./HomeUsuario.module.css";
import PageTemplate from "../../../components/PageTemplate";

export default function HomeHospede() {
  return (
    <div>
      <PageTemplate title={"Quartos Disponíveis"}>
        <div className={styles.divCards}>
          {Quartos &&
            Quartos.map((quarto) => {
              return (
                <Link
                  key={quarto.id}
                  to={`/quarto/${quarto.id}`}
                  state={quarto}
                  className={styles.link}
                >
                  <CardQuarto
                    title={`Quarto ${quarto.numero}`}
                    pic={quarto.pic}
                    location={quarto.idTipoQuarto.descricao}
                  />
                </Link>
              );
            })}
        </div>
      </PageTemplate>
    </div>
  );
}
