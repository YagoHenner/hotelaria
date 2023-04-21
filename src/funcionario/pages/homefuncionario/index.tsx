import styles from "./HomeFuncionario.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";

export default function HomeFuncionario() {
  return (
    <div>
      <PageTemplate title={"Funcionario"}>
        <div className={styles.divCards}>
        </div>
      </PageTemplate>
    </div>
  );
}
