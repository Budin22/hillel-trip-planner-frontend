import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/home/HomePage.tsx";
import {ErrorPage} from "./pages/error/ErrorPage.tsx";

function App() {
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
