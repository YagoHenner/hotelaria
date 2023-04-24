import styles from "./Reservas.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import CardParent from "../../../globals/components/CardParent";
import { Ocupações } from "../../../dados/data/Ocupações";
import { Link } from "react-router-dom";
import ModalConfirm from "../../../globals/components/ModalConfirm";
import { useEffect, useState } from "react";
import { Ocupação } from "../../../globals/types";
import api from "../../../api/axios/api";

type ReservasPenConf = {
  pendentes: Ocupação[];
  confirmadas: Ocupação[];
};
export default function Reservas() {
  const [modalSolicitacao, setModalSolicitacao] = useState({
    open: false,
    ocupacao: Ocupações[0],
  });

  const [ocupacoes, setOcupacoes] = useState<ReservasPenConf>();

  const handleCloseSolicitacao = () => {
    setModalSolicitacao({ open: false, ocupacao: Ocupações[0] });
  };

  useEffect(() => {
    async function get() {
      const res = await api.get("/reservas");
      setOcupacoes(res.data.ocupacoes);
    }
    get();
    console.log(ocupacoes);
  }, []);
  return (
    <PageTemplate title={"Reservas"}>
      <div className='flex-row'>
        <CardParent height='600px'>
          <div className={styles.tituloDado}>Solicitações Pendentes</div>
          <div className='flex-column padding'>
            {ocupacoes?.pendentes &&
              ocupacoes.pendentes.map((item: any) => {
                return (
                  <Link
                    to=''
                    onClick={() =>
                      setModalSolicitacao({
                        open: true,
                        ocupacao: item,
                      })
                    }
                    className='standardLink'
                    key={item.id}
                  >
                    <div className='flex-row space-between'>
                      <span>Quarto {item.idQuarto.numero}</span>
                      <ul>
                        <li>
                          {item.idReserva.dtInicio} a {item.idReserva.dtFim}
                        </li>
                      </ul>
                    </div>
                  </Link>
                );
              })}
          </div>
        </CardParent>
        <CardParent height='600px'>
          <div className={styles.tituloDado}>Reservas Confirmadas</div>
          <div className='flex-column padding'>
            {ocupacoes?.confirmadas.map((item: Ocupação) => {
              return (
                <Link
                  to={`/funcionario/ocupacoes/${item.idQuarto.id}`}
                  className='standardLink'
                  key={item.id}
                  state={item.idQuarto}
                >
                  <div className='flex-row space-between'>
                    <span>Quarto {item.idQuarto.numero}</span>
                    <ul>
                      <li>
                        {item.idReserva.dtInicio} a {item.idReserva.dtFim}
                      </li>
                    </ul>
                  </div>
                </Link>
              );
            })}
          </div>
        </CardParent>
      </div>
      <ModalConfirm
        openModal={modalSolicitacao.open}
        handleClose={handleCloseSolicitacao}
        title={"Detalhes da Solicitação"}
        confirmTitle={"Confirmar"}
      >
        <div>
          {modalSolicitacao.ocupacao && (
            <div>
              <div>Quarto {modalSolicitacao.ocupacao.idQuarto.numero}</div>
              <div>{modalSolicitacao.ocupacao.idQuarto.id}</div>
            </div>
          )}
        </div>
      </ModalConfirm>
    </PageTemplate>
  );
}
