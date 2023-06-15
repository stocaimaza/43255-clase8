import { useState } from "react"
import InicioSesion from "./InicioSesion"
import LoginButton from "./LoginButton"

/* RENDER PROPS */
//Es una técnica de composición de componentes que me permite enviar la interfaz a ser renderizada en una función aparte. 



const Login = () => {
    const [usuario, setUsuario] = useState(null);

    const manejadorLogin = () => {
        setUsuario("Samuel");
    }

  return (
    <div>
        {
            usuario ? (<InicioSesion nombre={usuario}  />) : (<LoginButton loguear={manejadorLogin}  />)
        }
    </div>
  )
}

export default Login