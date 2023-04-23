import PageTemplate from "../../../globals/components/PageTemplate";
import { Quarto } from "../../../globals/types";
import { useLocation } from "react-router-dom";
import { contexto } from "../../../api/context/contexto";
import CardQuarto from "../../../globals/components/CardQuarto";
import { DateTime } from "luxon";
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
        <div>
          <label htmlFor="user">Seu nome</label>
          <input id="user" placeholder={`${user?.nome}`}></input>
        </div>
      </div>
    </PageTemplate>
  );
}
