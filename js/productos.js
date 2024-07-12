const section=document.createElement("section");
const divPro=document.createElement("div");
    divPro.className="padrePro";
const divTitulo=document.createElement("div");
const divCarrito=document.createElement("div");
const divDetalles=document.createElement("div");
const h1=document.createElement("h1");
const p=document.createElement("p");
const p2=document.createElement("p");
const p3=document.createElement("p");
const p4=document.createElement("p");
const p5=document.createElement("p");
const pago=document.createElement("p");
pago.style.fontSize="2rem";
pago.style.color="red";
pago.style.textAlign="center";
const productosDelCarrito=document.createElement("p");
    productosDelCarrito.style.textAlign="center";
    productosDelCarrito.style.fontSize="1.5rem";
    const productosDelCarrito2=document.createElement("p");
    productosDelCarrito2.style.textAlign="center";
    productosDelCarrito2.style.fontSize="1.5rem";
    const productosDelCarrito3=document.createElement("p");
    productosDelCarrito3.style.textAlign="center";
    productosDelCarrito3.style.fontSize="1.5rem";
    const productosDelCarrito4=document.createElement("p");
    productosDelCarrito4.style.textAlign="center";
    productosDelCarrito4.style.fontSize="1.5rem";
    const productosDelCarrito5=document.createElement("p");
    productosDelCarrito5.style.textAlign="center";
    productosDelCarrito5.style.fontSize="1.5rem";
    const productosDelCarrito6=document.createElement("p");
    productosDelCarrito6.style.fontSize="1.5rem";
    productosDelCarrito6.style.textAlign="center";
    const productosDelCarrito7=document.createElement("p");
    productosDelCarrito7.style.fontSize="1.5rem";
    productosDelCarrito7.style.textAlign="center";
    const productosDelCarrito8=document.createElement("p");
    productosDelCarrito8.style.fontSize="1.5rem";
    productosDelCarrito8.style.textAlign="center";
const carritoDeCompras = [];
const parrafoCarrito=document.createElement("p");
parrafoCarrito.style.textAlign="center";
parrafoCarrito.style.color="red";
parrafoCarrito.style.fontSize="2rem";
parrafoCarrito.style.fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
const boton=document.createElement("button");
const botonC=document.createElement("button");
const botonF=document.createElement("div");
botonF.className=("divBotonFinalizar");
const boton2=document.createElement("button");
const botonElminar=document.createElement("button");
const section2=document.createElement("section");
botonElminar.innerText="Eliminar del carrito";
botonElminar.style.margin="0px auto;";
productosDelCarrito.appendChild(botonElminar);
const h2=document.createElement("h2");
const h3=document.createElement("h3");
let total=0;
const guardarEnLocalStorage=(key, value) => {localStorage.setItem(key, value)};
main.appendChild(section);
section.appendChild(divTitulo);
section.appendChild(divPro);
h2.innerText="CARRITO DE COMPRAS";
h2.style.fontFamily="Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
h2.style.color="white";
h2.style.textAlign="center";
h2.style.backgroundColor="#463f3a";
h1.innerText="LISTA DE PRODUCTOS";
h1.style.fontFamily="Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
h1.style.backgroundColor="#463f3a";
h1.style.color="white";
h1.style.fontSize="2rem";
h1.style.textAlign="center";
divTitulo.appendChild(h1);
boton.innerText="Añadir al carrito";
botonF.innerHTML=`<button class="buttonF">
 <svg viewBox="0 0 16 16" class="bi bi-cart-check" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
</svg>
  <p class="text">Finalizar compra</p>
</button>`;
let c=0;
let c2=0;
let c3=0;
let c4=0;
let c5=0;
let c6=0;
let c7=0;
let c8=0;
let texto=0;
divCarrito.style.width="max-content";
divCarrito.style.textAlign="center";
divCarrito.style.border="solid";
divCarrito.style.width="50%";
divCarrito.style.marginLeft="25rem";
const AgregarAlCarritoPorLocal=async(indicador, cantidadProductos, dinero, parrafo)=>{
    const res = await fetch('/productos.json');
    const info = await res.json();
    const datos = await info;
    const aver=datos.find(({ id }) => id === indicador);
    parrafo.innerText=aver.nombre +" "+ "$"+aver.precio+" "+ `cantidad: ${cantidadProductos}`;
    const botonElminar=document.createElement("div");
    botonElminar.style.margin="0px auto;";
    botonElminar.innerHTML=`<button class="bin-button">
  <svg
    class="bin-top"
    viewBox="0 0 39 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="5" x2="39" y2="5" stroke="white" stroke-width="4"></line>
    <line
      x1="12"
      y1="1.5"
      x2="26.0357"
      y2="1.5"
      stroke="white"
      stroke-width="3"
    ></line>
  </svg>
  <svg
    class="bin-bottom"
    viewBox="0 0 33 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="path-1-inside-1_8_19" fill="white">
      <path
        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
      ></path>
    </mask>
    <path
      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
      fill="white"
      mask="url(#path-1-inside-1_8_19)"
    ></path>
    <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
    <path d="M21 6V29" stroke="white" stroke-width="4"></path>
  </svg>
</button>`;
    parrafo.appendChild(botonElminar);
    pago.innerText=`El monto a pagar es de: $${dinero} `;
    divCarrito.appendChild(parrafo);
    divCarrito.appendChild(pago);
    divCarrito.appendChild(botonF);
    botonElminar.addEventListener("click", ()=>{
        carritoDeCompras.pop();
        if(cantidadProductos==1){
            if(carritoDeCompras.length===0){
                dinero=total;
                total=dinero-aver.precio;
                guardarEnLocalStorage("Precio final", total);
                parrafo.remove();
                pago.remove();
                botonF.remove();
                eliminarDelCarrito(aver.id);
                parrafoCarrito.innerText="EL CARRITO ESTÁ VACIO, AGREGUE UN PRODUCTO PARA LLENARLO";
                divCarrito.appendChild(parrafoCarrito);
                total=0;
            }else{
                dinero=total;
                total=dinero-aver.precio;
                parrafo.remove();
                guardarEnLocalStorage("Precio final", total);
                pago.innerText=`El monto a pagar es de: $${total} `;
                botonElminar.innerText="Eliminar del carrito";
                parrafo.appendChild(botonElminar);
                eliminarDelCarrito(aver.id);
            }
        }else{
            dinero=total;
            total=dinero-aver.precio;
            cantidadProductos=cantidadProductos-1;
            parrafo.innerText=aver.nombre +" "+ "$"+aver.precio+" "+ `cantidad: ${cantidadProductos}`;
            pago.innerText=`El monto a pagar es de: $${total} `;
            guardarEnLocalStorage("Precio final", total);
            parrafo.appendChild(botonElminar);
            eliminarDelCarrito(aver.id);
        }
    })
    
}
function comprobarCarrito(){
    for (let i = 1; i < 9; i++){
        const carritoDeComprasLocal=localStorage.getItem(i);
        carritoDeCompras.push(carritoDeComprasLocal);
        if(carritoDeComprasLocal==null){
            texto=texto+1;
            carritoDeCompras.pop();
            if(texto==8){
                parrafoCarrito.innerText="EL CARRITO ESTÁ VACIO, AGREGUE UN PRODUCTO PARA LLENARLO";
                divCarrito.appendChild(parrafoCarrito);
            }
        }else{
            total=parseInt(localStorage.getItem("Precio final"));
            switch(i){
                case 1:
                    c=parseInt(carritoDeComprasLocal);
                    AgregarAlCarritoPorLocal(i, c, total, productosDelCarrito);
                    continue;
                case 2:
                    c2=parseInt(carritoDeComprasLocal);
                    AgregarAlCarritoPorLocal(i, c2, total, productosDelCarrito2);
                    continue;
                case 3:
                    c3=parseInt(carritoDeComprasLocal);
                    AgregarAlCarritoPorLocal(i, c3, total, productosDelCarrito3);
                    continue;
                case 4:
                    c4=parseInt(carritoDeComprasLocal);
                    AgregarAlCarritoPorLocal(i, c4, total, productosDelCarrito4);
                    continue;
                case 5:
                    c5=parseInt(carritoDeComprasLocal);
                    AgregarAlCarritoPorLocal(i, c5, total, productosDelCarrito5);
                    continue;
                case 6:
                    c6=parseInt(carritoDeComprasLocal);
                    AgregarAlCarritoPorLocal(i, c6, total, productosDelCarrito6);
                    continue;
                case 7:
                    c7=parseInt(carritoDeComprasLocal);
                    AgregarAlCarritoPorLocal(i, c7, total, productosDelCarrito7);
                    continue;
                case 8:
                    c8=parseInt(carritoDeComprasLocal);
                    AgregarAlCarritoPorLocal(i, c8, total, productosDelCarrito8);
                    continue;
            }
        }
    }
}
main.appendChild(section2);
section2.appendChild(divCarrito);
divCarrito.style.marginTop="1rem";
divCarrito.appendChild(h2);
const AgregarAlcarrito2 = async (v, can, parrafo)=>{
    const res = await fetch('/productos.json');
    const info = await res.json();
    const datos = await info;
    const aver=datos.find(({ id }) => id === v);
    total=total+aver.precio;
    total=parseInt(total);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El producto fue agregado al carrito",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
    });
    if (can>0){
        const productosDelCarrito=document.createElement("p");
    }
    parrafoCarrito.remove();
    guardarEnLocalStorage("Precio final", total);
    guardarEnLocalStorage(aver.id, can);
    carritoDeCompras.push(aver.nombre);
    parrafo.innerText=aver.nombre +" "+ "$"+aver.precio+" "+ `cantidad: ${can}`;
    divCarrito.appendChild(parrafo);
    const botonElminar=document.createElement("div");
    botonElminar.style.margin="0px auto;";
    botonElminar.innerHTML=`<button class="bin-button">
  <svg
    class="bin-top"
    viewBox="0 0 39 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="5" x2="39" y2="5" stroke="white" stroke-width="4"></line>
    <line
      x1="12"
      y1="1.5"
      x2="26.0357"
      y2="1.5"
      stroke="white"
      stroke-width="3"
    ></line>
  </svg>
  <svg
    class="bin-bottom"
    viewBox="0 0 33 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="path-1-inside-1_8_19" fill="white">
      <path
        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
      ></path>
    </mask>
    <path
      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
      fill="white"
      mask="url(#path-1-inside-1_8_19)"
    ></path>
    <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
    <path d="M21 6V29" stroke="white" stroke-width="4"></path>
  </svg>
</button>`;
    parrafo.appendChild(botonElminar);
    pago.innerText=`El monto a pagar es de: $${total} `;
    divCarrito.appendChild(pago);
    divCarrito.appendChild(botonF);
    botonElminar.addEventListener("click", ()=>{
        carritoDeCompras.pop();
        if(can==1){
            if(carritoDeCompras.length===0){
                total=total-aver.precio;
                guardarEnLocalStorage("Precio final", total);
                parrafo.remove();
                pago.remove();
                botonF.remove();
                eliminarDelCarrito(aver.id);
                divCarrito.appendChild(parrafoCarrito);
                total=0;
            }else{
                total=total-aver.precio;
                guardarEnLocalStorage("Precio final", total);
                parrafo.remove();
                localStorage.removeItem(aver.id);
                pago.innerText=`El monto a pagar es de: $${total} `;
                botonElminar.innerText="Eliminar del carrito";
                parrafo.appendChild(botonElminar);
                eliminarDelCarrito(aver.id);
            }
        }else{
            total=total-aver.precio;
            guardarEnLocalStorage("Precio final", total);
            can=can-1;
            parrafo.innerText=aver.nombre +" "+ "$"+aver.precio+" "+ `cantidad: ${can}`;
            pago.innerText=`El monto a pagar es de: $${total} `;
            parrafo.appendChild(botonElminar);
            eliminarDelCarrito(aver.id);
        }
    })
    
    return;
}
function eliminarDelCarrito(i){
    switch(i){
        case 1:
            if(c==1){
                localStorage.removeItem(i);
                c=c-1;
                return;
            }
            c=c-1;
            guardarEnLocalStorage(i, c);
            return;
        case 2:
            if(c2==1){
                localStorage.removeItem(i);
                c2=c2-1;
                return;
            }
            c2=c2-1;
            guardarEnLocalStorage(i, c2);
            return;
        case 3:
            if(c3==1){
                localStorage.removeItem(i);
                c3=c3-1;
                return;
            }
            c3=c3-1;
            guardarEnLocalStorage(i, c3);
            return;
        case 4:
            if(c4==1){
                localStorage.removeItem(i);
                c4=c4-1;
                return
            }
            c4=c4-1;
            guardarEnLocalStorage(i, c4);
            return;
        case 5:
            if(c5==1){
                localStorage.removeItem(i);
                c5=c5-1;
                return
            }
            c5=c5-1;
            guardarEnLocalStorage(i, c5);
            return;
        case 6:
            if(c6==1){
                localStorage.removeItem(i);
                c6=c6-1;
                return;
            }
            c6=c6-1;
            guardarEnLocalStorage(i, c6);
            return;
        case 7:
            if(c7==1){
                localStorage.removeItem(i);
                c7=c7-1;
                return;
            }
            c7=c7-1;
            guardarEnLocalStorage(i, c7);
            return;
        case 8:
            if(c8==1){
                localStorage.removeItem(i);
                c8=c8-1;
                return;
            }
            c8=c8-1;
            guardarEnLocalStorage(i, c8);
            return;
    }
}
function AgregarAlcarrito(i, value){
    switch (i){
        case 1:
            parseInt(c=c+1);
            AgregarAlcarrito2(value, c, productosDelCarrito);
            return;
        case 2:
            c2=parseInt(c2=c2+1);
            AgregarAlcarrito2(value, c2, productosDelCarrito2);
            return;
        case 3: 
            c3=c3+1;
            AgregarAlcarrito2(value, c3, productosDelCarrito3);
            return;
        case 4:
            c4=c4+1;
            AgregarAlcarrito2(value, c4, productosDelCarrito4);
            return;
        case 5:
            c5=c5+1;
            AgregarAlcarrito2(value, c5, productosDelCarrito5);
            return;
        case 6:
            c6=c6+1;
            AgregarAlcarrito2(value, c6, productosDelCarrito6);
            return;
        case 7:
            c7=c7+1
            AgregarAlcarrito2(value, c7, productosDelCarrito7)
            return
        case 8:
            c8=c8+1;
            AgregarAlcarrito2(value, c8, productosDelCarrito8);
            return;
    }   
}
comprobarCarrito()
//********************************** */
//LISTA DE PRODUCTOS///////////////
const generarProductos = async ()=>{
    const res = await fetch('/productos.json');
    const info = await res.json();
    const datos = await info;
    for(indice of datos){
        const productosCards=document.createElement("div");
        const botonAniadir=document.createElement("div");
        const divDetalles=document.createElement("div");
        botonAniadir.innerHTML=`<button style="width="100%"" class="CartBtn">
            <span class="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
            </span>
            <p class="text">AÑADIR</p>
        </button>`;
        const valorBoton=indice.id;
        botonAniadir.getElementsByClassName(valorBoton);
        botonAniadir.style.textAlign="center";
        productosCards.classList=("estiloPro");
        productosCards.innerHTML=`
            <div class="infoProductos">
                <img class="imgPro" src=${indice.foto} alt=${indice.des}>
            </div>`;
        divDetalles.innerHTML=`<h4 class="nombreProductos" style="color: white">${indice.nombre}</h4>
                    <p style="text-align: center; color: white">$${indice.precio}</p>
            `;
        divPro.appendChild(productosCards);
        productosCards.appendChild(divDetalles);
        divDetalles.className=("detalles");
        divDetalles.appendChild(botonAniadir);
        
        botonAniadir.addEventListener("click", ()=>{
                const aver=datos.find(({ id }) => id === valorBoton);
                AgregarAlcarrito(aver.id, valorBoton);
                pago.style.fontSize="1.5rem";
                pago.style.color="red";
        })
    }
}
generarProductos();
//********************************** */
//CAMBIAR FONDO///////////////

//********************************** */
//QUITAR DEL CARRITO///////////////

//********************************** */
//FINALIZAR COMPRA///////////////
botonF.addEventListener("click", ()=>{
    Swal.fire({
        title: "Desea finalizar la compra?",
        text: `El monto a pagar es de: ${total}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Finalizar compra"
      }).then((result) => {
        if (result.isConfirmed) {
            productosDelCarrito.remove();
            productosDelCarrito2.remove();
            productosDelCarrito3.remove();
            productosDelCarrito4.remove();
            productosDelCarrito5.remove();
            productosDelCarrito6.remove();
            productosDelCarrito7.remove();
            productosDelCarrito8.remove();
            botonF.remove();
            total=0;
            c=0;
            c2=0;
            c3=0;
            c4=0;
            c5=0;
            c6=0;
            c7=0;
            c8=0;
            pago.remove();
            localStorage.removeItem("Precio final");
            for (let i = 1; i < 9; i++) {
                localStorage.removeItem(i);
            }
            parrafoCarrito.innerText="EL CARRITO ESTÁ VACIO, AGREGUE UN PRODUCTO PARA LLENARLO";
            divCarrito.appendChild(parrafoCarrito);
          Swal.fire({
            title: "Su compra se ha realizado!",
            icon: "success", 
          });
        }
      });
      
})

