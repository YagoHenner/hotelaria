import { CardQuartoProps } from "../../../globals/interfaces/interfaces";
import style from "./CardQuarto.module.css";
import React from "react";

export default function CardQuarto({ title, pic, description }: CardQuartoProps) {
  return (
    <div className={style.container}>
      <div className={style.pic}>
        <img src={pic}></img>
      </div>
      <div className={style.section}>
        <h1 className={style.sectionTitle}>{title}</h1>
        <div className={style.sectionDescription}>{description}</div>
      </div>
    </div>
  );
}
