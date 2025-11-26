const secao = document.querySelector('#hero')
const subtitulo = document.querySelector('#sub')
const texto = document.createElement('p');
texto.textContent = 'Bem-vindo ao site!';

secao.insertBefore(texto, subtitulo);


const lista = document.getElementById('lista');
const btntopo = document.getElementById('btntopo');
const btnfim = document.getElementById('btnfim');

btnfim.addEventListener('click', function() {
    const ntarefa = document.createElement('li');
    ntarefa.textContent = 'esse item foi adicionado ao fim';
    lista.appendChild(ntarefa);

    btntopo.addEventListener('click', function() {
    const ntarefacima = document.createElement('li');
    ntarefacima.textContent = 'esse item foi adicionado ao topo';
    lista.insertBefore(ntarefacima, ntarefa)

});

    const btnremov = document.createElement('button');
    btnremov.textContent = 'Remover';
    ntarefa.appendChild(btnremov);

    btnremov.addEventListener('click', function() {
        ntarefa.remove();

    });


});