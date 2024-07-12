const section=document.createElement("section");
const div=document.createElement("div");
const div2=document.createElement("div");
const divImagen=document.createElement("div");
const h1=document.createElement("h1");
const h2Vinos=document.createElement("h2");
    h2Vinos.innerText="Los mejores vinos del pais lo encontras acá";
    h2Vinos.style.fontSize="2.5rem";
    h2Vinos.style.color="black";
    h2Vinos.style.marginTop="-39rem";
    h2Vinos.style.textAlign="center";
const h3Final=document.createElement("h3");
    h3Final.style.color="black";
    h3Final.style.fontSize="1.5rem";
    h3Final.style.marginTop="2rem";
    h3Final.innerText="Visita la sección de productos para poder mirar con más detalles nuestra mercaderia y realizar una compra";
const parrafoInicio=document.createElement("p");
const sectionBanner=document.createElement("section");
const sectionInfo=document.createElement("section");
const seccionVinos=document.createElement("section");
    sectionInfo.style.display="flex";
    sectionInfo.style.flexDirection="row";
const divCards=document.createElement("div");
    const miniTitulo=document.createElement("h3");
    miniTitulo.className=("miniTitulo");
    miniTitulo.innerText="Envios";
const divCards2=document.createElement("div");
    const miniTitulo2=document.createElement("h3");
    miniTitulo2.className=("miniTitulo");
    miniTitulo2.innerText="Medios de pago";
    divCards2.appendChild(miniTitulo2);
const divCards3=document.createElement("div");
    const miniTitulo3=document.createElement("h3");
    miniTitulo3.className=("miniTitulo");
    miniTitulo3.innerText="Sitio seguro";
    divCards3.appendChild(miniTitulo3);
const divCards4=document.createElement("div");
    const miniTitulo4=document.createElement("h3");
    miniTitulo4.className=("miniTitulo");
    miniTitulo4.innerText="Pedidos";
    divCards4.appendChild(miniTitulo4);
const parrafoInfo=document.createElement("p");
    parrafoInfo.innerText="Enviamos a todo el país por correo Andreani";
    parrafoInfo.className=("infoParrafo");
const parrafoInfo2=document.createElement("p");
    parrafoInfo2.innerText="Aceptamos todos los medios de pagos.";
    divCards2.appendChild(parrafoInfo2);
    parrafoInfo2.className=("infoParrafo");
const parrafoInfo3=document.createElement("p");
    parrafoInfo3.innerText="Tu información es confidencial. Tus datos están encriptados y protegidos.";
    divCards3.appendChild(parrafoInfo3);
    parrafoInfo3.className=("infoParrafo");
const parrafoInfo4=document.createElement("p");
    parrafoInfo4.innerText="Los pedidos se preparan en 24 hs hábiles";
    divCards4.appendChild(parrafoInfo4);
    parrafoInfo4.className=("infoParrafo");
divCards.className=("cards");
    const iconDiv1=document.createElement("div");
    iconDiv1.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"></path></svg>`;
    iconDiv1.style.textAlign="center";
divCards2.className=("cards");
    const iconDiv2=document.createElement("div");
    iconDiv2.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>`;
    iconDiv2.style.textAlign="center";
divCards3.className=("cards");
    const iconDiv3=document.createElement("div");
    iconDiv3.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>`;
    iconDiv3.style.textAlign="center";
divCards4.className=("cards");
    const iconDiv4=document.createElement("div");
    iconDiv4.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>`;
    iconDiv4.style.textAlign="center";
const imagenesVinos=document.createElement("div");
let b=0;
const imagenesDeVinos=["01", "02", "03"];
const divEnlaceProductos=document.createElement("div");
divEnlaceProductos.className=("divEnlace");
divEnlaceProductos.innerHTML=`
        <img class="enlaceProductos" src="./medios/productos/pro.jpg">
        <a class="clickProductos" href="./productos.html">PRODUCTOS</a>`;

main.appendChild(sectionBanner);
main.appendChild(section);
main.appendChild(sectionInfo);
main.appendChild(seccionVinos);
section.appendChild(div);
sectionInfo.appendChild(divCards);
sectionInfo.appendChild(divCards2);
sectionInfo.appendChild(divCards3);
sectionInfo.appendChild(divCards4);
divCards.appendChild(miniTitulo);
divCards.appendChild(parrafoInfo);
h1.innerText="Bienvenidos a la vinoteca";
h1.style.fontSize="2rem";
h1.style.textAlign="center";
h1.style.marginTop="-20rem";
h1.style.textAlign="right";
h1.style.marginRight="2rem";
h1.style.color="black";
h1.style.position="sticky";
div.appendChild(h1);
parrafoInicio.innerText="Puede ir a la seccion de productos para ver los que disponemos";
parrafoInicio.style.fontSize="1.5rem";
parrafoInicio.style.textAlign="right";
parrafoInicio.style.marginRight="1rem";
parrafoInicio.style.color="black";
parrafoInicio.style.position="sticky";
section.appendChild(div2);
div2.appendChild(parrafoInicio);
sectionBanner.appendChild(divImagen);
sectionBanner.style.borderBottom="solid 0.5rem";
const banner=["01", "02", "03", "04"];
seccionVinos.className=("sectionVinos");
divImagen.innerHTML=`<img class="banne-r" style="width: 100%;" src="./medios/${banner[0]}.jpg"></img>`;
b=b+1;
for (let i = 0; i < imagenesDeVinos.length; i++){
    const imagenesVinos=document.createElement("div");
    imagenesVinos.className=("divVino");
    imagenesVinos.innerHTML=`<img class="vinos" src="./medios/vinos/${imagenesDeVinos[i]}.jpg">`;
    seccionVinos.appendChild(imagenesVinos);

}
const parrafoEnFotos=document.createElement("p");
parrafoEnFotos.innerText="Más de 2 Millones de vinos exportados al año.";
parrafoEnFotos.style.fontSize="2.5rem";
parrafoEnFotos.style.marginTop="-26rem";
parrafoEnFotos.style.position="absolute";
parrafoEnFotos.style.width="14rem";
parrafoEnFotos.style.marginLeft="6rem";
parrafoEnFotos.style.color="white";
parrafoEnFotos.style.fontFamily="cursive";
parrafoEnFotos.style.textAlign="center";
const parrafoEnFotos2=document.createElement("p");
parrafoEnFotos2.innerText="Más de 400 localidades distribuidas en nuestro país.";
parrafoEnFotos2.style.fontSize="2.5rem";
parrafoEnFotos2.style.marginTop="-26rem";
parrafoEnFotos2.style.position="absolute";
parrafoEnFotos2.style.width="16rem";
parrafoEnFotos2.style.marginLeft="6rem";
parrafoEnFotos2.style.color="white";
parrafoEnFotos2.style.fontFamily="cursive";
parrafoEnFotos2.style.textAlign="center";
const parrafoEnFotos3=document.createElement("p");
parrafoEnFotos3.innerText="Bodegas con más de 10 millones de vinos";
parrafoEnFotos3.style.fontSize="2.5rem";
parrafoEnFotos3.style.marginTop="-23rem";
parrafoEnFotos3.style.position="absolute";
parrafoEnFotos3.style.width="15rem";
parrafoEnFotos3.style.marginLeft="6rem";
parrafoEnFotos3.style.color="white";
parrafoEnFotos3.style.fontFamily="cursive";
parrafoEnFotos3.style.textAlign="center";
const divVinos1=seccionVinos.childNodes[0];
const img1=divVinos1.childNodes[0];
const divVinos2=seccionVinos.childNodes[1];
img2=divVinos2.childNodes[0];
const divVinos3=seccionVinos.childNodes[2];
img3=divVinos3.childNodes[0];
seccionVinos.appendChild(h2Vinos);
function eventoFoto(parametro){
    parametro.addEventListener("mouseover", ()=>{
        parametro.className=("vinos vinosEvento");
        if(parametro==img1){
            divVinos1.appendChild(parrafoEnFotos);
            parrafoEnFotos.addEventListener("mouseover", ()=>{
            parametro.className=("vinos vinosEvento");
        })
        parametro.addEventListener("mouseout", ()=>{
            parametro.className=("vinos");
            parrafoEnFotos.remove();
        });
        }else if(parametro==img2){
            divVinos2.appendChild(parrafoEnFotos2)
            parrafoEnFotos2.addEventListener("mouseover", ()=>{
                parametro.className=("vinos vinosEvento");
            });
            parametro.addEventListener("mouseout", ()=>{
                parametro.className=("vinos");
                parrafoEnFotos2.remove();
            });
        }else{
            divVinos3.appendChild(parrafoEnFotos3)
            parametro.addEventListener("mouseout", ()=>{
                parametro.className=("vinos");
                parrafoEnFotos3.remove();
            });
        }
        
        
    });
    
}
eventoFoto(img1);
eventoFoto(img2);
eventoFoto(img3);
divCards.appendChild(iconDiv1);
divCards2.appendChild(iconDiv2);
divCards3.appendChild(iconDiv3);
divCards4.appendChild(iconDiv4);
console.log(seccionVinos);
seccionVinos.appendChild(h3Final);
seccionVinos.appendChild(divEnlaceProductos);
setInterval(()=>{
    if (b==0){
        divImagen.innerHTML=`<img class="banner animate__animated animate__fadeOutLeft" style="width: 100%;" src="./medios/${banner[1]}.jpg"></img>`;
        setTimeout(()=>{
            divImagen.innerHTML=`<img class="banner animate__animated animate__fadeInRight" style="width: 100%;" src="./medios/${banner[b]}.jpg"></img>`;
            h1.style.color="black";
            parrafoInicio.style.color="black";
            b=1;
        }, 1000);
        
        
    }else if(b==1){
        divImagen.innerHTML=`<img class="banner animate__animated animate__fadeOutLeft" style="width: 100%;" src="./medios/${banner[0]}.jpg"></img>`;
        setTimeout(()=>{
            divImagen.innerHTML=`<img class="banner animate__animated animate__fadeInRight" style="width: 100%;" src="./medios/${banner[b]}.jpg"></img>`;
            h1.style.color="white";
            parrafoInicio.style.color="white";
            b=2;
        }, 1000);
    }else if(b==2){
        divImagen.innerHTML=`<img class="banner animate__animated animate__fadeOutLeft" style="width: 100%;" src="./medios/${banner[1]}.jpg"></img>`;
        setTimeout(()=>{
            divImagen.innerHTML=`<img class="banner animate__animated animate__fadeInRight" style="width: 100%;" src="./medios/${banner[b]}.jpg"></img>`;
            h1.style.color="white";
            parrafoInicio.style.color="white"  ;
            b=3;
        }, 1000);
    }else{
        divImagen.innerHTML=`<img class="banner animate__animated animate__fadeOutLeft" style="width: 100%;" src="./medios/${banner[2]}.jpg"></img>`;
        setTimeout(()=>{
            divImagen.innerHTML=`<img class="banner animate__animated animate__fadeInRight" style="width: 100%;" src="./medios/${banner[b]}.jpg"></img>`;
            h1.style.color="white";
            parrafoInicio.style.color="white";
            b=0;
        }, 1000);
    }
}, 10000);

const hijo=divEnlaceProductos.childNodes[3];
console.log(hijo);
hijo.addEventListener("mouseover", ()=>{
    hijo.className=("clickProductos animate__animated animate__zoomIn");
    setTimeout(()=>{
        hijo.className=("clickProductos");
    }, 2000);
});