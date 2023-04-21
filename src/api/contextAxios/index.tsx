// import { createContext, useLayoutEffect } from "react";
// import api from "../axios/api";
// import { useLocalStorage } from "../hooks/useLocalStorage";
// import { AxiosError } from "axios";
// import { User } from "../../globals/types";


//   useLayoutEffect(() => {
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     api.interceptors.response.use(
//       (response) => {
//         return response;
//       },
//       (error: AxiosError) => {
//         if (error.response?.status === 401) {
//           const data = error.response.data as any;
//           if (
//             data.code === "token.expired" ||
//             data.code === "No session provided."
//           ) {
//             logOut();
//             return Promise.resolve(error.config);
//           }
//         }

//         return Promise.reject(error);
//       }
//     );
//   }, []);

//   async function signIn(login: string, senha: string) {
//     const data = await api.post("/rota", {
//       login,
//       senha,
//     });
//     const { token, usuario } = data.data;
//     setUser(usuario);
//     setToken(token);
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   }

//   async function logOut() {
//     setUser(null);
//     api.defaults.headers.common["Authorization"] = `Bearer `;
//     setToken("");
//   }