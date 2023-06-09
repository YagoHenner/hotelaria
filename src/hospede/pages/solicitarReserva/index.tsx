import PageTemplate from "../../../globals/components/PageTemplate";
import { Quarto } from "../../../globals/types";
import { useLocation } from "react-router-dom";
import { contexto } from "../../../api/context/contexto";
import CardQuarto from "../../../globals/components/CardQuarto";
import { DateTime } from "luxon";
import styles from "./SolicitarReserva.module.css";
import ConsoleButton from "../../../globals/utils/consoleButton";
import CardParent from "../../../globals/components/CardParent";
import { Images } from "../../../dados/data/Images";
import api from "../../../api/axios/api";
import axios from "axios";

export default function SolicitarReserva() {
  const location = useLocation();
  const quartoData = location.state.quarto as Quarto;
  const startDate = location.state.startDate;
  const endDate = location.state.endDate;
  const data1 = DateTime.fromFormat(startDate, "dd/MM");
  const data2 = DateTime.fromFormat(endDate, "dd/MM");
  const diff = data2.diff(data1, "days");

  const { user } = contexto();

  const handleSolicitar = async (
    quartoData: any,
    startDate: any,
    endDate: any,
    user: any
  ) => {
    try {
      await api
        .post("/reservas", {
          codConfirmacao: 0,
          idQuarto: quartoData,
          idReserva: {
            id: 0,
            dtInicio: startDate,
            dtFim: endDate,
            confirmada: 0,
            cpfHospede: user,
          },
        })
        .then(() => alert("Solicitação criada"));
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
  return (
    <PageTemplate title={"Solicitar Reserva"}>
      {/* <ConsoleButton prop={diff.days}></ConsoleButton> */}
      <div style={{ maxWidth: "90%" }}>
        <div>Você está solicitando reserva de:</div>
        <div className="flex-row space-between">
          <div className="flex-row">
            <CardQuarto
              title={`Quarto ${quartoData.numero}`}
              imagename={Images[quartoData.id].imagename}
              description={quartoData.idTipoQuarto.nome}
            ></CardQuarto>
            <CardParent>
              <div className={styles.cardFinanceiro}>
                <div className="flex-row space-between">
                  <span>Diária:</span>
                  <span>R$ {quartoData.idTipoQuarto.diaria}</span>
                </div>
                <div className="flex-row space-between">
                  <span>Início:</span>
                  <span>{startDate}</span>
                </div>
                <div className="flex-row space-between">
                  <span>Fim:</span>
                  <span>{endDate}</span>
                </div>
                <div className="flex-row space-between">
                  <span>Estimado:</span>
                  <span>R$ {diff.days * quartoData.idTipoQuarto.diaria}</span>
                </div>
              </div>
            </CardParent>
          </div>
          <div className={styles.dadosUser}>
            <label htmlFor="user">Seu nome</label>
            <input
              id="user"
              style={{ width: "500px" }}
              placeholder={`${user?.nome}`}
            ></input>
            <label htmlFor="cpf">CPF/Identificação</label>
            <input
              id="cpf"
              style={{ width: "500px" }}
              placeholder={`${user?.cpf}`}
            ></input>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              style={{ width: "500px" }}
              placeholder={`${user?.email}`}
            ></input>
            <label htmlFor="telefone">Telefone</label>
            <input
              id="telefone"
              style={{ width: "500px" }}
              placeholder={`${user?.telefone}`}
            ></input>
            <button
              style={{ width: "200px" }}
              onClick={() =>
                handleSolicitar(quartoData, startDate, endDate, user)
              }
              className="standardbutton"
            >
              Solicitar
            </button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
