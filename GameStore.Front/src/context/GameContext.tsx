import React, { createContext, useState } from "react";

interface GameContextType{
    idGame:string
    setIdGame:(id:string) => void
    edit: boolean
    setEdit:(value:boolean) => void
    post:boolean
    setPost:(value:boolean) => void
}

const GameContext = createContext<GameContextType>({} as GameContextType)

function GameProvider({children}:{children:React.ReactNode}){
    const [idGame, setIdGame] = useState("")
    const [edit, setEdit] = useState(Boolean)
    const [post, setPost] = useState(Boolean)
    return(
        <GameContext.Provider value={{idGame, setIdGame, edit, setEdit, post,setPost}}>
            {children}
        </GameContext.Provider>
    )
}


export {GameProvider, GameContext}
