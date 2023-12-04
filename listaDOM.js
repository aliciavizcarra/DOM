document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("addLista").addEventListener("click", agregarLista);

})

function agregarLista(){
    let main = document.querySelector("main");
    let section = document.createElement("section");
    let ul = document.createElement("ul");
    let h3= document.createElement("h3");
    
    let botonAñadirTarea = document.createElement("button");
    botonAñadirTarea.value="Añadir tarea";
    botonAñadirTarea.addEventListener("click", anadirTarea);
    let botonBorrarLista = document.createElement("button");
    botonBorrarLista.value="Borrar Lista";

    h3.innerText=prompt("Nombre de la lista nueva");
    ul.append(botonAñadirTarea,botonBorrarLista);
    section.append(h3,ul);

    main.append(section);
    
   
    ul.append(boton);

}