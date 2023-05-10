import styles from "./Reservas.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import CardParent from "../../../globals/components/CardParent";
import { OcupaçãoDefault } from "../../../dados/data/Ocupações";
import { Link } from "react-router-dom";
import ModalConfirm from "../../../globals/components/ModalConfirm";
import { useEffect, useState } from "react";
import { Endereco, Ocupação } from "../../../globals/types";
import api from "../../../api/axios/api";
import CardHospede from "../../../globals/components/CardHospede";
import { Images } from "../../../dados/data/Images";
import axios from "axios";

type ReservasPenConf = {
  pendentes: Ocupação[];
  confirmadas: Ocupação[];
};

export default function Reservas() {
  const handleConfirmarReserva = async (ocupacao: Ocupação) => {
    try {
      await api
        .put(`/reservas/${ocupacao.id}`, {
          ...ocupacao,
          codConfirmacao: 1,
        })
        .then(() => alert("Reserva confirmada"));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const retorno = error.response?.data as any;
        if (retorno?.show) {
          if (retorno.tipo === "info") {
            alert(retorno.info);
          } else {
            if (retorno.error) {
              alert(retorno.error);
            }
          }
        } else {
          alert("Algo deu errado");
        }
      } else {
        alert("Algo deu errado");
      }
    }
  };
  const [modalSolicitacao, setModalSolicitacao] = useState({
    open: false,
    ocupacao: OcupaçãoDefault,
  });

  const [ocupacoes, setOcupacoes] = useState<ReservasPenConf>();

  const handleCloseSolicitacao = () => {
    setModalSolicitacao({ open: false, ocupacao: OcupaçãoDefault });
  };

  useEffect(() => {
    async function get() {
      const res = await api.get("/reservas");
      setOcupacoes(res.data.ocupacoes);
    }
    get();
    console.log(ocupacoes);
  }, [modalSolicitacao]);
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
            <div className='flex-row space-between'>
              <CardParent>
                <div className='padding'>
                  <div>
                    {Images[modalSolicitacao.ocupacao.idQuarto.id].imagename}
                  </div>
                  <h4>Quarto {modalSolicitacao.ocupacao.idQuarto.numero}</h4>
                  <div>
                    Diária: R$
                    {modalSolicitacao.ocupacao.idQuarto.idTipoQuarto.diaria}
                  </div>
                  <div>
                    Início: {modalSolicitacao.ocupacao.idReserva.dtInicio}
                  </div>
                  <div>Fim: {modalSolicitacao.ocupacao.idReserva.dtFim}</div>
                  <div>
                    Avarias:{" "}
                    {modalSolicitacao.ocupacao.idQuarto.avaria ? "Sim" : "Não"}
                  </div>
                </div>
              </CardParent>
              <CardHospede
                hospede={modalSolicitacao.ocupacao.idReserva.cpfHospede}
              ></CardHospede>
            </div>
          )}
          <button
            className='standardbutton'
            onClick={() => handleConfirmarReserva(modalSolicitacao.ocupacao)}
          >
            Confirmar
          </button>
        </div>
      </ModalConfirm>
    </PageTemplate>
  );
}
