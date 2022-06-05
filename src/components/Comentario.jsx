import React from 'react'

const Comentario = (props) => {
  return (
    <div className='d-flex'>
        <div className="flex-shrink-0">
        <img src={props.urlImagen} className='me-3' alt="" />
        </div>
        <div className="media-body">
            <h5 className="mt-0">{props.persona}</h5>
            {props.texto}
        </div>
    </div>
  )
}

export default Comentario