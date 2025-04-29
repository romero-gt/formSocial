let form = document.getElementById('socialForm');
let resultado = document.getElementById('resultado');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value.trim().toUpperCase();
    let sobrenome = document.getElementById('sobrenome').value.trim().toUpperCase();
    let nascimento = document.getElementById('nascimento').value;
    let estadoCivil = document.getElementById('estadoCivil').value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let opcaoSexual = document.getElementById('opcaoSexual').value;

    const regexTexto = /^[A-Za-zÀ-ú\s]+$/;

    if (!regexTexto.test(nome) || !regexTexto.test(sobrenome)) {
        alert('Nome e sobrenome deven conter apenas letras.');
        return;
    }

    if (!nascimento) {
        alert ('Data de nascimento é obrigatoria!');
        return;
    }

    const dataNascimento = new Date(nascimento)
    const idade = calcularIdade(dataNascimento);
    const geracao = identificarGeracao(dataNascimento.getFullYear());

    if (idade < 10 || idade > 90) {
        alert("Idade Inválida. Usuário deve ter entre 10 e 90 anos.")
        return;
    }

    resultado.innerHTML = `
        <div class="card p-4 shadow-sm">
            <h4>Cadastro Realizado:<h4/>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${nome} ${sobrenome}<li/>
                <li class="list-group-item">${idade}<li/>
                <li class="list-group-item">${geracao}<li/>
                <li class="list-group-item">${sexo}<li/>
                <li class="list-group-item">${opcaoSexual}<li/>
                <li class="list-group-item">${estadoCivil}<li/>
            <ul/>
        <div/>
    `;

    form.reset();
})

function identificarGeracao(dataNascimento){
    if (dataNascimento >= 1946 && dataNascimento <= 1964) {
         return dataNascimento = "Baby boomer.";
    }

    else if (dataNascimento >= 1965 && dataNascimento <= 1980) {
        return dataNascimento = "Geração X.";
    }

    else if (dataNascimento >= 1981 && dataNascimento <= 1996) {
        return dataNascimento = "Geração Y (Millennials).";
    }
 
    else if (dataNascimento >= 1997 && dataNascimento <= 2010) {
        return dataNascimento = "Geração Z.";
    }

    else if (dataNascimento > 2010) {
        return dataNascimento = "Geração Alfa.";
    }

    else if (dataNascimento <= 1945) {
        return dataNascimento = "Geração não classificada.";
    }
}

function calcularIdade(dataNascimento){
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    if(hoje.getMonth() < dataNascimento.getMonth() || hoje.getMonth() == dataNascimento.getMonth() && hoje.getDay < dataNascimento.getDay()
    ) {
        idade--;
    }
    else if(hoje.getFullYear() == dataNascimento.getFullYear() && hoje.getMonth() == dataNascimento.getMonth() && hoje.getDay() == dataNascimento.getDay()) {
        
    }
    return idade;
}

console.log(dataNascimento)