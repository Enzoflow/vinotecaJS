const sectionContacto=document.createElement("section");
sectionContacto.style.backgroundImage="url(./medios/contacto/campo.jpg)";
sectionContacto.className=("contacto");
sectionContacto.style.display="grid";
sectionContacto.style.alignItems="center";
sectionContacto.style.justifyItems="center";
main.appendChild(sectionContacto);
const divTextoInicio=document.createElement("div");
let indicador=0;
const carrusel=["01", "02", "03", "04", "05"];
divTextoInicio.className=("titulo");
divTextoInicio.style.marginLeft="30rem";
divTextoInicio.style.color="white";
divTextoInicio.style.margin="0px auto";
divTextoInicio.innerHTML=`<h1>Puede contactarse mediante el siguiente formulario, déjenos saber su opinión sobre nosotros!</h1>`;
const tituloInicio=divTextoInicio.childNodes[0];
tituloInicio.style.fontSize="1.8rem";
tituloInicio.style.width="100%";
tituloInicio.style.textAlign="center";
sectionContacto.appendChild(divTextoInicio);
const formulario=document.createElement("div");
formulario.innerHTML=`<form class="form">

<div class="flex">
    <label>
        <input required="" placeholder="" type="text" class="input">
        <span>Nombre</span>
    </label>

    <label>
        <input required="" placeholder="" type="text" class="input">
        <span>Apellido</span>
    </label>
</div>  
        
<label>
    <input required="" placeholder="" type="email" class="input">
    <span>Gmail</span>
</label> 
    
<label>
    <input required="" type="tel" placeholder="" class="input">
    <span>Número de Teléfono</span>
</label>
<label>
    <textarea required="" rows="3" placeholder="" class="input01"></textarea>
    <span>Mensaje</span>
</label>

<button class="fancy" href="#">
  <span class="top-key"></span>
  <span class="submit">Enviar</span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</button>
</form>`;
sectionContacto.appendChild(formulario);
const imagenFormulario=document.createElement("div");
imagenFormulario.className=("divDeLaFoto");
const botonIzquierda=document.createElement("button");
    botonIzquierda.style.position="absolute";
    botonIzquierda.style.top="20rem";
    botonIzquierda.style.left="1rem";
    botonIzquierda.style.width="3rem";
    botonIzquierda.style.height="3rem";
    botonIzquierda.style.borderRadius="2rem";
    botonIzquierda.style.backgroundPosition="center";
    botonIzquierda.style.backgroundRepeat="no-repeat";
    botonIzquierda.style.backgroundImage="url(./medios/contacto/izquierda.png)";
const botonDerecha=document.createElement("button");
    botonDerecha.style.position="absolute";
    botonDerecha.style.top="20rem";
    botonDerecha.style.left="32rem";
    botonDerecha.style.width="3rem";
    botonDerecha.style.height="3rem";
    botonDerecha.style.borderRadius="2rem";
    botonDerecha.style.backgroundPosition="center";
    botonDerecha.style.backgroundRepeat="no-repeat";
    botonDerecha.style.backgroundImage="url(./medios/contacto/derecha.png)";
imagenFormulario.innerHTML=`<img class="fotoFormulario" src="./medios/contacto/uva/01.jpg"></img>`;
const foto=imagenFormulario.childNodes[0];
sectionContacto.appendChild(imagenFormulario);
imagenFormulario.appendChild(botonIzquierda);
imagenFormulario.appendChild(botonDerecha);
botonDerecha.addEventListener("click", ()=>{
    indicador=indicador+1;
    foto.remove();
    if (indicador>=carrusel.length){
        indicador=0;
    }
    for (let i = indicador; i<carrusel[0+indicador]; i++){
        imagenFormulario.innerHTML=`<img class="fotoFormulario" src="./medios/contacto/uva/${carrusel[i]}.jpg"></img>`;
        sectionContacto.appendChild(imagenFormulario);
    }
    if(indicador<=0){
        let indicador2=indicador*-1;
        for(let i = indicador; i<carrusel[0+indicador2]; i++){
            imagenFormulario.innerHTML=`<img class="fotoFormulario" src="./medios/contacto/uva/${carrusel[i]}.jpg"></img>`;
        }
    }
    imagenFormulario.appendChild(botonIzquierda);
    imagenFormulario.appendChild(botonDerecha);
})
botonIzquierda.addEventListener("click", ()=>{
    foto.remove();
    if(indicador==0){
        indicador=carrusel.length-1;
        for(let i=indicador; i<carrusel.length; i++){
            imagenFormulario.innerHTML=`<img class="fotoFormulario" src="./medios/contacto/uva/${carrusel[i]}.jpg"></img>`;
            sectionContacto.appendChild(imagenFormulario);
            imagenFormulario.appendChild(botonIzquierda);
            imagenFormulario.appendChild(botonDerecha);
            return;
        }

    }
    indicador=indicador-1;
    for(let i=indicador; i<carrusel[0+indicador]; i++){
        imagenFormulario.innerHTML=`<img class="fotoFormulario" src="./medios/contacto/uva/${carrusel[i]}.jpg"></img>`;
        sectionContacto.appendChild(imagenFormulario);
    }
    imagenFormulario.appendChild(botonIzquierda);
    imagenFormulario.appendChild(botonDerecha);
})
