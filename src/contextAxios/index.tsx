import { createContext, useLayoutEffect } from "react";
import api from "../services/api";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AxiosError } from "axios";
import { User } from "../types";

type Auth = {
  user: User | null;
  tipo: number;
  signIn: (email: string, senha: string) => Promise<void>;
  logOut: () => void;
};

export const AuthContext = createContext({} as Auth);

export function AuthProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [user, setUser] = useLocalStorage("user", null);
  const [tipo, setTipo] = useLocalStorage("tipo", 3029);
  const [token, setToken] = useLocalStorage("token", "");

  useLayoutEffect(() => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          const data = error.response.data as any;
          if (
            data.code === "token.expired" ||
            data.code === "No session provided."
          ) {
            logOut();
            return Promise.resolve(error.config);
          }
        }

        return Promise.reject(error);
      }
    );
  }, []);

  async function signIn(login: string, senha: string) {
    const data = await api.post("/rota", {
      login,
      senha,
    });
    const { token, usuario } = data.data;
    setUser(usuario);
    setToken(token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  async function logOut() {
    setUser(null);
    api.defaults.headers.common["Authorization"] = `Bearer `;
    setToken("");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        tipo,
        signIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
