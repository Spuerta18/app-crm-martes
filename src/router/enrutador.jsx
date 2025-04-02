import Loguin from "../pages/Login"
import Home from "../Home"
let enrutador = [
    {
        path: '/',
        element: <Loguin />
    },
    {
        path: '/home',
        element: <Home/>
    }
]
export default enrutador