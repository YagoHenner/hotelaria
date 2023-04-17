// import { useState, useEffect } from "react";

// export const rememberMe = () => {
//   const [lembrar, setLembrar] = useState(
//       () => {
//     const storage = window.localStorage.getItem("lembrar");
//     return storage ? JSON.parse(storage) :
//   false
//   }
// );

// // const handleChange = (event: any) => {
// //   const checked = event.target.checked;
// //   setLembrar(checked);
// //   localStorage.setItem("lembrar", checked);
// //   if (!checked) {
// //     localStorage.removeItem("lembrar");
// //   }
// // };

// export function InputLembrar() {
//   //   useEffect(() => {
//   //     window.localStorage.setItem("lembrar", JSON.stringify(lembrar));
//   //   }, [lembrar]);
//   return (
//     <div>
//       {/* <input type='checkbox' checked={lembrar} /> */}
//       <label> Lembrar-me</label>
//     </div>
//   );
// }

import React from "react";
import { ContextoType } from "../types";

const ContextoState = React.createContext<ContextoType>({
  lembrar: false,
  ativarLembrar: () => {},
});

export default ContextoState;
