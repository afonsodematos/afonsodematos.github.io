function chbg(color) {
    document.getElementById('aquad').style.backgroundColor = color;
}


var projs = document.getElementsByClassName("load_content");
/*
for (i = 0; i < projs.length; i++) {
    projs[i].classList.add("none");
}*/

console.log(projs);

console.log("oi")

var menuitems = document.getElementsByClassName("swag_link");

console.log(menuitems);
console.log("OI!");

for (i = 0; i < menuitems.length; i++) {
    menuitems[i].addEventListener("click", openproj);
}


function openproj() {

    for (i = 0; i < projs.length; i++) {
        projs[i].classList.add("none");
    }

    console.log("oiu")

    /*
    if (current == "aittakes") {
        console.log("METAHAVEN LIKED THIS");
    }*/

    document.getElementById(event.srcElement.id.slice(1)).classList.remove("none");
    //document.getElementById(event.srcElement.id.slice(1)).classList.add("cont_proj");

    window.scrollTo(0, 0);

}


/* FUNÇÕES PARA ABRIR E FECHAR O MENU/PROJETOS NO MOBILE*/

function projetaparecer() {
    var proj = document.getElementById("projetos");
    var menu = document.getElementById("menu")
    var nom = document.getElementById("asobre");
    var lis = document.getElementById("lislis");
    var quad = document.getElementById("aquad");
    
    proj.style.display = "block";
    nom.style.display = "none";
    lis.style.display = "none";
    proj.style.pointerEvents = "all";
    menu.style.pointerEvents = "none";
    quad.style.pointerEvents = "all";
}

function menuaparecer() {
    var proj = document.getElementById("projetos");
    var menu = document.getElementById("menu")
    var nom = document.getElementById("asobre");
    var lis = document.getElementById("lislis");
    var quad = document.getElementById("aquad");
    
    proj.style.display = "none";
    nom.style.display = "block";
    lis.style.display = "block";
    proj.style.pointerEvents = "none";
    menu.style.pointerEvents = "all";
    quad.style.pointerEvents = "all";

    
}