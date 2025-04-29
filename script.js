let form = document.getElementById("socialForm");
let resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let nascimento = document.getElementById("nascimento").value;
    let estadoCivil = document.getElementById("estadoCivil").value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let opcaoSexual = document.getElementById("opcaoSexual").value;

    const regexTexto = /^[A-Za-zÀ-ú\s]+$/;
    if (!regexTexto.test(nome) || !regexTexto.test(sobrenome)) {
        alert('Nome e sobrenome devem conter apenas letras')
    }


    if (!nascimento) {
        alert("Data de nascimento é obrigatória!");
        return;
    }

    const dataNascimento = new Date(nascimento);
    const idade = calcularIdade(dataNascimento);
    const geracao = calcularGeracao(dataNascimento);

    if (idade < 10 || idade > 103) {
        alert("A idade é invalida");
    }

    resultado.innerHTML = `
        <div class="card p-4 shadow-sm"> 
            <h4>Cadastro Realizado</h4>
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
    form.resert();
});

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    if (hoje.getMonth() < dataNascimento.getMonth()
        || (hoje.getMonth() === dataNascimento.getMonth()
            && hoje.getDate() < dataNascimento.getDate())
    ) {
        idade--;
    }
    return idade;
}

function calcularGeracao(dataNascimento) {
    const ano = dataNascimento.getFullYear();
    switch (true) {
        case (ano >= 2010): return "Geração Alpha";
        case (ano >= 1997): return "Geração Z";
        case (ano >= 1981): return "Millennials";
        case (ano >= 1965): return "Geração X";
        case (ano >= 1946): return "Baby Boomer";
        case (ano >= 1928): return "Geração Silenciosa"
        default: return "Geração Grandiosa";
    }
}