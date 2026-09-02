import { useContext} from "react"
import GameTable from "../components/GameTable"
import EditModal from "../components/EditModal"
import { GameContext } from "../context/GameContext"
import { useGamesId } from "../hook/useGamesId"




export default function Home() {

    const { idGame, edit } = useContext(GameContext)

    const { gamesId } = useGamesId(idGame)
    console.log(gamesId)


    return (
        <>
            <h1 className="text-3xl font-bold ">
                Home
            </h1>
            <div>
                <GameTable />
                {
                    edit && gamesId && <EditModal gamesId={gamesId} />
                }
            </div>
        </>


    )

}