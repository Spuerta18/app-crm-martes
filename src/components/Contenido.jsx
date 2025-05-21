import { Outlet } from 'react-router-dom'
import React from 'react'
const Contenido = () => {
  return (
    <section className="aplicacion__informacion">
<Outlet/>
    </section>
  )
}

export default Contenido