import React from 'react'
var lista = []

function div(valor){
  for(var i=1; i<=valor; i++){
    if (valor%i===0){
      lista.push(i)
    }
  }
  console.log(lista)
  lista =[]
}

export default div