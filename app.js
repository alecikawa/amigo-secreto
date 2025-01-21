const inputNomeInserido = document.getElementById('amigo');
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');
let nomes = [];


function adicionarAmigo() {
    if(ulResultado.innerHTML !== '') {
        ulResultado.innerHTML = '';
    }

    if(inputNomeInserido.value === '') {
        alert('Informe o nome do amigo');
    }else if(nomes.includes(inputNomeInserido.value)) {
        alert('Amigo já adicionado');
    }else {
        nomes.push(inputNomeInserido.value)
    }
    
    atualizarLista();

    inputNomeInserido.value = '';
}


function atualizarLista() {
    ulListaAmigos.innerHTML = '';
    for(let i = 0; i < nomes.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = nomes[i];
        ulListaAmigos.appendChild(li);
    }
}


function sortearAmigo() {
    const indiceAleatorio = Math.floor((Math.random() * nomes.length)); 

    if(nomes.length === 0) {
        alert('lista vazia');
    }else{
        const li = document.createElement('li');
        ulResultado.innerHTML = '';
        li.innerHTML = `Nome Sorteado: ${nomes[indiceAleatorio]}`;
        ulResultado.appendChild(li);
    }

    nomes = [];
}