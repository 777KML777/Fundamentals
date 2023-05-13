import {useState} from "react";
import Botoes from "./Botoes";

export default function Painel() 
{
    const [nome, setNome] = useState("Inicial");

    function mudarValor(novo: string)
    {
        alert(novo);
        setNome(novo);
    }
    
    return (
        <div className={
            `
                flex flex-col gap-5 items-center
            `
        }
        >
            <h1>{nome}</h1>
            <Botoes mudarValor={mudarValor}/>
        </div>
    )
}