import styles from "./Reservas.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import CardParent from "../../../globals/components/CardParent";
import { Ocupações } from "../../../dados/data/Ocupações";
import { Link } from "react-router-dom";
import ModalConfirm from "../../../globals/components/ModalConfirm";
import { useState } from "react";
export default function Reservas() {
  const [openModalSolicitacao, setOpenModalSolicitacao] = useState(false);
  const [openModalQuarto, setOpenModalQuarto] = useState(false);

  const handleCloseSolicitacao = () => {
    setOpenModalSolicitacao(false);
  };

  const handleCloseQuarto = () => {
    setOpenModalQuarto(false);
  };
  return (
    <PageTemplate title={"Reservas"}>
      <div className="flex-row">
        <CardParent height="600px">
          <div className={styles.tituloDado}>Solicitações Pendentes</div>
          <div className="flex-column padding">
            {Ocupações.map((item) => {
              if (item.codConfirmacao === 0) {
                return (
                  <Link
                    to=""
                    onClick={() => setOpenModalSolicitacao(true)}
                    className="standardLink"
                    key={item.id}
                  >
                    <div className="flex-row space-between">
                      <span>Quarto {item.idQuarto.numero}</span>
                      <span>{item.idReserva.dtInicio}</span>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </CardParent>
        <CardParent height="600px">
          <div className={styles.tituloDado}>Reservas Confirmadas</div>
          <div className="flex-column padding">
            {Ocupações.map((item) => {
              if (item.codConfirmacao === 1) {
                return (
                  <Link
                    to={`/funcionario/ocupacoes/${item.idQuarto.id}`}
                    className="standardLink"
                    key={item.id}
                    state={item.idQuarto}
                  >
                    <div className="flex-row space-between">
                      <span>Quarto {item.idQuarto.numero}</span>
                      <span>{item.idReserva.dtInicio}</span>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </CardParent>
      </div>
      <ModalConfirm
        openModal={openModalSolicitacao}
        handleClose={handleCloseSolicitacao}
        title={"Detalhes da Solicitação"}
        confirmTitle={"Confirmar"}
      >
        <div></div>
      </ModalConfirm>
    </PageTemplate>
  );
}
