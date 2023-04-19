import MenuLateral from "../../../components/MenuLateral";
import styles from "./SolicitarReserva.module.css";
import PageTemplate from "../../../components/PageTemplate";
import { Quarto } from "../../../types";
import { useLocation } from "react-router-dom";

export default function SolicitarReserva() {
  const location = useLocation();
  const quartoData = location.state.quarto as Quarto;
  return (
    <div>
      <PageTemplate title={"Solicitar Reserva"}>
        <div>Você está solicitando reserva de:</div>
        <div>
          <div className='flex-column'>
            <span>Quarto {quartoData.numero}</span>
            <span>{quartoData.idTipoQuarto.nome}</span>
            <span>Diária: R${quartoData.idTipoQuarto.diaria}</span>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}
