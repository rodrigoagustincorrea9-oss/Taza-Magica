// Animación al hacer scroll

const elementos = document.querySelectorAll("section");

function mostrarElementos() {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        if(posicion < window.innerHeight - 100){

            elemento.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();


// Ampliar imágenes de la galería

const imagenes = document.querySelectorAll(".galeria img");

imagenes.forEach(img=>{

    img.addEventListener("click",()=>{

        const visor=document.createElement("div");

        visor.style.position="fixed";
        visor.style.top="0";
        visor.style.left="0";
        visor.style.width="100%";
        visor.style.height="100%";
        visor.style.background="rgba(0,0,0,.9)";
        visor.style.display="flex";
        visor.style.justifyContent="center";
        visor.style.alignItems="center";
        visor.style.cursor="pointer";

        const foto=document.createElement("img");

        foto.src=img.src;
        foto.style.maxWidth="90%";
        foto.style.maxHeight="90%";
        foto.style.borderRadius="12px";

        visor.appendChild(foto);

        document.body.appendChild(visor);

        visor.onclick=()=>{

            visor.remove();

        }

    });

});
