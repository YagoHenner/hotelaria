import styles from "./GerenciarQuarto.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import { Link, useLocation } from "react-router-dom";
import { Gasto, Quarto, User } from "../../../globals/types";
import { Usuarios } from "../../../dados/data/Usuarios";
import ModalConfirm from "../../../globals/components/ModalConfirm";
import { useEffect, useState } from "react";
import { Gastos } from "../../../dados/data/Gastos";
import somarPropriedades from "../../../globals/utils/somarPropriedades";
import { Quartos } from "../../../dados/data/Quartos";

export default function GerenciarQuarto() {
  //usando usuario exemplo para mostrar teste mas o ideal
  //é pegar pelos dados da reserva e, por ela o hospede
  //atraves de seu cpf
  const location = useLocation();
  const quartoData = location.state as Quarto;
  const supostoHospede = Usuarios[quartoData.id];
  const supostoGasto = [Gastos[1], Gastos[2], Gastos[3]];

  const handleCloseExtrato = () => {
    setOpenModalExtrato(false);
  };

  const handleCloseRealocar = () => {
    setOpenModalRealocar(false);
  };

  // useEffect(() => {
  //   async function PegarBackend() {
  //     const res = api.post(`/gastos/${ocupacao.id}`)
  //     gastos = res.data
  //   }
  // })
  const [openModalExtrato, setOpenModalExtrato] = useState(false);
  const [openModalRealocar, setOpenModalRealocar] = useState(false);

  return (
    <PageTemplate title={"Gerenciar Quarto"}>
      <h1>Quarto {quartoData.numero}</h1>
      <div className="flex-row">
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
              onClick={() => setOpenModalExtrato(true)}
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
            <button
              onClick={() => setOpenModalRealocar(true)}
              className="standardbutton"
            >
              Realocar hóspede
            </button>
          </div>
        </div>
        <ModalConfirm
          //Modal de Gerar Extrato
          title={"Extrato detalhado"}
          handleModalConfirm={function (): {} {
            throw new Error("Function not implemented.");
          }}
          confirmTitle={"Imprimir"}
          openModal={openModalExtrato}
          handleClose={handleCloseExtrato}
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
        <ModalConfirm
          //Modal de Realocar hóspede
          title={"Realocar Hóspede"}
          handleModalConfirm={function (): {} {
            throw new Error("Function not implemented.");
          }}
          confirmTitle={"Realocar"}
          openModal={openModalRealocar}
          handleClose={handleCloseRealocar}
        >
          <div>
            {Quartos &&
              Quartos.map((quarto) => {
                //simulando apenas vagos
                if (quarto.id % 2 == 0) {
                  return (
                    <a
                      onClick={() => console.log("click")}
                      key={quarto.id}
                      className="standardLink"
                    >
                      <ul>
                        <li>Quarto {quarto.numero}</li>
                        <li style={{ fontSize: "13px" }}>
                          {quarto.idTipoQuarto.nome}
                          {quarto.idTipoQuarto.id ==
                            quartoData.idTipoQuarto.id &&
                            ", igual o escolhido pelo hóspede"}
                        </li>
                      </ul>
                    </a>
                  );
                }
              })}
          </div>
        </ModalConfirm>
      </div>
    </PageTemplate>
  );
}
