import { useContador } from "./useContador"
import { useFetch } from "./useFetch"

const CustomHooks = () => {
    const {contador, aumentarContador, disminuirContador} = useContador(1, 10)
    const data = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
        <h2>CustomHooks: Contador</h2>
        <button onClick={disminuirContador}> restar </button>
        <strong> {contador} </strong>
        <button onClick={aumentarContador}> sumar </button>

        <hr />

        <h2>Fetch de Datos:  </h2>
        {data && data.map((usuario)=> <p key={usuario.id}> {usuario.name} </p>)}


    </div>
  )
}

export default CustomHooks