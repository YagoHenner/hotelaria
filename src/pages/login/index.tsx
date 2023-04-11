import styles from "./Login.module.css";

export default function Login() {
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
            ></input>
            <input
              className={styles.loginInput}
              placeholder="Senha"
              type="password"
            ></input>
          </div>
            <div className="flex-row" style={{justifyContent: "space-between"}}>
              <div>
              <input type="checkbox" /><label> Lembrar-me</label>
              </div>
              <div>
                Esqueci a minha senha
              </div>
            </div>
            <button className={styles.buttonSubmit}>Acessar plataforma</button>
            <div>
            Não está cadastrado? <a>Criar minha conta</a>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
