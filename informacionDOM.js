let numerodeParrafos = document.querySelectorAll("p");
document.getElementById("mostrarInformacion").innerText = `Hay un total de ${numerodeParrafos.length} parrafos \n`


let caracteres = document.querySelector("p").innerText.substring(0,20); 
document.getElementById("mostrarInformacion").innerText += `Los primeros 20 caracteres del primer párrafo son: ${caracteres} \n`

let numerodeEnlaces = document.querySelectorAll("a");
document.getElementById("mostrarInformacion").innerText += `Hay un total de ${numerodeEnlaces.length} enlaces \n`

let segundoEnlace = document.querySelectorAll("a")[1].getAttribute("href"); 
document.getElementById("mostrarInformacion").innerText += `La direccion a la que apunta el segundo enlace es ${segundoEnlace} \n`

let penultimoEnlace = document.querySelectorAll("a")[numerodeEnlaces.length-1].href
document.getElementById("mostrarInformacion").innerText += `La direccion a la que apunta el penultimo enlace es ${penultimoEnlace} \n`


let enlacesPiramide = document.querySelectorAll('a[href="https://www.cpifppiramide.com/"').length;
document.getElementById("mostrarInformacion").innerText += `Hay ${enlacesPiramide} enlaces que apuntan a la pagina web del piramide. \n`


let enlacesSegundoParrafo = numerodeParrafos[1].getElementsByTagName("a").length;
document.getElementById("mostrarInformacion").innerText += `Hay ${enlacesSegundoParrafo} enlaces en el segundo párrafo \n`

let enlacesRojos = document.querySelectorAll("p.resaltado > a").length
document.getElementById("mostrarInformacion").innerText += `Hay ${enlacesRojos} enlaces hijos de un “p” que tenga color red \n`


