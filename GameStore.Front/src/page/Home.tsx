import { useContext} from "react"
import GameTable from "../components/GameTable"
import EditModal from "../components/EditModal"
import { GameContext } from "../context/GameContext"
import { useGamesId } from "../hook/useGamesId"
import { useGames } from "../hook/useGames"
import PostModal from "../components/PostModal"




export default function Home() {

    const { idGame, edit, post } = useContext(GameContext)

    const { gamesId } = useGamesId(idGame)
    const { games, refetch } = useGames();


    return (
        <>
            <h1 className="text-3xl font-bold ">
                Home
            </h1>
            <div>
                <GameTable games={games}/>
                {
                    
                    edit && gamesId && ( <EditModal key={gamesId.id} gamesId={gamesId} id={idGame} onSuccess={refetch}/> )
                    
                }{
                    post&&<PostModal onSuccess={refetch}/>
                }
                
            </div>
        </>


    )

}