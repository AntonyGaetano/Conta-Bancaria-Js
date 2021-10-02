
var h3 = document.querySelectorAll("h3");

var nome;
var valor_add = 0;
var valor_ret = 0;
var valor_atual = 0;

function Adicionar(){
  valor_add = prompt("Quanto irá adicionar?");

  document.querySelectorAll(".add p")[0].innerHTML="R$" + valor_add;

  SaldoAtual();
}

function SaldoAtual(){
    valor_atual = valor_add - valor_ret;

    document.querySelectorAll(".saldo_atual p")[0].innerHTML = "R$" + valor_atual
}

function Retirar(){
  valor_ret = prompt("Quanto irá retirar?");
  
  document.querySelectorAll(".withraw p")[0].innerHTML="-R$" + valor_ret;

  SaldoAtual();
}

function Inicia(){
nome = prompt("Qual seu nome? ");
  
h3[0].innerHTML = "Olá, " + (nome == "" ? "" : nome)
}


window.addEventListener("load", Inicia());