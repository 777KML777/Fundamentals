export interface LinhaProps {
    children: React.ReactNode
    /* No vídeo essas propriedades aqui ficaram no MenuItem
        url: string 
        icone: any 
        children: any 
        classaName?: string 

        Pergunta, como eu faria já para setar algum valor? Cara muito loko isso 
            É como se fosse um objeto para HTML
    */
}

export default function Linha(props: LinhaProps) {
    return (
        <div
            className={`
                flex flex-wrap justify-center gap-20
            `}
        >
            {props.children}
        </div>
    )
}