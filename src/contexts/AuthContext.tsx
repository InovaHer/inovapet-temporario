import { createContext, useState, type ReactNode } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    //Inicializando o Estado usuario(Guardar os dados do usuario autenticado)
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome:"",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    });

    //Inicializar o Estado isLoading (Exibir e Ocultar o loader no Formulario de login)
    const [isLoading, setIsloading] = useState<boolean>(false);

    //Implementação da Função de login (Autenticação no Backend)
    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsloading(true);

        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            ToastAlerta("Usuário logado com sucesso!", "sucesso");
        }catch (error) {
            ToastAlerta(
                "Os dados do usuário estão inconsistentes!",
                "erro")
        }finally {
            setIsloading(false);
        }
    }
        
        //Implementação da função de logout (desconectar o usuario do sistema)
        function handleLogout() {
            setUsuario({
                id: 0,
                nome:"",
                usuario: "",
                senha: "",
                foto: "",
                token: ""
            });
        }

    return (
        <AuthContext.Provider
            value={{ usuario,handleLogin, handleLogout, isLoading }}>
            {children}      
        </AuthContext.Provider>
    )
    
}