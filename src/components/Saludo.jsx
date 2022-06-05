import React from 'react'

//Los props son la comunicación entre los componentes y la aplicación para entregar datos
//y se llaman a través de "props"
function Saludo(props) {
    console.log(props)
  return (
    <div>
        <h2>Saludando a {props.persona}</h2>
        <p>de Edad: {props.edad}</p>
    </div>
  )
}

export default Saludo