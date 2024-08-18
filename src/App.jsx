
import {useState,useEffect} from 'react'  // importamos nuestros servicios que vamos a utilizar, en este caso estos 2
import {factCat} from './servicios/factCat.js'
import './App.css'

  // recuperamos la api que nos dara una 
                                                                                                    //una imagen de un gato con la primera palabra                                                                                            
                                                                                                 //del hecho que recuperamos antes

function useApiImagenGato(hecho){  //ESTO ES UN CUSTOMHOOK y son funciones tipicamente, pero podemos usar otros HOOKS como useState o Effect

  const [imagen,cambiarImagen]=useState() 
  
  useEffect(()=>{
    if(!hecho) return

      const primeras3palabras=hecho.split(' ', 3).join(' ') //luego una vez tenemos nuestro hecho, con SPLIt separamos por palabras y
                                                          //le decimos el número de palabras que ocupamos y lo juntamos con un JOIN
                                             // y listo ya tenemos nuestra variable con las 3 primeras letras    
      console.log(primeras3palabras)
      fetch(`https://cataas.com/cat/says/${primeras3palabras}?fontSize=50&fontColor=black&json=true`)
      .then(res=>res.json())
      .then(datos=>{
        const id=datos._id
        console.log(id)
        const url=`https://cataas.com/cat/says/${primeras3palabras}`
        cambiarImagen(url)
      })
      
  },[hecho]) 

  return imagen
}


//este es nuestro componente raiz no se nos olvide
export function App() {

  const [reinicio,cambiarInicio]=useState(false)

  const [hecho,cambiarValorHecho]=useState()  //creamos nuestro STATE con la variable y la función 
                                                                    //para cambiar el valor, Simpre que creamos un useState siempre le ponemos 
                                                                    //valor inicial


  useEffect(()=>{                 
      factCat().then(data=>cambiarValorHecho(data))   //hacemos uso de nuestro servicio, el servicio no es mas que una función
                                                    //que nos retorna el valor del fetch que hacemos                            
    },[reinicio])  
    

  const imagen=useApiImagenGato(hecho)

  
  return (

    <section className='Fondo'>
      <span className="material-symbols-outlined">pets</span>
      <h1>Datos sobre los gatos </h1>
      <h2>{hecho}</h2>
      <div className='container'>
      <img src={imagen} alt=""/><br /><br />
      </div>
      <button onClick={()=>cambiarInicio(!reinicio)}>Saber otro dato :3</button>
      <p>hecho por Gael Cuevas, basado en @midudev</p>

    </section>
  )
}
