import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type UsuarioLogin from "../../../models/UsuarioLogin";
import { AuthContext } from "../../../contexts/AuthContext";
import { ClipLoader } from "react-spinners";

interface FormLoginProps {
  onLoginSuccess?: () => void;
  close: () => void;
  onSave?: () => void;
}

function FormLogin({ onLoginSuccess, close }: FormLoginProps) {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      onLoginSuccess?.(); // aqui fecha o modal
      navigate("/");
    }
  }, [usuario, navigate, onLoginSuccess]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="relative flex justify-center h-auto place-items-center font-bold p-10">
      {/* BOTÃO X */}
      <button
        type="button"
        onClick={close}
        className="absolute top-4 right-4 bg-emerald-500 text-emerald-800 
                   px-3 py-1 rounded hover:bg-emerald-600 hover:text-white"
      >
        X
      </button>

      <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
        <h2 className="text-slate-900 text-5xl">Entrar</h2>

        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuário"
            className="border-2 border-slate-700 rounded p-2"
            value={usuarioLogin.usuario || ""}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-slate-700 rounded p-2"
            value={usuarioLogin.senha || ""}
            onChange={atualizarEstado}
          />
        </div>

        <button
          type="submit"
          className="rounded bg-emerald-500 flex justify-center
                     hover:bg-emerald-600 text-white w-1/2 py-2"
        >
          {isLoading ? <ClipLoader color="#ffffff" size={24} /> : <span>Entrar</span>}
        </button>

        <p>
          Ainda não tem uma conta?{" "}
          <Link to="/cadastro" className="text-emerald-800 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  );
}

export default FormLogin