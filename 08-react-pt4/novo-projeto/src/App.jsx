import './App.css';
import { useState, useEffect } from 'react';

export default function App() {

  const [contador, setContador] = useState(0)
  const [photos, setPhotos] = useState([])

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => setPhotos(data))
    .catch( error => console.error("Error", error));

  },[])
  

  function aumentar(){
    setContador(contador + 1)
  }

  function diminuir(){
    setContador(contador - 1)
  }

  function zerar(){
    setContador(0)
  }

  return (
    <>
      <h1>Contador</h1>
      <p>{contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={zerar}>Zerar</button>

      <h1>Fotos</h1>
      {photos.map(
          imagem => (
            <img key={imagem.id} src={imagem.url} alt={imagem.title} width={100}/>
          )

      )}
    </>
  )
}