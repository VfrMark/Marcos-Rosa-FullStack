import React from 'react'

var cont = 0
function primo(valor){
  for(var i=1; i<=valor; i++){
    if (valor%i===0){
      cont++
    }
  }
  if (cont<=2){
    return (valor + ' é um número primo!')
  }
  else{
    return (valor + ' não é um número primo!')
  }
}

export default primo