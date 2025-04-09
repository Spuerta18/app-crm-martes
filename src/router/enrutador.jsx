import Loguin from "../pages/Login"
import Home from "../Home"
import RutaProtegida from "../components/RutaProtegida"
let enrutador = [
    {
        path: '/',
        element: <Loguin />
    },
    {
        path: '/home',
        element: <RutaProtegida proteger ={<Home/>} />
    }
]
export default enrutador
