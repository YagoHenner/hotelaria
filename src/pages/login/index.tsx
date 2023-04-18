import styles from "./Login.module.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContextoState from "../../context/contexto";
import determinarUsuario from "../../utils/determinarUsuario";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
    setIsFormValid(
      password.length >= 10 && event.target.value !== "" && /\W/.test(password)
    );
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
    setIsFormValid(
      event.target.value.length >= 10 &&
        username !== "" &&
        /\W/.test(event.target.value)
    );
  };

  function handleSubmit(email: string, password: string) {
    //validar pelo back
    // usando caso teste
    const res = determinarUsuario(email, password);
    if (res) {
      if (res.tipo === 0) {
        navigate("/");
      } else {
        navigate("/funcionario");
      }
    } else {
      alert("Dados errados");
    }
  }

  const { lembrar, ativarLembrar } = useContext(ContextoState);

  // const handleCheckBoxChange = () => {
  //   setLembrar(!lembrar);
  //   localStorage.setItem("lembrar", !lembrar);
  //   console.log(localStorage.getItem("lembrar"));
  // };

  return (
    <div className={styles.main}>
      <div className={styles.bloco}>
        <div className={styles.foto}></div>
        <div className={styles.divFormulario}>
          <form
            className={styles.formulario}
            onSubmit={() => handleSubmit(username, password)}
          >
            <h1>Fazer Login</h1>
            <div className='flex-column'>
              <input
                className={styles.loginInput}
                placeholder='E-mail'
                type='email'
                value={username}
                onChange={handleUsernameChange}
              ></input>
              <input
                className={styles.loginInput}
                placeholder='Senha'
                type='password'
                value={password}
                onChange={handlePasswordChange}
              ></input>
              <h6>*A senha deve ter 10 caracteres, sendo 1 especial</h6>
            </div>
            <div
              className='flex-row'
              style={{ justifyContent: "space-between" }}
            >
              <div>
                <input
                  type='checkbox'
                  checked={lembrar}
                  onChange={ativarLembrar}
                />
                <label> Lembrar-me</label>
              </div>
              <a>Esqueci a minha senha</a>
            </div>
            <button
              type='button'
              disabled={!isFormValid}
              className={styles.buttonSubmit}
              onClick={() => handleSubmit(username, password)}
            >
              Acessar plataforma
            </button>
            <div>
              Não está cadastrado? <a>Criar minha conta</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
