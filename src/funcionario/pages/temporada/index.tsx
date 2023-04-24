import styles from "./TemporadasPage.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import CardParent from "../../../globals/components/CardParent";
import { Temporadas } from "../../../dados/data/Temporadas";
import ConsoleButton from "../../../globals/utils/consoleButton";
import { TiposQuarto } from "../../../dados/data/TiposQuarto";
import { DateTime } from "luxon";
import { Temporada } from "../../../globals/types";

export default function TemporadasPage() {
  return (
    <PageTemplate title={"Temporadas"}>
      <div className={styles.divTemporadas}>
        {Temporadas.map((item: any) => {
          const aumento = 1 + item.porcentagem;
          const dataInicio = DateTime.fromFormat(
            item.dtInicio,
            "yyyy-MM-dd"
          ).toFormat("dd/MM/yyyy");
          const dataFim = DateTime.fromFormat(
            item.dtFim,
            "yyyy-MM-dd"
          ).toFormat("dd/MM/yyyy");
          return (
            <CardParent key={item.id}>
              <div className="flex-column padding">
                <h3>{item.nomeTemporada}</h3>
                <span>{`${dataInicio} até ${dataFim}`}</span>
                <span>Aumento: {item.porcentagem * 100}%</span>
                <span>Prioridade: {item.prioridade ? "Sim" : "Não"}</span>
                <div>Preços novos:</div>
                <ul>
                  <li>
                    Solteiro: {(TiposQuarto[0].diaria * aumento).toFixed(2)}
                  </li>
                  <li>Casal: {(TiposQuarto[1].diaria * aumento).toFixed(2)}</li>
                  <li>
                    Família: {(TiposQuarto[2].diaria * aumento).toFixed(2)}
                  </li>
                </ul>
              </div>
            </CardParent>
          );
        })}
      </div>
    </PageTemplate>
  );
}
