import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contexto } from "../../../api/context/contexto";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const { tipo, signIn } = contexto();

  const navigate = useNavigate();

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
    setIsFormValid(
      password.length >= 10 && event.target.value !== "" && /\W/.test(password)
    );
  };

  useEffect(() => {
    if (tipo === 0) {
      navigate("/funcionario");
    } else if (tipo === 1) {
      navigate("/");
    }
  }, [tipo]);

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
    setIsFormValid(
      event.target.value.length >= 10 &&
        username !== "" &&
        /\W/.test(event.target.value)
    );
  };

  const handleSubmit = (email: string, password: string) => {
    //validar pelo back
    // usando caso teste
    signIn(email, password);
  };

  return (
    <div className={styles.main}>
      <div className={styles.bloco}>
        <div className={styles.foto}></div>
        <div className={styles.divFormulario}>
          <form className={styles.formulario}>
            <h1>Fazer Login</h1>
            <div className="flex-column">
              <input
                className={styles.loginInput}
                placeholder="E-mail"
                type="email"
                value={username}
                onChange={handleUsernameChange}
              ></input>
              <input
                className={styles.loginInput}
                placeholder="Senha"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              ></input>
              <h6>*A senha deve ter 10 caracteres, sendo 1 especial</h6>
            </div>
            <div
              className="flex-row"
              style={{ justifyContent: "space-between" }}
            >
              <div>
                <input type="checkbox" />
                <label> Lembrar-me</label>
              </div>
              <a>Esqueci a minha senha</a>
            </div>
            <button
              type="button"
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
