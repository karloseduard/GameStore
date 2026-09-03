import { useEffect, useState } from "react"
import api from "../api/api"
import type { Game } from "../types/Game"



export function useGames() {
    const [games, setGames] = useState<Game[]>([])



    async function fetchGames() {
        try {
            const { data } = await api.get('/games')
            setGames(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        fetchGames()
    }, [])


    return {
        games,
        refetch: fetchGames,
    }
}