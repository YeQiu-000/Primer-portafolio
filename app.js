//Son nomenclarura (respertar el como lo usas), depende cual uses tienes que seguir con ese
const btnMenu = document.querySelector("#header-icon"); //camel-case
// const btn_menu = document.getElementById("header-icon") snake-case
const contLink = document.querySelector("#header-links");
const btnClose = document.querySelector("#header-close");


btnMenu.addEventListener('click', () => {
    //console.log("le diste click al svg")
    contLink.classList.toggle("abierto")
    //toggle elimina u agrega dependiendo si existe la clase misma
});
btnClose.addEventListener('click', () => {
    contLink.classList.toggle("abierto")
});