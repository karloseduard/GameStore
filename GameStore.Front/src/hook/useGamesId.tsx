import { useEffect, useState } from "react"
import api from "../api/api"
import type { Game } from "../types/Game"



export function useGamesId(id:string) {
    const [gamesId, setGamesId] = useState<Game>()

    useEffect(() => {
        async function fetchGames() {
            try {
                const { data } = await api.get(`/games/${id}`)
                setGamesId(data)

            } catch (error) {
                console.log(error)
            }
        }
        if(id){
            fetchGames()
        }
        
    }, [id])

    

    return{
        gamesId
    }
}