document.addEventListener("keyup", e =>{

    if (e.target.matches("#buscador")){
  
        if (e.key =="Enter")e.target.value = " ";
  
        document.querySelectorAll(".articulo").forEach( peliculas =>{
  
            peliculas.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?peliculas.classList.remove("filtro")
              :peliculas.classList.add("filtro")
        })
  
    }
  
  
  
  
  })