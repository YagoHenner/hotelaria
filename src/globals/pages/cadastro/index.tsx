import styles from "./Cadastro.module.css";
import PageTemplate from "../../../globals/components/PageTemplate";
import { useForm } from "react-hook-form";
import { User } from "../../types";
import { InputHook } from "../../components/InputHook";
import { ChangeEvent } from "react";
import axios from "axios";
import api from "../../../api/axios/api";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<User>({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (data: User) => {
    try {
      await api
        .post("/auth", {
          nome: data.nome,
          email: data.email,
          password: data.senha,
          cpf: data.cpf,
          telefone: data.telefone,
          endereco: data.idEndereco,
        })
        .then(() => navigate("/login"));
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
    <PageTemplate title={"Cadastre-se"}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formCadastro}>
        <InputHook
          name='nome'
          label='Nome'
          type='text'
          placeholder='Digite seu nome'
          control={control}
          width='600px'
          obrigatorio={true}
        />
        <div className='flex-row space-between'>
          <InputHook
            name='email'
            label='E-mail'
            type='email'
            placeholder='Digite seu e-mail'
            control={control}
            width='400px'
            obrigatorio={true}
          />
          <InputHook
            name='senha'
            label='Senha'
            type='password'
            placeholder='Digite sua senha'
            control={control}
            obrigatorio={true}
          />
        </div>
        <div className='flex-row space-between'>
          <InputHook
            name='telefone'
            label='Telefone'
            type='tel'
            placeholder='Digite seu telefone'
            control={control}
            width='200px'
            obrigatorio={true}
          />
          <InputHook
            name='cpf'
            label='Identificação (CPF)'
            type='text'
            placeholder='Digite seu CPF'
            control={control}
            obrigatorio={true}
          />
        </div>

        <InputHook
          name='idEndereco.logradouro'
          label='Logradouro (com número de apartamento e bloco, se necessário)'
          type='text'
          placeholder='Digite seu logradouro'
          control={control}
          width='600px'
          obrigatorio={true}
        />
        <InputHook
          name='idEndereco.bairro'
          label='Bairro'
          type='text'
          placeholder='Digite seu bairro'
          control={control}
          width='300px'
          obrigatorio={true}
        />
        <InputHook
          name='idEndereco.cidade'
          label='Cidade'
          type='text'
          placeholder='Digite sua cidade'
          width='300px'
          control={control}
          obrigatorio={true}
        />
        <InputHook
          name='idEndereco.numero'
          label='Número'
          type='number'
          placeholder='Digite o número do endereço'
          control={control}
          width='200px'
          obrigatorio={true}
        />
        <InputHook
          name='idEndereco.pais'
          label='País'
          type='text'
          placeholder='Digite seu país'
          control={control}
          width='400px'
          obrigatorio={true}
        />
        <button className='standardbutton' type='submit'>
          Cadastrar-se
        </button>
      </form>
    </PageTemplate>
  );
}
