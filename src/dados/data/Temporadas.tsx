import { DateTime } from "luxon";

const anoAtual = DateTime.now().year;

export const Temporadas = [
  {
    id: 0,
    nomeTemporada: "Carnaval",
    porcentagem: 0.2, // porcentagem de aumento no preço das reservas durante o Carnaval
    dtInicio: DateTime.fromISO(`${anoAtual}-01-01`)
      .plus({ weeks: 6, days: 5 })
      .toISODate(), // data de início do Carnaval (sexta-feira antes da Quaresma)
    dtFim: DateTime.fromISO(`${anoAtual}-01-01`)
      .plus({ weeks: 7, days: 1 })
      .toISODate(), // data de fim do Carnaval (quarta-feira de cinzas)
    prioridade: true, // se essa temporada tem prioridade sobre outras
  },
  {
    id: 1,
    nomeTemporada: "Réveillon",
    porcentagem: 0.3, // porcentagem de aumento no preço das reservas durante o Réveillon
    dtInicio: `${anoAtual}-12-28`, // data de início da temporada de Réveillon
    dtFim: `${anoAtual + 1}-01-02`, // data de fim da temporada de Réveillon
    prioridade: true, // se essa temporada tem prioridade sobre outras
  },
  {
    id: 2,
    nomeTemporada: "Férias escolares de julho",
    porcentagem: 0.1, // porcentagem de aumento no preço das reservas durante as férias escolares de julho
    dtInicio: `${anoAtual}-07-01`, // data de início das férias escolares de julho
    dtFim: `${anoAtual}-07-31`, // data de fim das férias escolares de julho
    prioridade: false, // se essa temporada tem prioridade sobre outras
  },
  {
    id: 3,
    nomeTemporada: "Forró Caju",
    porcentagem: 0.15,
    dtInicio: `${anoAtual}-06-28`,
    dtFim: `${anoAtual}-06-30`,
    prioridade: true,
  },
];
