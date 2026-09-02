import React, { createContext, useState } from "react";

interface GameContextType{
    idGame:string
    setIdGame:(id:string) => void
    edit: boolean
    setEdit:(value:boolean) => void
}

const GameContext = createContext<GameContextType>({} as GameContextType)

function GameProvider({children}:{children:React.ReactNode}){
    const [idGame, setIdGame] = useState("")
    const [edit, setEdit] = useState(Boolean)
    return(
        <GameContext.Provider value={{idGame, setIdGame, edit, setEdit}}>
            {children}
        </GameContext.Provider>
    )
}


export {GameProvider, GameContext}
