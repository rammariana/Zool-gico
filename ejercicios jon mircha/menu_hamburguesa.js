export default function hamburgerMenu(panelBtn, panel, menuLink){  
    /*funcion para exportar a otro modulo de js, 
    recide 3 parámetros, que son las 3 clases que usaremos, de los enlaces, del boton hamburguesa y del nav*/
    
    const d = document; // constante para guardar el document (supongo que para que detecte los clicks)

    d.addEventListener("click", (e) => {
        /*matches ve si coincide(target es el objeto que origina el evento)*/
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){  // con el asterisco se selecci0ona todo lo que esta dentro del panel-btn
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");

        }
        if(e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
    
        }
    });
    
}