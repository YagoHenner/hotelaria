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
        </div>
      </PageTemplate>
    </div>
  );
}
