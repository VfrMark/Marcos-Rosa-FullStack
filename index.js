import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
//import App from './App'
import div from './Div';
import primo from './Primo';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }; 
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event) { 
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
        <p1>{this.handleChange}</p1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
