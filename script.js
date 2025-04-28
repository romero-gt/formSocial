let form = document.getElementById('socialForm')
let resultado = document.getElementById('resultado')

form.addEventListener('submit', function(event){
    event.preventDefault();

    let nome = document.querySelector('#nome').value;
    let sobrenome = document.querySelector('#sobrenome').value;
    let nascimento = document.querySelector('#nascimento').value;
    let estadoCivil = document.querySelector('#estadoCivil').value;
    let sexo = document.querySelector('input[name=sexo]:checked').value;
    let opcaoSexul = document.getElementById('opcaoSexual').value;

    if (!nascimento) {
        alert('Data de nascimento é obrigatório');
        return
    }

    const dataNascimento = new Date(nascimento);
    const idade = calcularIdade(dataNascimento);


    resultado.innerHTML = `
        <div class="card p-4 shadow-sm">
            <h4>Cadastro realizado</h4>
            <ul class="list-group">
                <li class="list-group-item">${nome} ${sobrenome}</li>
                <li class="list-group-item">${idade}</li>
                <li class="list-group-item">${geracao}</li>
                <li class="list-group-item">${sexo}</li>
                <li class="list-group-item">${opcaoSexul}</li>
                <li class="list-group-item">${estadoCivil}</li>
            </ul>
        </div>
    `;
});

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    if (hoje.getMonth() < dataNascimento.getMonth() 
    || (hoje.getMonth() === dataNascimento.getMonth 
    && hoje.getDate < dataNascimento.getDate())) 
    {
        idade--;
    }
    return idade;
}