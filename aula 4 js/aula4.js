const body = document.body;
const mudar = document.getElementById('mudar');

mudar.addEventListener ('click', function() {
    body.classList.toggle('tema_escuro');
});

const recebe = document.getElementById('recebe');
const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function(){
    if (recebe.value === '') {
        recebe.classList.add('erro');
    } else {
        recebe.classList.remove('erro');
        recebe.value = '';
    }
});

const caixa = document.getElementById('caixa');
const sumir = document.getElementById('sumir');

sumir.addEventListener('click', function() {
    caixa.classList.toggle('aparecer');
});

let intervalo;
function passar_segundo() {
    let segundos = new Date().toLocaleTimeString();
    document.getElementById('segundo').textContent = segundos;
}
intervalo = setInterval(passar_segundo, 1000);




const lista = document.querySelectorAll('.lista li');

for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    element.classList.toggle('urgente', false);

    element.addEventListener('click', () => {
        const li = document.querySelectorAll('.lista li')
        for (let index = 0; index < lista.length; index++) {
            const element = lista[index];
            element.classList.toggle('urgente', false);
        }
        element.classList.toggle('urgente');
    });
    
}

