var inNome = document.getElementById('inNome')
var btMostrar = document.getElementById('btMostrar')
var outResposta = document.getElementById('outResposta')

function MostrarOla() {
  var nome = inNome.value // entrada de dados
  outResposta.textContent = 'Olá ' + nome // saída de dados
}

btMostrar.addEventListener('click', MostrarOla) // para que o click funcione

/* Resumo 
function nome_da_função(parâmetros)
{
  [conjunto de comandos]
}

idenificador, exemplo: id=inNome

document.getElementById{}

elemento.addEventListener("evento", nome_da_função)

obter o conteúdo digitado: value

alterar conteúdo do parágrafo: textContent
*/
