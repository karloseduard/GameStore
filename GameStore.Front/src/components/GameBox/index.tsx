import type { ReactElement } from "react"

interface NameInterface {
    children: ReactElement
}



export default function GameBox({ children }: NameInterface) {
    return (
        <div className="flex border-2 w-40 justify-center items-center ">
            {children}
        </div>
    )
}