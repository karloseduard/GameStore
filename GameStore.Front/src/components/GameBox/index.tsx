import type { ReactElement } from "react"

interface NameInterface {
    children: ReactElement
}



export default function GameBox({ children }: NameInterface) {
    return (
        <div className="border-2 w-40 text-center">
            {children}
        </div>
    )
}