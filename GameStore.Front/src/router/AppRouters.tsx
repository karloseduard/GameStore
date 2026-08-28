import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../page/Home";



export default function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )

}