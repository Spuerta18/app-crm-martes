import Loguin from "../pages/Login"
import Home from "../Home"
import RutaProtegida from "../components/RutaProtegida"
import { Children } from "react"
import GestionEnvios from "../pages/GestionEnvios"
import GestionClientes from "../pages/GestionClientes"
let enrutador = [
    {
        path: '/',
        element: <Loguin />
    },
    {
        path: '/home',
        element: <RutaProtegida proteger ={<Home/>} />,
        children : [
            {
                path : "envios",
                element: <GestionEnvios/>,

            },
             {
                path : "clientes",
                element: <GestionClientes/>,

            }
        ]
    }
]
export default enrutador
