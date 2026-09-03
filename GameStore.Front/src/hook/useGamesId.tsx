import { useEffect, useState } from "react"
import api from "../api/api"
import type { Game } from "../types/Game"



export function useGamesId(id: string) {
    const [gamesId, setGamesId] = useState<Game>()



    useEffect(() => {
        if (!id) return 
        
        async function fetchGames() {
            try {
                const { data } = await api.get(`/games/${id}`)
                setGamesId(data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchGames()


    }, [id])



    return {
        gamesId
    }
}