import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bmw from './pages/Bmw'
import Mercedes from './pages/Mercedes'
import Porsche from './pages/Porsche'
import Page404 from './pages/Page404'
import PaginaBase from './pages/PaginaBase'


function AppRoutes() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <PaginaBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/bmw" element={ <Bmw /> }></Route>
                    <Route path="/mercedes" element={ <Mercedes /> }></Route>
                    <Route path="/porsche" element={ <Porsche /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
