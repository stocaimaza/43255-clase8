import Articulos from "./componentes/Articulos/Articulos"
import CustomHooks from "./componentes/CustomHooks/CustomHooks"

const App = () => {
  return (
    <>
    <h1>Blog de Gatitos</h1>

    <h2>Noticias</h2>
    
    <Articulos img={"https://placekitten.com/200/287"} titulo={"Alimentos Nuevos"}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis atque vitae quas debitis dolorem nostrum ut quod, aspernatur, at corrupti, reprehenderit praesentium velit recusandae aut natus. Minima sequi atque modi!</p>
      <strong>Tiempo de lectura 3 minutos </strong>
    </Articulos>

    <h2> Recetas Para Gatitos </h2>

    <Articulos img={"https://placekitten.com/200/138"} titulo={"Vacunas Felinas"}>
      <ul>
        <li>Carnes</li>
        <li>Vegetales</li>
        <li>Lácteos</li>
      </ul>
    </Articulos>

    <hr />

    <CustomHooks/>





    </>
  )
}

export default App