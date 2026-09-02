import { FaPlus } from "react-icons/fa6";
import { useGames } from "../../hook/useGames";
import Botao from "../Botao";
import GameBox from "../GameBox";
import GameLine from "../GameLine/Index";

export default function GameTable() {
    const { games } = useGames();
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
                    <Botao><FaPlus /></Botao>
                </div>
            </div>
        </>
    )
}