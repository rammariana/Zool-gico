// creando variables a partir del ID //

const leon = document.getElementById('leon');
const elefante = document.getElementById('elefante');
const tigre = document.getElementById('tigre');
const gorila = document.getElementById('gorila');
const hipopotamo = document.getElementById('hipopotamo');
const serpiente = document.getElementById('serpiente');
var parrafo = document.getElementById('parrafo')
var img = document.getElementById('img-div');

// Obteniendo sonidos//

var sndleon = new Audio('sndleon.mp3');
var sndelefante = new Audio('sndelefante.mp3');
var sndhipopotamo = new Audio('hiposound.mp3');
var sndtigre = new Audio('sndtigre.mp3');
var sndserpiente = new Audio('serpientesound.mp3');
var sndgorila = new Audio('gorilasound.mp3');

// Creando funciones para abrir y cerrar ventana emergente //

function abrir() {
   document.getElementById('popup').style.display='block';
}

function cerrar() {
   document.getElementById('popup').style.display="none";
}

// Creando el evento que emitirá sonidos y abrirá ventana//
leon.onclick = () => {

   sndleon.play();
   this.abrir();
   parrafo.innerHTML = '¡Soy un León...!';
   img.src = '/leon.jpg';
   img.onclick = () => {
      // Creando sonido al hacer click en la imagen dentro de la ventana//
      sndleon.play();
   }
   
}

elefante.onclick = () => {

   sndelefante.play();
   this.abrir();
   parrafo.innerHTML = '¡Soy un Elefante...!';
   img.src = '/elefante.jpg';
   img.onclick = () => {
      sndelefante.play();
   }

}

gorila.onclick = () => {

    sndgorila.play();
    this.abrir();
    parrafo.innerHTML = '¡Soy un Gorila...!';
    img.src = '/gorila.jpg';
    img.onclick = () => {
      sndgorila.play();
    }
   }

serpiente.onclick = () => {

    sndserpiente.play();
    this.abrir();
    parrafo.innerHTML = '¡Soy una Serpiente...!';
    img.src = '/serpiente.jpg';
    img.onclick = () => {
      sndserpiente.play();
    }
}

tigre.onclick = () => {

   sndtigre.play();
   this.abrir();
   parrafo.innerHTML = '¡Soy un Tigre...!';
   img.src = '/tigre.jpg';
   img.onclick = () => {
      sndtigre.play();
      }
   }

hipopotamo.onclick = () => {

   sndhipopotamo.play();
   this.abrir();
   parrafo.innerHTML = '¡Soy un Hipopótamo...!';
   img.src = '/hipopotamo.jpg';
   img.onclick = () => {
      sndhipopotamo.play();
   }
}