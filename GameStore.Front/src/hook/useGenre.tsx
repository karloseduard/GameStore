import { useEffect, useState } from "react";
import api from "../api/api";
import type { Genre } from "../types/Genre";

export default function useGenre() {

    const [genre, setGenre] = useState<Genre[]>([])

    useEffect(() => {

        async function fetchGenre() {
            try {
                const { data } = await api.get('/genres')
                setGenre(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchGenre()
    }, [])

    return{
        genre
    }
}