import PageTemplate from "../../../globals/components/PageTemplate";
import { Quarto } from "../../../globals/types";
import { useLocation } from "react-router-dom";
import { contexto } from "../../../api/context/contexto";
import CardQuarto from "../../../globals/components/CardQuarto";
import { DateTime } from "luxon";
import styles from "./SolicitarReserva.module.css";
import ConsoleButton from "../../../globals/utils/consoleButton";
import CardParent from "../../../globals/components/CardParent";

export default function SolicitarReserva() {
  const location = useLocation();
  const quartoData = location.state.quarto as Quarto;
  const startDate = location.state.startDate;
  const endDate = location.state.endDate;
  const data1 = DateTime.fromFormat(startDate, "dd/MM");
  const data2 = DateTime.fromFormat(endDate, "dd/MM");
  const diff = data2.diff(data1, "days");

  const { user } = contexto();

  return (
    <PageTemplate title={"Solicitar Reserva"}>
      {/* <ConsoleButton prop={diff.days}></ConsoleButton> */}
      <div style={{ maxWidth: "90%" }}>
        <div className="flex-row space-between">
          <div className="flex-column">
            <div>Você está solicitando reserva de:</div>

            <CardQuarto
              title={`Quarto ${quartoData.numero}`}
              pic={quartoData.pic}
              description={quartoData.idTipoQuarto.nome}
            ></CardQuarto>
            <CardParent>
              <div className={styles.cardFinanceiro}>
                <div className="flex-row space-between">
                  <span>Diária:</span>
                  <span>R$ {quartoData.idTipoQuarto.diaria}</span>
                </div>
                <div className="flex-row space-between">
                  <span>Início:</span>
                  <span>{startDate}</span>
                </div>
                <div className="flex-row space-between">
                  <span>Fim:</span>
                  <span>{endDate}</span>
                </div>
                <div className="flex-row space-between">
                  <span>Estimado:</span>
                  <span>R$ {diff.days * quartoData.idTipoQuarto.diaria}</span>
                </div>
              </div>
            </CardParent>
          </div>
          <div className={styles.dadosUser}>
            <label htmlFor="user">Seu nome</label>
            <input
              id="user"
              style={{ width: "500px" }}
              placeholder={`${user?.nome}`}
            ></input>
            <label htmlFor="cpf">CPF/Identificação</label>
            <input
              id="cpf"
              style={{ width: "500px" }}
              placeholder={`${user?.cpf}`}
            ></input>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              style={{ width: "500px" }}
              placeholder={`${user?.email}`}
            ></input>
            <label htmlFor="telefone">Telefone</label>
            <input
              id="telefone"
              style={{ width: "500px" }}
              placeholder={`${user?.telefone}`}
            ></input>
            <button style={{ width: "200px" }} className="standardbutton">
              Solicitar
            </button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
