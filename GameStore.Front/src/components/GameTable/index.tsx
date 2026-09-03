import { FaPlus } from "react-icons/fa6";

import Botao from "../Botao";
import GameBox from "../GameBox";
import GameLine from "../GameLine/Index";
import type { Game } from "../../types/Game";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

interface GameTableType{
    games:Game[]
}

export default function GameTable({games}:GameTableType) {
    const { setPost } = useContext(GameContext)


    const handlemodelPost = ()=>{
        setPost(true)
    }
    return (
        <>
            <div>
                <div className="flex justify-center">
                    <GameBox >
                        <h2>Nome</h2>
                    </GameBox>
                    <GameBox >
                        <h2>Genre</h2>
                    </GameBox>
                    <GameBox >
                        <h2>Price</h2>
                    </GameBox>
                    <GameBox >
                        <h2>Release Data</h2>
                    </GameBox>
                    <GameBox >
                        <div></div>
                    </GameBox>
                    

                </div>
                <div className="flex justify-center flex-col items-center">
                    {
                        games.map((e, index) => <GameLine key={index} name={e.name} genre={e.genre} price={e.price} releaseDate={e.releaseDate} id ={e.id} />)
                    }
                    <Botao  onClick={handlemodelPost}><FaPlus /></Botao>
                </div>
            </div>
        </>
    )
}