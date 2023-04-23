import MenuLateral from "../../../globals/components/MenuLateral";
import styles from "./Quarto.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import { Quarto } from "../../../globals/types";
import { Link, useLocation } from "react-router-dom";
import { DateTime } from "luxon";

export default function QuartoPage() {
  const location = useLocation();
  const quartoData = location.state.quarto as Quarto;
  const startDate = location.state.startDate;
  const endDate = location.state.endDate;

  return (
    <PageTemplate title={"Detalhes do Quarto"}>
      <div className={styles.fotoDiv}>
        <img src={quartoData.pic}></img>
      </div>
      <div className="flex-row" style={{ maxWidth: "90%" }}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            Quarto {`${quartoData.numero}`}
          </div>
          <div className={styles.sectionDescription}>
            {quartoData.idTipoQuarto.descricao}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.dadosQuarto}>
            <div className={styles.cardDadosQuarto}>
              <div className={styles.tituloDado}>Capacidade</div>
              <div className={styles.qtdDado}>
                {quartoData.idTipoQuarto.capacidade}
              </div>
            </div>
            <div className={styles.cardDadosQuarto}>
              <div className={styles.tituloDado}>Camas de Casal</div>
              <div className={styles.qtdDado}>
                {quartoData.idTipoQuarto.camaCasal}
              </div>
            </div>
            <div className={styles.cardDadosQuarto}>
              <div className={styles.tituloDado}>Camas de Solteiro</div>
              <div className={styles.qtdDado}>
                {quartoData.idTipoQuarto.camaSolteiro}
              </div>
            </div>
            <div className={styles.cardDadosReserva}>
              <div className={styles.tituloDado}>Dados da Reserva</div>
              <div className={styles.reservaDescription}>
                <div className={styles.dataEscolhida}>
                  <span>Data escolhida:</span>
                  {startDate} até {endDate}
                </div>
                <div className={styles.qtdDiaria}>
                  <span>Diária:</span>
                  R${quartoData.idTipoQuarto.diaria}
                </div>
              </div>
              <Link
                to={`./solicitar-reserva`}
                className={styles.buttonReserva}
                state={{
                  quarto: quartoData,
                  startDate: startDate,
                  endDate: endDate,
                }}
              >
                Solicitar Reserva
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
