import { CardQuartoProps } from "../../interfaces/interfaces";
import CardParent from "../CardParent";
import style from "./CardQuarto.module.css";
import React from "react";

export default function CardQuarto({
  title,
  pic,
  description,
}: CardQuartoProps) {
  return (
    <CardParent>
      <div className={style.pic}>
        <img src={pic}></img>
      </div>
      <div className={style.section}>
        <h1 className={style.sectionTitle}>{title}</h1>
        <div className={style.sectionDescription}>{description}</div>
      </div>
    </CardParent>
  );
}
