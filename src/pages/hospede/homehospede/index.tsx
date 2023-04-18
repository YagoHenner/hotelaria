import { Link } from "react-router-dom";
import CardQuarto from "../../../components/CardQuarto";
import MenuLateral from "../../../components/MenuLateral";
import { Quartos } from "../../../data/Quartos";
import styles from "./HomeUsuario.module.css";
import PageTemplate from "../../../components/PageTemplate";

export default function HomeHospede() {
  return (
    <div>
      <MenuLateral />
      <PageTemplate title={"Quartos"}>
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
                    title={quarto.nome}
                    pic={quarto.pic}
                    location={quarto.local}
                  />{" "}
                </Link>
              );
            })}
        </div>
      </PageTemplate>
    </div>
  );
}
