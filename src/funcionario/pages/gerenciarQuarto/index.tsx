import styles from "./GerenciarQuarto.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import { useLocation } from "react-router-dom";
import { Quarto, User } from "../../../globals/types";
import { Usuarios } from "../../../dados/data/Usuarios";
import escolherObjetoAleatorio from "../../../globals/utils/escolherObjAleatorio";


export default function GerenciarQuarto() {
  //usando usuario exemplo para mostrar teste mas o ideal
  //é pegar pelos dados da reserva e, por ela o hospede
  //atraves de seu cpf
  const supostoHospede = escolherObjetoAleatorio(Usuarios)
  const location = useLocation();
  const quartoData = location.state as Quarto;
  return (
    <div>
      <PageTemplate title={"Gerenciar Quarto"}>
        <h1>Quarto {quartoData.numero}</h1>
        <div>Dados da reserva:
          <div>Ocupante: {supostoHospede.nome}</div>
          <div>Telefone: {supostoHospede.telefone}</div>
          <div>Identificação: {supostoHospede.cpf}</div>
          <div>Endereço:
            <div>{`${supostoHospede.idEndereco.logradouro}, ${supostoHospede.idEndereco.numero}`}</div>
            <div>{supostoHospede.idEndereco.bairro}</div>
            <div>{supostoHospede.idEndereco.cidade}</div>
            <div>{supostoHospede.idEndereco.pais}</div>
          </div>
        </div>
        <div>Gastos registrados:
        <button>Gerar Extrato</button>
        </div>

      </PageTemplate>
    </div>
  );
}
