
var h3 = document.querySelectorAll("h3");

var nome;
var valorRetirado = 0;
var valor_atual = 0;
var valorAdicionado = 0


function Adicionar(){
  let valor = prompt("Quanto irá adicionar?");
  valorAdicionado = Number(valorAdicionado) + Number(valor);
  document.querySelectorAll(".add p")[0].innerHTML = "R$" + valorAdicionado;
  localStorage.setItem(valorAdicionado,"valorAdicionado");
  SaldoAtual();
}


function Retirar(){
  let valor2 = prompt("Quanto irá retirar?");
  valorRetirado = Number(valorAdicionado) + Number(valor2);
  document.querySelectorAll(".withraw p")[0].innerHTML="-R$" + valorRetirado;
  localStorage.setItem(valorRetirado,"valorRetirado");
  SaldoAtual();
}


function SaldoAtual(){
  valor_atual = valorAdicionado - valorRetirado;
  document.querySelectorAll(".saldo_atual p")[0].innerHTML = "R$" + valor_atual
  localStorage.setItem(valor_atual,"valorAtual");
}


