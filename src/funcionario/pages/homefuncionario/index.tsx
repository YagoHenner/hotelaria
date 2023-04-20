import { Link } from "react-router-dom";
import CardQuarto from "../../../globals/components/CardQuarto";
import MenuLateral from "../../../globals/components/MenuLateral";
import { Quartos } from "../../../dados/data/Quartos";
import styles from "./HomeFuncionario.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import { useContext } from "react";
import { ContextoState, contexto } from "../../../api/context/contexto";

export default function HomeFuncionario() {
  const { tipo } = contexto();
  return (
    <div>
      <PageTemplate title={"Funcionario"}>
        <div className={styles.divCards}>
          <button onClick={() => console.log(tipo)}>sidfjsidfj</button>
          {/* {Quartos &&
            Quartos.map((quarto) => {
              return (
                <Link key={quarto.id} to='/' className={styles.link}>
                  <CardQuarto
                    title={quarto.nome}
                    pic={quarto.pic}
                    location={quarto.local}
                  />{" "}
                </Link>
              );
            })} */}
        </div>
      </PageTemplate>
    </div>
  );
}
