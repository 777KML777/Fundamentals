import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function evento() {

    const [valor, setValor] = useState(24);
    function executar() {
        console.log("Fui chamado de dentro do executarHook()");
    }

    function executarHook() {
        setValor(valor + 1);
        executar();

    }
    return (
        <div className={`
        flex flex-col gap-4 items-center justify-center
        bg-black text-white h-screen

        `}>
            <span className="text-3xl"><b>Valor: </b>{valor}</span>

            <div className={
                `
                    flex gap-5
                `
            }>
                <button onClick={executarHook}>
                    <IconPlus />
                </button>
                <button onClick={executarHook}>
                    <IconMinus />
                </button>
            </div>

        </div>
    )
}