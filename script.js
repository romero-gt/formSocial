let form = document.getElementById('socialForm');
let resultado = document.getElementById('resultado');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura de dados
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let nascimento = document.getElementById('nascimento').value;
    let estadoCivil = document.getElementById('estadoCivil').value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let opcaoSexual = document.getElementById('opcaoSexual').value;

    if (!nascimento) {
        alert('Data de nascimento é obrigatória!');
        return;
    }

    const dataNascimento = new Date(nascimento);
    const idade = calcularIdade(dataNascimento);

    // Mostrando o resultado
    resultado.innerHTML = `
        <div class="card p-4 shadow-sm">
            <h4>Cadastro Realizado:</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${nome} ${sobrenome}</li>
                    <li class="list-group-item">${idade} anos</li>
                    <li class="list-group-item">${sexo}</li>
                    <li class="list-group-item">${opcaoSexual}</li>
                    <li class="list-group-item">${estadoCivil}</li>
                </ul>
        </div>
    `;
});

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    if (hoje.getMonth() < dataNascimento.getMonth() || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())
    ) {
        idade--;
    }
    return idade;
}