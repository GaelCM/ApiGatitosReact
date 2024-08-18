

export const factCat=()=>{
    
    const apiGatosHechos="https://catfact.ninja/fact"  //traemos nuestra 1 api para traer un hecho sobre un gato
    
    return fetch(apiGatosHechos)        //USAMOS FETCH para usar la api, 
      .then(res=>res.json())      //luego un then, para decirle que esos datos los pasamos a JSON
      .then(dato=>{
        
        const res= dato.fact  // y luego como tenemos un JSOn con datos, pues ahora lo recorremos como si fuera un foreach O un MAP()                                 // y por cada dato que tengamos en nuestro json accedemos a su valor en este caso FACT                             

        return res
      })
}

