import PageTemplate from "../../../globals/components/PageTemplate";
import { Quarto } from "../../../globals/types";
import { useLocation } from "react-router-dom";
import { contexto } from "../../../api/context/contexto";
import CardQuarto from "../../../globals/components/CardQuarto";
import { DateTime } from "luxon";
import styles from "./SolicitarReserva.module.css";
import ConsoleButton from "../../../globals/utils/consoleButton";

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
      <div>Você está solicitando reserva de:</div>
      {/* <ConsoleButton prop={diff.days}></ConsoleButton> */}
      <div>
        <div className="flex-row">
          <CardQuarto
            title={`Quarto ${quartoData.numero}`}
            pic={quartoData.pic}
            description={quartoData.idTipoQuarto.nome}
          ></CardQuarto>
          <div>
            <span>Diária: R${quartoData.idTipoQuarto.diaria}</span>
            <span>
              Período: De
              {startDate}
              até
              {endDate}
              Gasto mínimo estimado: R$
              {diff.days * quartoData.idTipoQuarto.diaria}
            </span>
          </div>
        </div>
        <div className={styles.dadosUser}>
          <label htmlFor="user">Seu nome</label>
          <input
            id="user"
            style={{ width: "600px" }}
            placeholder={`${user?.nome}`}
          ></input>
          <label htmlFor="cpf">CPF/Identificação</label>
          <input
            id="cpf"
            style={{ width: "600px" }}
            placeholder={`${user?.cpf}`}
          ></input>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            style={{ width: "600px" }}
            placeholder={`${user?.email}`}
          ></input>
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            style={{ width: "600px" }}
            placeholder={`${user?.telefone}`}
          ></input>
        </div>
      </div>
    </PageTemplate>
  );
}
