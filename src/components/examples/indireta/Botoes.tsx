export interface BotoesProps {
    mudarValor: (novo: string) => void
}

export default function Botoes(props: BotoesProps)
{
    return (
        <div className={
            `
                flex gap-5
            `
        }
        
        >
            <button
                className="botao"
                onClick={() => props.mudarValor("João foi alterado!!!")}
            >
                João
            </button>
            <button
                className="botao"
                onClick={() => props.mudarValor("Leonardo foi alterado!!!")}
            >
                Leonardo
            </button>
            <button
                className="botao"
                onClick={() => props.mudarValor("Pedro foi alterado!!!")}
            >
                Pedro
            </button>

        </div>
    )
}