import PageTemplate from "../../../globals/components/PageTemplate";
import { Quarto } from "../../../globals/types";
import { useLocation } from "react-router-dom";
import { contexto } from "../../../api/context/contexto";
import CardQuarto from "../../../globals/components/CardQuarto";

export default function SolicitarReserva() {
  const location = useLocation();
  const quartoData = location.state.quarto as Quarto;
  const startDate = location.state.startDate as Date;
  const endDate = location.state.endDate as Date;
  const { user } = contexto();

  return (
    <PageTemplate title={"Solicitar Reserva"}>
      <div>Você está solicitando reserva de:</div>
      <div>
        <div className="flex-row">
          <CardQuarto
            title={`Quarto ${quartoData.numero}`}
            pic={quartoData.pic}
            description={quartoData.idTipoQuarto.nome}
          ></CardQuarto>
          <span>Diária: R${quartoData.idTipoQuarto.diaria}</span>
          <span>
            Período: De {startDate.toLocaleDateString()} à{" "}
            {endDate.toLocaleDateString()}
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
