import MenuLateral from "../../../globals/components/MenuLateral";
import styles from "./SolicitarReserva.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import { Quarto } from "../../../globals/types";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import ContextoState from "../../../api/context/contexto";

export default function SolicitarReserva() {
  const location = useLocation();
  const quartoData = location.state.quarto as Quarto;
  const { user } = useContext(ContextoState);
  return (
    <div>
      <PageTemplate title={"Solicitar Reserva"}>
        <div>Você está solicitando reserva de:</div>
        <div>
          <div className='flex-column'>
            <span>Quarto {quartoData.numero}</span>
            <span>{quartoData.idTipoQuarto.nome}</span>
            <span>Diária: R${quartoData.idTipoQuarto.diaria}</span>
            <span>Usuario: {user?.nome}</span>
          </div>
        </div>
      </PageTemplate>
    </div>
  );
}
