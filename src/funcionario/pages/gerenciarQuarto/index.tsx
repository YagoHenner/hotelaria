import styles from "./GerenciarQuarto.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import { useLocation } from "react-router-dom";
import { Gasto, Quarto, User } from "../../../globals/types";
import { Usuarios } from "../../../dados/data/Usuarios";
import ModalConfirm from "../../../globals/components/ModalConfirm";
import { useEffect, useState } from "react";
import { Gastos } from "../../../dados/data/Gastos";
import somarPropriedades from "../../../globals/utils/somarPropriedades";

export default function GerenciarQuarto() {
  //usando usuario exemplo para mostrar teste mas o ideal
  //é pegar pelos dados da reserva e, por ela o hospede
  //atraves de seu cpf
  const location = useLocation();
  const quartoData = location.state as Quarto;
  const supostoHospede = Usuarios[quartoData.id];
  const supostoGasto = [Gastos[1], Gastos[2], Gastos[3]];

  const handleClose = () => {
    setOpenModal(false);
  };

  // useEffect(() => {
  //   async function PegarBackend() {
  //     const res = api.post(`/gastos/${ocupacao.id}`)
  //     gastos = res.data
  //   }
  // })
  const [openModal, setOpenModal] = useState(false);
  return (
    <PageTemplate title={"Gerenciar Quarto"}>
      <h1>Quarto {quartoData.numero}</h1>
      <div className={styles.sections}>
        <div className={styles.quartoSection}>
          Tipo:
          <ul>
            <li>{quartoData.idTipoQuarto.nome}</li>
            <li>Capacidade: {quartoData.idTipoQuarto.capacidade} pessoas</li>
            <li>{quartoData.idTipoQuarto.camaCasal} cama(s) de casal</li>
            <li>{quartoData.idTipoQuarto.camaSolteiro} cama(s) de solteiro</li>
          </ul>
          <div>
            <div>Última limpeza: Data, Funcionário</div>
            <div>Avarias: Nenhuma</div>
            <div>
              Soma dos gastos: R$ {somarPropriedades(supostoGasto, "valor")}
            </div>
            <div>Ações:</div>
            <button
              onClick={() => setOpenModal(true)}
              className="standardbutton"
            >
              Gerar Extrato
            </button>
          </div>
        </div>
        <div className={styles.cardHospede}>
          <div>
            <h3>Hóspede:</h3>
            <div>{supostoHospede.nome}</div>
            <div>Telefone: {supostoHospede.telefone}</div>
            <div>Identificação: {supostoHospede.cpf}</div>
            <div>Endereço:</div>
            <ul>
              <li>{`${supostoHospede.idEndereco.logradouro}, ${supostoHospede.idEndereco.numero}`}</li>
              <li>{supostoHospede.idEndereco.bairro}</li>
              <li>{supostoHospede.idEndereco.cidade}</li>
              <li>{supostoHospede.idEndereco.pais}</li>
            </ul>
            <button className="standardbutton">Realocar hóspede</button>
          </div>
        </div>
        <ModalConfirm
          title={"Extrato detalhadado"}
          handleModalConfirm={function (): {} {
            throw new Error("Function not implemented.");
          }}
          confirmTitle={"Imprimir"}
          openModal={openModal}
          handleClose={handleClose}
        >
          <div>Gastos:</div>
          <div>
            {supostoGasto.map((gasto: Gasto) => {
              return (
                <ul key={gasto.id}>
                  <li>{gasto.descricao}</li>
                  <li>R$ {gasto.valor}</li>
                  <li>Data: {gasto.dtGasto}</li>
                </ul>
              );
            })}
          </div>
        </ModalConfirm>
      </div>
    </PageTemplate>
  );
}
