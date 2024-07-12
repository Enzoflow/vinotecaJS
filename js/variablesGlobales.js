const cuerpo=document.body;
const header=document.createElement("header");
const nav=document.createElement("nav");
const ul=document.createElement("ul");
const a=document.createElement("a");
const main=document.createElement("main");
const pie=document.createElement("footer");
const botonCambiarFondo=document.createElement("button");
header.className=("navbar");
header.style.height="4rem";
const menu=["productos", "contacto"];
ul.style.listStyle="none";
nav.className=("navbar-expand-lg");
ul.className=("navbar-nav");
cuerpo.appendChild(header);
header.appendChild(nav);
nav.appendChild(ul);
cuerpo.appendChild(main);
cuerpo.appendChild(pie);
const parrafoFooter=document.createElement("p");
const fecha= new Date();
const anio=fecha.getFullYear();
parrafoFooter.innerText=`Vinoteca | ${anio}`;
parrafoFooter.style.textAlign="center";
parrafoFooter.style.fontSize="2rem";
parrafoFooter.style.color="black";
parrafoFooter.style.fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;";
pie.appendChild(parrafoFooter);
pie.style.backgroundColor="gray";
pie.style.height="3rem";

header.appendChild(botonCambiarFondo);
let valorB="blanco";
botonCambiarFondo.style.backgroundImage="url(/medios/icons/sun.png)";
function ComprobarLocal(v){
    v=localStorage.getItem(0);
    if(v=="negro"){
        cuerpo.classList.toggle('dark-mode');
        cuerpo.classList.contains("dark-mode");
        botonCambiarFondo.style.backgroundImage="url(./medios/icons/luna.png)";
        valorB="negro";
        localStorage.setItem(0, valorB);
    }else if(v=="blanco"){
        cuerpo.classList.remove("dark-mode");
        botonCambiarFondo.style.backgroundImage="url(./medios/icons/sun.png)";
        valorB="blanco";
        localStorage.setItem(0, valorB);
    }else{
        valorB="blanco";
        localStorage.setItem(0, valorB);
    }
}
ComprobarLocal(valorB);
botonCambiarFondo.addEventListener("click", ()=>{
    if(valorB=="blanco"){
        cuerpo.classList.toggle('dark-mode');
        cuerpo.classList.contains("dark-mode");
        botonCambiarFondo.style.backgroundImage="url(./medios/icons/luna.png)";
        valorB="negro";
        localStorage.setItem(0, valorB);
    }else{
        cuerpo.classList.remove('dark-mode');
        botonCambiarFondo.style.backgroundImage="url(./medios/icons/sun.png)";
        valorB="blanco";
        localStorage.setItem(0, valorB);
    }
})
