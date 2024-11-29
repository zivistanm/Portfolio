let menuVisible = false;

function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;

}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("figma");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajoequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("adaptabilidad");
        habilidades[10].classList.add("proactividad");
    }
}

window.onscroll = function() {
    efectoHabilidades();
}