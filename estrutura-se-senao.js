/*
escreval("Digite o primeiro valor")
   leia(valor01)
   escreval("Digite a operação: Ex.: +, - , *, /")
   leia(operacao)
   escreval("Digite o segundo valor")
   leia(valor02)
   
   se  operacao = "+" entao
   resultado := valor01+valor02
   senao
        se operacao = "-" entao
        resultado := valor01-valor02
        senao
             se operacao = "*" entao
             resultado := valor01*valor02
             senao
                  se  operacao = "/" entao
                  resultado := valor01/valor02
            fimse
         fimse
    fimse
   fimse
   escreval("Resultado do Calculo é:",resultado)
*/



function acaoBotao () {
    var valor01,valor02,resultado,operacao
    valor1 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: Ex.: +, - , *, /" )
    valor2 = prompt("Digite o segundo valor: ")

    if  (operacao == "+"){
        resultado = parseInt(valor01) + parseInt(valor02)
    } else if (operacao == "-"){ 
        resultado = parseInt(valor01) - parseInt(valor02)
    } else if (operacao == "*") {
            resultado = parseInt(valor01) * parseInt(valor02)
    } else if  (operacao == "/" ) {
                resultado = parseInt(valor01) / parseInt(valor02)
    }

    document.getElementById("paragrafo").innerText = resultado

}


