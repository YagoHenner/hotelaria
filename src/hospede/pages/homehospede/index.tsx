import { Link } from "react-router-dom";
import CardQuarto from "../../../globals/components/CardQuarto";
import MenuLateral from "../../../globals/components/MenuLateral";
import { Quartos } from "../../../dados/data/Quartos";
import styles from "./HomeHospede.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import { useCallback, useEffect, useState } from "react";
import { TiposQuarto } from "../../../dados/data/TiposQuarto";
import { DateTime } from "luxon";

export default function HomeHospede() {
  // const getInitialStartDate = useCallback(() => {
  //   const date = new Date();
  //   return date;
  // }, []);

  // const getInitialEndDate = useCallback(() => {
  //   const date = new Date();
  //   date.setDate(date.getDate() + 7);
  //   return date;
  // }, []);

  const [startDate, setStartDate] = useState<DateTime>(DateTime.local());
  const [endDate, setEndDate] = useState<DateTime>(
    DateTime.local().plus({ days: 7 })
  );
  const [tipoFiltro, setTipoFiltro] = useState("");

  // useEffect(() => {
  //   setStartDate(getInitialStartDate());
  //   setEndDate(getInitialEndDate());
  // }, [getInitialStartDate, getInitialEndDate]);

  return (
    <PageTemplate title={"Quartos Disponíveis"}>
      <div className={styles.filtros}>
        De:{" "}
        <input
          type='date'
          value={startDate.toISODate() ?? ""}
          onChange={(event: any) =>
            setStartDate(DateTime.fromISO(event.target.value))
          }
        ></input>
        Até:{" "}
        <input
          type='date'
          value={endDate.toISODate() ?? ""}
          onChange={(event: any) => {
            setEndDate(DateTime.fromISO(event.target.value));
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
                  startDate: startDate.toFormat("dd/MM"),
                  endDate: endDate.toFormat("dd/MM"),
                }}
                className='standardLink'
              >
                <CardQuarto
                  title={`Quarto ${quarto.numero}`}
                  imagename={quarto.imagename}
                  description={quarto.idTipoQuarto.descricao}
                />
              </Link>
            );
          })}
      </div>
    </PageTemplate>
  );
}
