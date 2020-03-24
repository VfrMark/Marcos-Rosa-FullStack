import React from 'react'

var cont = 0     //variável para contar quantos divisores tem o 'valor' dado
function primo(valor){
  for(var i=1; i<=valor; i++){    //função que testa todos os números entre 1 e o 'valor' dado e para cada divisor adicionar +1 a variável cont.
    if (valor%i===0){
      cont++
    }
  }
  if (cont<=2){
    alert(valor + ' é um número primo!')        //Não consegui achar um jeito de passar os dados para a tela em si, então usei o alert para no mínimo ter um output para o usuário.
    cont=0
  }
  else{
    alert(valor + ' não é um número primo!')
    cont=0    //zerando a variável cont ao final do processo for.
  }
}

export default primo