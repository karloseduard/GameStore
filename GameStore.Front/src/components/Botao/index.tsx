import { type ReactElement } from "react"



interface BotaoInterface{
    children: ReactElement;
    color: string;
    onClick:() => void
}

export default function Botao({children,color, onClick}:BotaoInterface){
    
    
    return(
        <button className={`rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-700 cursor-pointer ${color} `} onClick={onClick}>
            {children}
        </button>
    )
}