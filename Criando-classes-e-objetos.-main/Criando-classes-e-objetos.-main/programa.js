let inNome = document.getElementById('inputNome')
let inIdade = document.getElementById('inputIdade')
let inTurma = document.getElementById('inputTurma')

let botaoCadastrar = document.getElementById('btCadastrar')

botaoCadastrar.addEventListener('click', quandoClicarNoBotaoCadastrar)

function quandoClicarNoBotaoCadastrar() {
  let result = new Aluno(inNome.value, inIdade.value, inTurma.value)
  document.write(`<h2>${result.nome}</h2>`)
  document.write(`<div>${result.idade}</div>`)
  document.write(`<div>${result.turma}</div>`)
}
