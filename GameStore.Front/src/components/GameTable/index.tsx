import GameBox from "../GameBox";
import GameLine from "../GameLine/Index";
interface GamesInterface{
    name:string,
    genre:string,
    price:number,
    releasedata:string
}
export default function GameTable({name, genre, price, releasedata}:GamesInterface){
    return(
        <>
        <div>
            <div className="flex justify-center gap-2">
                <GameBox name="Nome"/>
                <GameBox name="Genre"/>
                <GameBox name="Price"/>
                <GameBox name="Release Data"/>
            </div>
            <div >
                <GameLine/>
            </div>
        </div>
        </>
    )
}