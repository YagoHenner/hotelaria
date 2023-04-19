import MenuLateral from "../../../components/MenuLateral";
import styles from "./Quarto.module.css";
import PageTemplate from "../../../components/PageTemplate";
import { Quarto } from "../../../types";
import { useLocation } from "react-router-dom";

const barChildren = () => {
  return <button>bunda</button>;
};

export default function QuartoPage() {
  const location = useLocation();
  const quartoData = location.state as Quarto;

  return (
    <div>
      <PageTemplate title={"Detalhes do Quarto"}>
        <div className={styles.fotoDiv}>
          <img src={quartoData.pic}></img>
        </div>
        <div className='flex-row' style={{ maxWidth: "90%" }}>
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
                    03/08 até 10/08
                  </div>
                  <div className={styles.qtdDiaria}>
                    <span>Diária:</span>
                    R${quartoData.idTipoQuarto.diaria}
                  </div>
                </div>
                <button className={styles.buttonReserva}>
                  Solicitar Reserva
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}
