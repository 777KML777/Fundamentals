import Caixa from "@/components/examples/filhos/caixa";
import Grade from "@/components/examples/filhos/grade";
import Pagina from "@/components/templates/pagina";

export default function paginaFilhos()
{
    return (
        <Pagina>
            <Grade>
            <Caixa>#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>#3</Caixa>             
            <Caixa>#4</Caixa>
            <Caixa>#5</Caixa>
            <Caixa>#6</Caixa>             
            <Caixa>
                <span>7</span>
                <span>7</span>
                <span>7</span>
            </Caixa>
            <Caixa>#8</Caixa>
            <Caixa>#9</Caixa>             
        </Grade>
        </Pagina>
    )
}