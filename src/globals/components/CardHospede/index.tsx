import { CardHospedeProps } from "../../interfaces/interfaces";
import { Endereco } from "../../types";
import CardParent from "../CardParent";

export default function CardHospede({
  hospede,
  width,
  height,
  children,
}: CardHospedeProps) {
  return (
    <CardParent width={width ?? "300px"} height={height ?? "300px"}>
      <div className='padding'>
        <h3>Hóspede:</h3>
        <div>{hospede.nome}</div>
        <div>Telefone: {hospede.telefone}</div>
        <div>Identificação: {hospede.cpf}</div>
        <div>Endereço:</div>
        {hospede.idEndereco && (
          <ul>
            {hospede.idEndereco.map((item: Endereco) => (
              <>
                <li>{`${item.logradouro}, ${item.numero}`}</li>
                <li>Bairro: {item.bairro}</li>
                <li>Cidade: {item.cidade}</li>
                <li>País: {item.pais}</li>
              </>
            ))}
          </ul>
        )}
        {children}
      </div>
    </CardParent>
  );
}
