let form = document.getElementById('socialForm');
let resultado = document.getElementById('resultado');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura de dados
    const nome = document.getElementById('nome').value.trim().toUpperCase();
    const sobrenome = document.getElementById('sobrenome').value.trim().toUpperCase();
    const nascimento = document.getElementById('nascimento').value;
    const estadoCivil = document.getElementById('estadoCivil').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const opcaoSexual = document.getElementById('opcaoSexual').value;

    const regexTexto = /^[A-Za-zÀ-ú\s]+$/; // Serve pra validação do texto (fazer com que seja apenas letras) 

    if (!regexTexto.test(nome) || !regexTexto.test(sobrenome)) {
        alert("Nome e sobre nome deve conter apenas letras.");
        return;
    }

    if (!nascimento) {
        alert('Data de nascimento é obrigatória!');
        return;
    }

    const dataNascimento = new Date(nascimento);
    const idade = calcularIdade(dataNascimento);

    if (idade < 10 || idade > 90) {
        alert("Idade inválida! Deve ser uma idade entre 10 e 90 anos")
    }

    const geracao = indentificadorDeGeracao(dataNascimento.getFullYear());

    // Mostrando o resultado
    resultado.innerHTML = `
        <div class="card p-4 shadow-sm">
            <h4>Cadastro Realizado:</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${nome} ${sobrenome}.</li>
                    <li class="list-group-item">${idade} anos.</li>
                    <li class="list-group-item">Você faz parte da geração ${geracao}.</li>
                    <li class="list-group-item">${sexo}.</li>
                    <li class="list-group-item">${opcaoSexual}.</li>
                    <li class="list-group-item">${estadoCivil}.</li>
                </ul>
        </div>
    `;

    form.reset();
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

function indentificadorDeGeracao(ano) {
    switch (true) {
        case ano >= 1946 && ano <= 1964:
            return "Baby Boomer";
        case ano >= 1965 && ano <= 1980:
            return "Geraçaõ X";
        case ano >= 1981 && ano <= 1996:
            return "Millenium (Geração Y)";
        case ano >= 1997 && ano <= 2012:
            return "Centennial (Geração Z)";
        case ano >= 2013:
            return "Geração Alpha";
        default:
            return "Geração não classificada";
    }
}