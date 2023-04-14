import styles from "./Login.module.css";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
  }, [rememberMe, username, password]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleRememberMeChange = (event: any) => {
    const checked = event.target.checked;
    setRememberMe(checked);
    localStorage.setItem("rememberMe", checked);
    if (!checked) {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
  };

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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //validar pelo back
    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.bloco}>
        <div className={styles.foto}></div>
        <div className={styles.divFormulario}>
          <form className={styles.formulario} onSubmit={handleSubmit}>
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
                  disabled={!isFormValid}
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label> Lembrar-me</label>
              </div>
              <a>Esqueci a minha senha</a>
            </div>
            <button
              type='button'
              disabled={!isFormValid}
              className={styles.buttonSubmit}
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
