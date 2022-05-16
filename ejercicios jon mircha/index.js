import hamburgerMenu from "./menu_hamburguesa.js";

const d= document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a")

})




/*const $hamburger = document.querySelector(".hamburger");
//console.log($hamburger.className)
//console.log($hamburger.classList.contains("hamburger"))
//$hamburger.classList.add("oculto")

    

//$hamburger.classList.toggle("oculto");


function togglE() {
   
        $hamburger.classList.toggle("visible");
    

}

$hamburger.addEventListener("click", togglE);

/*const hamburguesa = document.getElementsByClassName("hamburger");
const $ham = document.querySelector(".ham");




//hamburguesa.addEventListener("click", abrirMenu())

hamburguesa.classList.toggle("menu");


/*function abrirMenu(){
    $ham.classList.toggle("menu");
}*/