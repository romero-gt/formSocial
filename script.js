let form = document.getElementById(`socialForm`);
let resultado = document.getElementById(`resultado`);

form.addEventListener(`submit`, function (event) {
    event.preventDefault();

    let nome = document.getElementById(`nome`).value;
    let sobrenome = document.getElementById(`sobrenome`).value;
    let nascimento = document.getElementById(`nascimento`).value;
    let estadoCivil = document.getElementById(`estadoCivil`).value;
    let sexo = document.querySelector(`input[name="sexo"]:checked`).value;
    let opcaoSexual = document.getElementById(`opcaoSexual`).value;

    if (!nascimento) {
        alert (`Data de nascimento é obrigatoria!`);
        return;
    }

    const dataNascimento = new Date(nascimento);
    const idade = calcularIdade(dataNascimento);
    resultado.innerHTML = `
    <div class = "card p4 shadow-sm"> 
        <h4> Cadastro Realiazo</h4>
            <ul class="list-group list-group-flash">
                <li class = "list-group-item">${nome} ${sobrenome}</li>
                <li class = "list-group-item">${idade}</li>
                <li class = "list-group-item">${geracao}</li>
                <li class = "list-group-item">${sexo}</li>
                <li class = "list-group-item">${opcaoSexual}</li>
                <li class = "list-group-item">${estadoCivil}</li>
            </ul>
    </div>
    `;
}); 

function calcularIdade (dataNascimento){
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    if (hoje.getMonth() < dataNascimento.getMonth () || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())
    ){
        idade--;
        }

}