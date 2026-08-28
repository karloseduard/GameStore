import { useEffect, useState } from "react"
import api from "../api/api"
import type { Game } from "../types/Game"
import GameTable from "../components/GameTable"

export default function Home() {
    const [games, setGames] = useState<Game[]>()

    useEffect(() => {
        async function fetchGames() {
            try {
                const { data } = await api.get('/games')
                setGames(data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchGames()

    }, [])

    return (
        <>

            <h1 className="text-3xl font-bold ">
                Home
            </h1>
            <div>
                <GameTable/>
                

            </div>
        </>
    )

}