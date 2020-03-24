import React from 'react'
var lista = []

function div(valor){        //função que confere os divisores do 'valor' dado pelo usuário e insere em uma lista'
  for(var i=1; i<=valor; i++){
    if (valor%i===0){
      lista.push(i)
    }
  }
  alert("Os divisores de "+ valor + " são " +lista) //Não consegui achar um jeito de passar os dados para a tela em si, então usei o alert para no mínimo ter um output para o usuário.
  lista =[]
}

export default div