import imagem1 from "../images/quartos/1.png";
import imagem2 from "../images/quartos/2.png";
import imagem3 from "../images/quartos/3.png";
import imagem4 from "../images/quartos/4.png";
import imagem5 from "../images/quartos/5.png";
import imagem6 from "../images/quartos/6.png";
import imagem7 from "../images/quartos/7.png";
import imagem8 from "../images/quartos/8.png";
import imagem9 from "../images/quartos/9.png";
import imagem10 from "../images/quartos/10.png";
import imagem11 from "../images/quartos/11.png";
import imagem12 from "../images/quartos/12.png";
import imagem13 from "../images/quartos/13.png";
import imagem14 from "../images/quartos/14.png";
import imagem15 from "../images/quartos/15.png";
import imagem16 from "../images/quartos/16.png";

import { TiposQuarto } from "./TiposQuarto";
import escolherObjetoAleatorio from "../../globals/utils/escolherObjAleatorio";

export const Quartos = [
  {
    id: 0,
    status: 1,
    numero: 101,
    imagename: imagem1,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 1,
    status: 1,
    numero: 102,
    imagename: imagem2,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 2,
    status: 1,
    numero: 103,
    imagename: imagem3,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 3,
    imagename: imagem4,
    status: 1,
    numero: 104,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 4,
    imagename: imagem5,
    status: 1,
    numero: 201,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 5,
    imagename: imagem6,
    status: 1,
    numero: 202,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 6,
    imagename: imagem7,
    status: 1,
    numero: 203,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 7,
    imagename: imagem8,
    status: 1,
    numero: 204,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 8,
    imagename: imagem9,
    status: 1,
    numero: 301,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 9,
    imagename: imagem10,
    status: 1,
    numero: 302,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 10,
    imagename: imagem11,
    status: 1,
    numero: 303,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 11,
    imagename: imagem12,
    status: 1,
    numero: 304,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 12,
    imagename: imagem13,
    status: 1,
    numero: 401,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 13,
    imagename: imagem14,
    status: 1,
    numero: 402,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 14,
    imagename: imagem15,
    status: 1,
    numero: 403,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
  {
    id: 15,
    imagename: imagem16,
    status: 1,
    numero: 404,
    idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
  },
];
