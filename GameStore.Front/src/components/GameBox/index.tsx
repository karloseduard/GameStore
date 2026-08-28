interface NameInterface {
    name: string
}



export default function GameBox({ name }: NameInterface) {
    return (
        <div className="">
            {name}
        </div>
    )
}