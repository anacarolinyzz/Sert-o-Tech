const secao = document.querySelector('#hero')
const subtitulo = document.querySelector('#sub')
const texto = document.createElement('p');
texto.textContent = 'Bem-vindo ao site!';

secao.insertBefore(texto, subtitulo);


const lista = document.getElementById('lista');
const btntopo = document.getElementById('btntopo');
const btnfim = document.getElementById('btnfim');
const btnlimpar = document.getElementById('limpar');
btnfim.addEventListener('click', function() {
    const ntarefa = document.createElement('li');
    ntarefa.textContent = 'esse item foi adicionado ao fim ';
    lista.appendChild(ntarefa);

    const btnremov = document.createElement('button');
    btnremov.textContent = 'Remover';
    ntarefa.appendChild(btnremov);

    btnremov.addEventListener('click', function() {
        ntarefa.remove();


    });


});

btntopo.addEventListener('click', function() {
        const ntarefacima = document.createElement('li');
        ntarefacima.textContent = 'item adicionado no topo ';
        if (lista.children.length > 0) {
            lista.insertBefore(ntarefacima, lista.firstChild);
        } else {  
            lista.appendChild(ntarefacima);
            
        }

        const btnremov = document.createElement('button');
        btnremov.textContent = 'remover';
        ntarefacima.appendChild(btnremov);

        btnremov.addEventListener('click', function() {
            ntarefacima.remove();
        })


});

btnlimpar.addEventListener('click', function() {
    lista.innerHTML = '';
});



