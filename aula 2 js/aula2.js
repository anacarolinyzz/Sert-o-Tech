//atv 1
const texto = document.getElementById("t_mudar");
const botao = document.getElementById("b_mudar");
botao.addEventListener("click", function () {
    texto.textContent = "Carol";
});
//atv 2
const digitar = document.getElementById("digita");
const copiar = document.getElementById("copiar");
digitar.addEventListener ("input", function() {
    copiar.textContent = digitar.value;
});

//atv 3
const p_img = document.getElementById("p_img") 

p_img.addEventListener("dblclick", function() {
    p_img.src = "https://png.pngtree.com/png-clipart/20230922/ourmid/pngtree-white-horse-isolated-on-transparent-background-png-image_10152597.png";
});

//atv 4
const duvd = document.getElementById("duvd");
const dica = document.getElementById("dica");

duvd.addEventListener("mouseover", function() {
    dica.style.zIndex = "1";
});
duvd.addEventListener("mouseout", function() {
    dica.style.zIndex = "-1";
});
 