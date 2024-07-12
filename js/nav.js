const navegacion=document.createElement("div");
const li=document.createElement("li");
nav.appendChild(navegacion);
li.style.fontSize="1.5rem";
li.style.width="16rem";
li.style.marginRight="1rem";
li.className=("navbar-item");
navegacion.className=("collapse navbar-collapse");
navegacion.appendChild(ul);
li.innerHTML=`<a class="nav-link" href="index.html" >INICIO</a>`;
    ul.appendChild(li);
for (const link of menu){
    const li=document.createElement("li");
    li.style.fontSize="1.5rem";
    li.style.width="16rem";
    li.style.marginRight="1rem";
    li.className=("navbar-item");
    li.innerHTML=`<a class="nav-link" href="${link}.html" >${link.toUpperCase()}</a>`;
    ul.appendChild(li);
}