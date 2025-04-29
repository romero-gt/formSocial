const form = document.getElementById("socialForm");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Captura de Dados
  const nome = document.getElementById("nome").value.trim().toUpperCase();
  const sobrenome = document.getElementById("sobrenome").value.toUpperCase();
  const nascimento = document.getElementById("nascimento").value;
  const estadoCivil = document
    .getElementById("estadoCivil")
    .value.toUpperCase();
  const sexo = document
    .querySelector('input[name="sexo"]:checked')
    .value.toUpperCase();
  const opcaoSexual = document
    .getElementById("opcaoSexual")
    .value.toUpperCase();
  const erro = document.getElementById("nome-erro");

  const regexTexto = /^[A-Za-zÀ-ù\s]+$/;
  if (!regexTexto.test(nome) || !regexTexto.test(sobrenome)) {
    erro.innerText = "Nome e sobrenome devem conter apenas letras!";
    return;
  }

  // Alerta para dizer que a data de nascimento é obrigatória
  if (!nascimento) {
    alert("Data de nascimento é obrigatória!");
    return;
  }

  // Calculando a idade
  const dataNascimento = new Date(nascimento);
  const idade = calcularIdade(dataNascimento);

  function calcularIdade(dataNascimento) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    if (
      hoje.getMonth() < dataNascimento.getMonth() ||
      (hoje.getMonth() === dataNascimento.getMonth() &&
        hoje.getDate() < dataNascimento.getDate())
    ) {
      idade--;
    }
    return idade;
  }

  // Validando a idade:
  if (idade < 10 || idade > 90) {
    alert("Idade inválida! Deve ser entre 10 e 90 anos!");
  }

  // Definindo a geração:
  let geracao;

  if (
    dataNascimento.getFullYear() > 1946 &&
    dataNascimento.getFullYear() < 1964
  ) {
    geracao = "Geração Baby Bloomer";
  } else if (
    dataNascimento.getFullYear() >= 1965 &&
    dataNascimento.getFullYear() <= 1980
  ) {
    geracao = "Geração X";
  } else if (
    dataNascimento.getFullYear() >= 1981 &&
    dataNascimento.getFullYear() <= 1996
  ) {
    geracao = "Millennial";
  } else if (
    dataNascimento.getFullYear() >= 1997 &&
    dataNascimento.getFullYear() <= 2010
  ) {
    geracao = "Geração Z";
  } else if (dataNascimento.getFullYear() > 2010) {
    geracao = "Geração Alpha";
  } else {
    geracao = "Nasceu antes de 1946";
  }

  // Mostrando o resultado
  resultado.innerHTML = `
    <div class="card p-4 shadow-sm">
      <h4>Cadastro Realizado:</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${nome} ${sobrenome}</li>
        <li class="list-group-item">${idade}</li>
        <li class="list-group-item">${geracao.toUpperCase()}</li>
        <li class="list-group-item">${sexo}</li>
        <li class="list-group-item">${opcaoSexual}</li>
        <li class="list-group-item">${estadoCivil}</li>
      </ul> 
    </div>
  `;

  form.reset();
  erro.innerText = "";
});
