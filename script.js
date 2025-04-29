const form = document.getElementById('socialForm'); //*id do formulário
const resultado = document.getElementById('resultado'); //*classe do resultado


form.addEventListener('submit', function(event) {


    event.preventDefault(); //previne o comportamento padrão do formulário (recarregar a página)

    // Captura de dados
let nome= document.getElementById('nome').value.trim().toUpperCase(); //pega o valor do campo nome e
let sobrenome = document.getElementById('sobrenome').value.trim().toUpperCase(); //pega o valor do campo sobrenome
let nascimento = document.getElementById('nascimento').value; //pega o valor do campo nascimento
let estadoCivil = document.getElementById('estadoCivil').value; //pega o valor do campo estado civil
let sexo = document.querySelector('input[name="sexo"]:checked').value; //pega o valor do campo sexo
let opcaoSexual = document.getElementById('opcaoSexual').value; //pega o valor do campo opção sexual

const regexTexto = /^[a-zA-ZÀ-ÿ\s]+$/; //expressão regular para validar texto (letras e espaços)
if (!regexTexto.test(nome) || !regexTexto.test(sobrenome)) { //verifica se o campo nome contém apenas letras e espaços
    alert('Campo Nome e Sobrenome deve conter apenas letras!'); //se não, mostra um alerta
    return; //retorna para o início da função
}

if (!nascimento) { //verifica se o campo nascimento está vazio
    alert('Campo Nascimento é obrigatório!'); //se estiver vazio, mostra um alerta
    return; //retorna para o início da função
}


if (!nascimento) { //verifica se o campo nascimento está vazio
    alert('Campo Nascimento é obrigatório!'); //se estiver vazio, mostra um alerta
    return; //retorna para o início da função

}


//Criou uma função para calcular a idade - de modo que ao invés de vir apenas a data de nascimento, vem é a idade
const dataNascimento = new Date(nascimento); //cria uma nova data com o valor do campo nascimento
const idade = calcularIdade(dataNascimento); //chama a função calcularIdade passando a data de nascimento como parâmetro

if (idade < 10 || idade > 90) { //verifica se a idade está entre 10 e 90 anos
    alert('Idade deve estar entre 10 e 90 anos!'); //se não, mostra um alerta
    return; //retorna para o início da função
}

const geracao = identificarGeracao(dataNascimento.getFullYear());  //chama a função identificarGeracao passando o ano de nascimento como parâmetro


// Mostrando o resultado
resultado.innerHTML = `
<div class="card p-4 shadow-sm">
    <h4>Cadastro Realizado:</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${nome} ${sobrenome}</li>
            <li class="list-group-item">${nascimento}</li>
            <li class="list-group-item">${geracao}</li>
            <li class="list-group-item">${sexo}</li>
            <li class="list-group-item">${opcaoSexual}</li>
            <li class="list-group-item">${estadoCivil}</li>
        </ul>
</div>
`;

form.reset(); //limpa o formulário após o envio

}); //adiciona o evento de submit ao formulário; 

function calcularIdade(dataNascimento) { //função para calcular a idade
    const hoje = new Date(); //cria uma nova data com o valor da data atual
    let idade = hoje.getFullYear() - dataNascimento.getFullYear(); //pega o ano atual e subtrai o ano de nascimento
    
    if (hoje.getMonth() < dataNascimento.getMonth() || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate < dataNascimento.getDate())) { //verifica se a data atual é menor que a data de nascimento

    idade--; //se a data atual for menor que a data de nascimento, subtrai 1 da idade
    return idade; //retorna a idade
}
   
}

function identificarGeracao(ano) { //função para identificar a geração
    switch (true) { //inicia um switch com a condição true
        case ano >= 1946 && ano <= 1964: //verifica se o ano está entre 1946 e 1964
            return 'Baby Boomers'; //se sim, retorna Baby Boomers
        case ano >= 1965 && ano <= 1980: //verifica se o ano está entre 1965 e 1980
            return 'Geração X'; //se sim, retorna Geração X
        case ano >= 1981 && ano <= 1996: //verifica se o ano está entre 1981 e 1996
            return 'Geração Y (Millennials)'; //se sim, retorna Geração Y (Millennials)
        case ano >= 1997 && ano <= 2012: //verifica se o ano está entre 1997 e 2012
            return 'Geração Z (Centennial)'; //se sim, retorna Geração Z
        case ano >= 2013: //verifica se o ano está igual ou após 2013 
            return 'Geração Alpha'; //se sim, retorna Geração Alpha
        default: //se não, retorna 'Geração desconhecida'
            return 'Geração não-classicada'; //se não, retorna Geração desconhecida
    }
}
    