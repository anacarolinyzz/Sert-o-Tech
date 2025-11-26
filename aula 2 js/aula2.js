//atv 1
const texto = document.getElementById("t_mudar");
const titulo = document.getElementById("ti_mudar");
const botao = document.getElementById("b_mudar");
botao.addEventListener("click", () => {
    if (texto.textContent ==="Ana Caroliny") {
        texto.textContent = "Carol";
        titulo.textContent = "Clique para ver o meu nome";
    } else {
        texto.textContent = "Ana Caroliny";
        titulo.textContent = "Clique para ver meu apelido";
    };
    
});
//atv 2
const digitar = document.getElementById("digita");
const copiar = document.getElementById("copiar");
digitar.addEventListener ("input", function() {
    copiar.textContent = digitar.value;
});

//atv 3
const p_img = document.getElementById("p_img") 


p_img.addEventListener("dblclick", () => {
    if (p_img.src.includes("https://static.vecteezy.com/system/resources/thumbnails/024/508/958/small/horse-isolated-on-background-with-generative-ai-png.png")) {
        p_img.src = "https://png.pngtree.com/png-clipart/20230922/ourmid/pngtree-white-horse-isolated-on-transparent-background-png-image_10152597.png"
    } else {
        p_img.src = "https://static.vecteezy.com/system/resources/thumbnails/024/508/958/small/horse-isolated-on-background-with-generative-ai-png.png"
    }
});

//atv 4
const duvida = document.getElementById("duvida");
const dica = document.getElementById("dica");

duvida.addEventListener("mouseover", () => {
    dica.style.opacity = "1";
});
duvida.addEventListener("mouseout", () => {
    dica.style.opacity = "0";
});

//atv  5
let letra = document.getElementById("quantidade");
const numero = document.getElementById("numero");
letra.addEventListener("input", function() {
    numero.textContent = letra.value.length;
})

//atv 6 
const entrada = document.getElementById("entrada");
const enviar = document.getElementById("enviar");

enviar.addEventListener("submit", function() {
    if(entrada.value.trim() === '') {
        event.preventDefault();
    } else {
        console.log('codigo enviado!')
    }
})