import { FaPencil } from "react-icons/fa6";
import Botao from "../Botao";
import GameBox from "../GameBox";
import { MdDeleteForever } from "react-icons/md";
import { GameContext } from "../../context/GameContext";
import { useContext } from "react";

interface LineInterface {
    name: string;
    genre: string;
    price: string;
    releaseDate: string;
    id:string;
}
export default function GameLine({ name, genre, price, releaseDate,id}: LineInterface) {
    
    const {setIdGame, setEdit} = useContext(GameContext)

    const handlemodelEditById = ()=>{
        setIdGame(id)
        setEdit(true)
    }
    
    return (
        <div className="flex">
            <GameBox >
                <h2>{name}</h2>
            </GameBox>
            <GameBox >
                <h2>{genre}</h2>
            </GameBox>
            <GameBox >
                <h2>{price}</h2>
            </GameBox>
            <GameBox >
                <h2>{releaseDate}</h2>
            </GameBox>
            <GameBox >
                <div className="flex gap-3 items-center justify-center">
                    <Botao color="bg-blue-500"  onClick={handlemodelEditById}><FaPencil className="size-5 text-white " /></Botao>
                    <Botao color="bg-red-500" id={id}><MdDeleteForever className="size-5 text-white " /></Botao>
                </div>

            </GameBox>

            <div>

            </div>
        </div>
    )
}