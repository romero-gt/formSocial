let form = document.getElementById('socialForm')
let resultado = document.getElementById('resultado')


// Captura de dados
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let nascimento = document.getElementById('nascimento').value;
    let estadoCivil = document.getElementById('estadoCivil').value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    // let sexo = document.getElementByName('sexo:checked');
    let opcaoSexual = document.getElementById('opcaoSexual').value;



// Mostrando o resultados
    resultado.innerHTML =
    `<div class = "card p-4 shadow-sm">
        <h4> Cadrastro Realizado </h4>
        <ul Class= "list-group list-group-flush>      
        <li class= "list-group-item">${nome} ${sobrenome} </li>
        <li class= "list-group-item">${sexo}  </li>
        <li class= "list-group-item">${opcaoSexual} </li>
        <li class= "list-group-item">${estadoCivil} </li>

        </ul>
       
    </div>`
})

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    let idade = hoje.getFullYear();
    if (hoje.getMonth() < dataNascimento.getMonth() || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.get))



}