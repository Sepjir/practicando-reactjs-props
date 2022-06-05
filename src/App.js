import React from 'react';
import Comentario from './components/Comentario';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className='container mt-5'>
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Ignacio' edad={30}/>
      <Saludo persona='Pedrito' edad={25}/>
      <Saludo persona='Juanito' edad={27}/>
      <hr/>
      <h3>Caja de comentarios</h3>
      <Comentario
        urlImagen='https://picsum.photos/50'
        persona='Ignacio'
        texto='holi aaaaaaaaaaaaaaa'
      />
      <Comentario
        urlImagen='https://picsum.photos/70'
        persona='Pedrito'
        texto='holi wwwwwwwwwwww'
      />
      <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Juanito'
        texto='holi fffffffffffff'
      />
      <Comentario/>
    </div>
  );
}

export default App;
