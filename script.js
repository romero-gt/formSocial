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

    const regexTexto = /^[A-Za-zÀ-ù/s]+$/;
    if (!regexTexto.test(nome) || !regexTexto.test(sobrenome)) {
        alert("Nome e sobrenome devem conter apenas letras")
    };

    if (!nascimento) {
        alert('Data de nascimento é obrigatória!');
        return;
    };

    const dataNascimento = new Date(nascimento);
    const idade = calcularIdade(dataNascimento);

    if (idade < 10 || idade > 90)
        alert("Idade inválida! Deve ser entre 10 e 90.")

    // Mostrando o resultado
    resultado.innerHTML = `
        <div class="card p-4 shadow-sm">
            <h4>Cadastro Realizado:</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${nome} ${sobrenome}</li>
                    <li class="list-group-item">${idade} anos</li>
                    <li class="list-group-item">${estadoCivil}</li>
                    <li class="list-group-item">${sexo}</li>
                    <li class="list-group-item">${opcaoSexual}</li>
                </ul>
        </div>`;
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

// Validação nome; Upper Case e alfabeto; 
// Idade Permitida;
// Qual geração?; 

