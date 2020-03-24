import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import div from './Div';
import primo from './Primo';

//class principal
class App extends Component {
  constructor() {
    super();
    this.state = {    //state que guarda a variável enviada pelo usuário, a princípio vazio.
      value: ''
    }; 
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({value: event.target.value})   //função que altera a variável conforme o usuário insere numeros na box de mensagem
  }

  handleSubmit(event) {        //função que chama os Componentes criados
    div(this.state.value)
    primo(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <div class="form">
        <div class="header">
          <h1 class="pro"> seleção full stack bridge</h1>
          <h2 class="welcome">Bem vindo!</h2>
          <h3 class="welcome">Insira um número: </h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          value={this.state.value} 
          onChange={this.handleChange} 
          class='texto'
          /><br/>

          <input 
          type="submit" 
          value="enviar" 
          class='botao'
          />
        </form>
      </div>
    );
  }
}
export default App