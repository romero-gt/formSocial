
let form = document.getElementById('socialForm');
let resultado = document.getElementById('resultado');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura de dados
    let nome = document.getElementById('nome').value.trim().toUpperCase();
    let sobrenome = document.getElementById('sobrenome').value.trim().toUpperCase();
    let nascimento = document.getElementById('nascimento').value;
    let estadoCivil = document.getElementById('estadoCivil').value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let opcaoSexual = document.getElementById('opcaoSexual').value;
    let erro = document.getElementById('erro');

    const regexTexto = /^[A-Za-zÀ-ú\s]+$/;
    if (!regexTexto.test(nome) || !regexTexto.test(sobrenome)) {
        erro.innerText = 'Nome e sobrenome devem conter apenas letras.'
        return;
    }

    if (!nascimento) {
        alert('Data de nascimento é obrigatória!');
        return;
    }

    const dataNascimento = new Date(nascimento);
    const idade = calcularIdade(dataNascimento);

    if (idade < 10 || idade > 90) {
        alert("Idade inválida! Deve ser entre 10 e 90 anos.")
    }

    const geracao = identificarGeracao(dataNascimento.getFullYear());

    // Mostrando o resultado
    resultado.innerHTML = `
        <div class="card p-4 shadow-sm">
            <h4>Cadastro Realizado:</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${nome} ${sobrenome}</li>
                    <li class="list-group-item">${idade} anos</li>
                    <li class="list-group-item">${geracao}</li>
                    <li class="list-group-item">${sexo}</li>
                    <li class="list-group-item">${opcaoSexual}</li>
                    <li class="list-group-item">${estadoCivil}</li>
                </ul>
        </div>
    `;

    form.reset();
    erro.innerText = "";
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

function identificarGeracao(ano) {
    switch (true) {
        case ano >= 1946 && ano <= 1964:
            return 'Baby Boomer';
        case ano >= 1965 && ano <= 1980:
            return 'Geração X';
        case ano >= 1981 && ano <= 1996:
            return 'Millenium (Geração Y)';
        case ano >= 1997 && ano <= 2012:
            return 'Centennial (Geração Z)';
        case ano >= 2013:
            return 'Geração Alpha';
        default:
            return 'Geração não classificada';
    }
}
