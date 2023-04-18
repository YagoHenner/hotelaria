import MenuLateral from "../../../components/MenuLateral";
import styles from "./Quarto.module.css";
import PageTemplate from "../../../components/PageTemplate";
import { Quarto } from "../../../types";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function QuartoPage() {
  const location = useLocation();
  const quartoData = location.state as Quarto;

  return (
    <div>
      <MenuLateral />
      <PageTemplate title={"Detalhes do Quarto"}>
        <img width={750} src={quartoData.pic}></img>
        <div>Quarto: {quartoData?.id}</div>
      </PageTemplate>
    </div>
  );
}
