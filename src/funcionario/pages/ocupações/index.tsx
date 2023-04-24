import styles from "./Ocupações.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import { Link } from "react-router-dom";
import { Quartos } from "../../../dados/data/Quartos";
import CardQuarto from "../../../globals/components/CardQuarto";
import { Images } from "../../../dados/data/Images";

export default function () {
  return (
    <PageTemplate title={"Ocupações"}>
      <div className={styles.divCards}>
        {Quartos &&
          Quartos.map((quarto) => {
            //simulando apenas ocupados
            if (quarto.id % 3 == 0) {
              return (
                <Link
                  key={quarto.id}
                  to={`./${quarto.id}`}
                  state={quarto}
                  className='standardLink'
                >
                  <CardQuarto
                    title={`Quarto ${quarto.numero}`}
                    imagename={Images[quarto.id].imagename}
                    description={"Clique para ver detalhes"}
                  />
                </Link>
              );
            }
          })}
      </div>
    </PageTemplate>
  );
}
