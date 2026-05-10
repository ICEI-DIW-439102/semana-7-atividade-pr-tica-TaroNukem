var usuario = prompt("Qual seu nome?");

var salario = Number(prompt("Digite sua renda mensal"));

while (isNaN(salario)) {
    salario = Number(prompt("Digite um valor valido"));
}

var gastos = Number(prompt("Quantas despesas voce quer colocar?"));

while (isNaN(gastos)) {
    gastos = Number(prompt("Digite um numero valido"));
}

if (gastos < 1) {
    gastos = 1;
}

if (gastos > 5) {
    gastos = 5;
}

var soma = 0;

for (var c = 1; c <= gastos; c++) {

    var valor = Number(prompt("Valor da despesa " + c));

    while (isNaN(valor)) {
        valor = Number(prompt("Digite um numero valido"));
    }

    soma += valor;
}

var resto = salario - soma;

var texto = "";

if (soma > salario) {
    texto = "Voce gastou mais do que ganhou";
}
else {
    
    if (resto >= salario * 0.3) {
        texto = "Boa margem de sobra";
    }
    else {
        texto = "Sua sobra pode melhorar";
    }
}

var final =
"Usuario: " + usuario +
"<br>Renda: R$ " + salario.toFixed(2) +
"<br>Despesas: R$ " + soma.toFixed(2) +
"<br>Sobra: R$ " + resto.toFixed(2) +
"<br>Resultado: " + texto;

alert(final);

console.log(final);