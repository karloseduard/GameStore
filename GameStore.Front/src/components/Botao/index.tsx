
import { type ReactElement } from "react"



interface BotaoInterface{
    children: ReactElement;
    color: string;
    onClick:() => void | Promise<void>
}

export default function Botao({children,color, onClick}:BotaoInterface){
    
    
    return(
        <button className={`rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition cursor-pointer hover:bg-gray-700 hover:text-blue-400  ${color} `} onClick={onClick}>
            {children}
        </button>
    )
}