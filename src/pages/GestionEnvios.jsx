import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
let apiEnvios = "https://back-json-server-martes.onrender.com/envios "


const GestionEnvios = () => {

  const [envios, setEnvios] = useState([]);
  let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"))

  function getEnvios() {
    fetch(apiEnvios)
      .then(response => response.json())
      .then(data => setEnvios(data));
  }
  useEffect(() => {
    getEnvios();
  }, [])
  function filtrarEnviosUsuario() {
    let envioUsuario = envios.filter(((item) => item.usuarioId == usuarioLogueado.id))
    return envioUsuario
  }
  let filtradoUsuarios = filtrarEnviosUsuario()
  return (
    <div className="cards">
      {
        filtradoUsuarios.map((item) => (
          <div className="card">
            <p>Id envios :{item.idEnvio}</p>
            <p>Producto :{item.producto}</p>
            <p>Destino :{item.destino}</p>
            <p>Usuario :{usuarioLogueado.nombre}</p>
            <div className='card__buttons'>

              <button className='card__button'>Eliminar</button>
              <Link className ="card__button">Editar</Link>
            </div>
          </div>
        ))

      }
    </div>
  )



}

export default GestionEnvios
