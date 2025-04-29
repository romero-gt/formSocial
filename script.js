let form = document.getElementById('socialform');
let resultado = document.getElementById('resultado');

form.addEventListener('submit', function (event){
    event.preventDefault();

    

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let nascimento = document.getElementById('nascimento').value;
    let estadoCivil = document.getElementById('estadoCivil').value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let opcaoSexual = document.getElementById('opcaoSexual').value;

    resultado.innerHTML = `
    <div class="card p-4 shadow-sm">
        <h4>Cadastro Realizado:</h4>
            <ul class="list-group list-group-flush>
                <li class="list-group-item">${nome} ${sobrenome}</li>
                <li class="list-group-item">${idade}</li>
                <li class="list-group-item">${geracao}</li>
                <li class="list-group-item">${sexo}</li> 
                <li class="list-group-item">${opcaoSexual}</li>
                <li class="list-group-item">${estadoCivil}</li>
                
                
            </ul>

    </div>
    `;

})