export default function grade(props: any)
{
    return (
        <div className={`
            grid grid-cols-3 gap-4
        `}>
            {/* Grade */}
            {props.children}
        </div>
    )
}