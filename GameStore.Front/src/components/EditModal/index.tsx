import { useContext,  useState } from "react";
import InputForm from "../InputForm";
import { GameContext } from "../../context/GameContext";
import type { Game } from "../../types/Game";
interface EditModalType {
    gamesId:Game
}

export default function EditModal({ gamesId  }: EditModalType) {
    

    const {setEdit} = useContext(GameContext) 

    const [name, setName] = useState(gamesId.name);
    const [price, setPrice] = useState(gamesId.price);
    const [releaseDate, setReleaseDate] = useState(gamesId.releaseDate);
    
    
    const onClose = ()=>{
        setEdit(false)
        
    }

    console.log(name, price, releaseDate)

    

    return (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 ">
            <div className=" w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ">
                <form action="" >

                    <InputForm 
                    titulo="Name" 
                    type="text" 
                    setValue={setName}  
                    value={name}/>


                    <div className="flex flex-col gap-2">
                        <label htmlFor="genre" className="text-sm font-medium text-gray-700" > Gênero </label>
                        <select id="genre" className=" w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 " >
                            <option value="Plataformer"> Plataformer </option>
                            <option value="RPG"> RPG </option>
                        </select>
                    </div>

                    <InputForm 
                    titulo="Price" 
                    type="text" 
                    setValue={setPrice}  
                    value={price}/>
                    <InputForm 
                    titulo="Release Data" 
                    type="text" 
                    setValue={setReleaseDate}  
                    value={releaseDate}/>
                    <div className=" mt-6 flex justify-end gap-3 border-t border-gray-200 pt-5 ">
                        <button type="button"  className=" rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100" onClick={onClose}> Cancelar </button>
                        <button type="submit" className=" rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 " > Salvar alterações </button>
                    </div>

                </form>
            </div>

        </div>


    )
}