/* 
const res = await fetch('./dados.json');
const data = await res.json();

console.log('JSON carregado', data); 

 */
const pessoas = [
    {
        nome : "João",
        idade : 16,
        habilidades : ["correr", "jogar"]
    },
    {
        nome : "Carla",
        idade : 17,
        habilidades : ["correr", "jogar"]
    },
    {
        nome : "Roberto",
        idade : 35,
        habilidades : ["correr", "jogar"]
    },
];
const salvar = document.getElementById('salvar');
const salvo = document.getElementById('salvo');
const carregar = document.getElementById('carregar');
const carregado = document.getElementById('carregado');
salvar.addEventListener('click', () => {
    localStorage.setItem('usuarios', JSON.stringify(pessoas));
    salvo.textContent = 'salvo';
    salvo.style.color = 'green';
    
});
carregar.addEventListener('click', () => {
    const dados = JSON.parse(localStorage.getItem("pessoas"));
    console.log(dados[0].nome);
    carregado.textContent = 'carregado';
    carregado.style.color = 'green';
});

