import { Link } from "react-router-dom";
import CardQuarto from "../../../globals/components/CardQuarto";
import MenuLateral from "../../../globals/components/MenuLateral";
import { Quartos } from "../../../dados/data/Quartos";
import styles from "./HomeUsuario.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import { useCallback, useEffect, useState } from "react";
import { TiposQuarto } from "../../../dados/data/TiposQuarto";

export default function HomeHospede() {
  const getInitialStartDate = useCallback(() => {
    const date = new Date();
    return date;
  }, []);

  const getInitialEndDate = useCallback(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  }, []);

  const [startDate, setStartDate] = useState(getInitialStartDate());
  const [endDate, setEndDate] = useState(getInitialEndDate());
  const [tipoFiltro, setTipoFiltro] = useState("");

  useEffect(() => {
    setStartDate(getInitialStartDate());
    setEndDate(getInitialEndDate());
  }, [getInitialStartDate, getInitialEndDate]);

  return (
    <div>
      <PageTemplate title={"Quartos Disponíveis"}>
        <div className={styles.filtros}>
          De:{" "}
          <input
            type='date'
            value={startDate?.toISOString().slice(0, 10)}
            onChange={(event: any) =>
              setStartDate(new Date(event.target.value))
            }
          ></input>
          Até:{" "}
          <input
            type='date'
            value={endDate.toISOString().slice(0, 10)}
            onChange={(event: any) => {
              setEndDate(new Date(event.target.value));
            }}
          ></input>
          Tipo:{" "}
          <select
            value={tipoFiltro}
            onChange={(event) => setTipoFiltro(event.target.value)}
          >
            {TiposQuarto &&
              TiposQuarto.map((item) => {
                return (
                  <option key={item.id} value={item.nome}>
                    {item.nome}
                  </option>
                );
              })}
          </select>
        </div>

        <div className={styles.divCards}>
          {Quartos &&
            Quartos.map((quarto) => {
              return (
                <Link
                  key={quarto.id}
                  to={`./quarto/${quarto.id}`}
                  state={{
                    quarto: quarto,
                    startDate: startDate,
                    endDate: endDate,
                  }}
                  className={styles.link}
                >
                  <CardQuarto
                    title={`Quarto ${quarto.numero}`}
                    pic={quarto.pic}
                    location={quarto.idTipoQuarto.descricao}
                  />
                </Link>
              );
            })}
        </div>
      </PageTemplate>
    </div>
  );
}
