// Navegation Menu
let btnMenu = document.querySelector(".btn-menu");
let barIconX = document.querySelector(".btn-menu i");
let menu = document.querySelector(".list-container");
let menuContent = document.querySelector(".menu");
var activador = true;

//Detecta cuando hago click en el icono .fa-bars
//en lugar de una funcion se usa funcion flechas (ECMAScript 6 - js moderno)
//Animación del Menú desplegable
btnMenu.addEventListener("click", (event) => {
  //cuando activador=true, se intercambia el icono ("toggle"), por una X
  //Icon X
  barIconX.classList.toggle("fa-times");
  //si activador=true, se muestra la animación
  if (activador) {
    menu.style.left = "0%";
    menu.style.transition = "0.5s";
    //una vez que se muestra la animación, activador=false
    activador = false;
  } else {
    //si activador=false, se "cierra la animación"
    activador = false;
    menu.style.left = "-100%";
    //vuelve a su posicion inicial, bucle de función
    activador = true;
  }
});

////Intercala clase "activa"
let enlaces = document.querySelectorAll(".lists li a");
//utilizamos bucle (forEach), permite recorrer arreglos
enlaces.forEach((element) => {
  element.addEventListener("click", (event) => {
    //al hacer click recorre el arreglo element
    enlaces.forEach((link) => {
      //parametro link para recorrer los enlaces
      link.classList.remove("active"); //al hacer click remueve la clase
    });
    event.target.classList.add("active");
  });
});

//Scroll Efect

let prevScrollPos = window.pageYOffset; //Esta variable esta fuera del onScroll, me devuelve de la ventana en gral (valor estático)
let goTop = document.querySelector(".go-top");

window.onscroll = () => {
  //Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset; //Esta variable esta fuera del onScroll, me devuelve de la ventana al hacer scroll (los valores cambiante).
  //Mostrar un ocultar menú

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = "0px";
    menuContent.style.transition = "0.5s";
  } else {
    menuContent.style.top = "-60px";
    menuContent.style.transition = "0.5s";
  }
  prevScrollPos = currentScrollPos;

  //Mostrar y ocultar scroll Estilos
  let arriba = window.pageYOffset;

  //Conditions
  if (arriba <= 600) {
    menuContent.style.borderBottom = "none";

    //Ocultar Go Top
    goTop.style.right = "-100px";
  } else {
    menuContent.style.borderBottom = "3px solid #0554F2";

    //Mostrar Go Top
    goTop.style.right = "0px";
  }
};

//Go Top Click
goTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector("#abajo");

abajo.addEventListener("click", () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
});
