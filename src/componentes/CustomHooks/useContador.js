import { useState } from "react";
//useContador: creamos nuestro propio hook para contar productos. 


export const useContador = (valorInicial, valorMaximo) => {
    const [contador, setContador] = useState(valorInicial);

    const aumentarContador = () => {
        if(contador < valorMaximo) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if(contador > valorInicial) {
            setContador(contador - 1);
        }
    }

    return {contador, aumentarContador, disminuirContador}
}