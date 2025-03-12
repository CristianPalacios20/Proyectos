import { useState } from "react";

const LoginForm = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [comoInvitado, setComoInvitado] = useState(false);
  const [loading, setLoading] = useState(false);

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (comoInvitado) {
      console.log("Iniciando sesión como invitado...");
      // Aquí podrías redirigir o autenticar como invitado
      setTimeout(() => setLoading(false), 2000); // Simulación de carga
    } else {
      console.log("Iniciando sesión con:", { usuario, contraseña });
      // Aquí iría la lógica de autenticación normal
      setTimeout(() => setLoading(false), 2000); // Simulación de carga
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="login-form">
      {!comoInvitado && (
        <>
          <label>
            Usuario:
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </label>

          <label>
            Contraseña:
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </label>
        </>
      )}

      <label>
        <input
          type="checkbox"
          checked={comoInvitado}
          onChange={(e) => setComoInvitado(e.target.checked)}
        />
        Iniciar sesión como invitado
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Iniciando sesión..." : "Iniciar sesión"}
      </button>
    </form>
  );
};

export default LoginForm;

