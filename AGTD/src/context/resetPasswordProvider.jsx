import { createContext, useState, useContext } from "react";

const ResetPasswordContext = createContext();

export const ResetPasswordProvider = ({ children }) => {
  const [correo, setCorreo] = useState("");
  const [codigo, setCodigo] = useState(["", "", "", ""]);
  const [userId, setUserId] = useState("");

  return (
    <ResetPasswordContext.Provider
      value={{ correo, setCorreo, codigo, setCodigo, userId, setUserId }}
    >
      {children}
    </ResetPasswordContext.Provider>
  );
};

export const useResetPassword = () => useContext(ResetPasswordContext);
