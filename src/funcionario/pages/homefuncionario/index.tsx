import styles from "./HomeFuncionario.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";

export default function HomeFuncionario() {
  return (
    <PageTemplate title={"Funcionario"}>
      <div className={styles.divCards}></div>
    </PageTemplate>
  );
}
