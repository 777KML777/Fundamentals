export default function caixa(props: any)
{
    // flex flex-col p-4
    return (
        <div className={`
             flex  p-4
            bg-red-400 rounded-xl
        `}>
            {props.children}
        </div>
    )
}