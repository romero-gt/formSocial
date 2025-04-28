const form = document.getElementById('socialForm'); //*id do formulário
const resultado = document.getElementById('resultado'); //*classe do resultado


form.addEventListener('submit', function(event) { //adiciona o evento de submit ao formulário
    event.preventDefault(); //previne o comportamento padrão do formulário (recarregar a página)

    // Captura de dados
let nome= document.getElementById('nome').value; //pega o valor do campo nome
let sobrenome = document.getElementById('sobrenome').value; //pega o valor do campo sobrenome
let nascimento = document.getElementById('nascimento').value; //pega o valor do campo nascimento
let estadoCivil = document.getElementById('estadoCivil').value; //pega o valor do campo estado civil
let sexo = document.querySelector('input[name="sexo"]:checked').value; //pega o valor do campo sexo
let opcaoSexual = document.getElementById('opcaoSexual').value; //pega o valor do campo opção sexual

if (!nascimento) { //verifica se o campo nascimento está vazio
    alert('Campo Nascimento é obrigatório!'); //se estiver vazio, mostra um alerta
    return; //retorna para o início da função
}

//Criou uma função para calcular a idade - de modo que ao invés de vir apenas a data de nascimento, vem apenas a idade
const dataNascimento = new Date(nascimento); //cria uma nova data com o valor do campo nascimento
const idade = calcularIdade(dataNascimento); //chama a função calcularIdade passando a data de nascimento como parâmetro

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
        </ul>]
</div>
`;
})

function calcularIdade(dataNascimento) { //função para calcular a idade
    const hoje = new Date(); //cria uma nova data com o valor da data atual
    let idade = hoje.getFullYear() - dataNascimento.getFullYear(); //pega o ano atual e subtrai o ano de nascimento
    
    if (hoje.getMonth () < dataNascimento.getMonth () || (hoje.getMonth === hoje.getMonth() === dataNascimento.getMonth() && hoje.  
    getDate( <dataNascimento))) { //verifica se 
        idade--; //se for, subtrai 1 da idade
    }
    return idade; //retorna a idade
}