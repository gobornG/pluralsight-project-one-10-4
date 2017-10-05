import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList';
import Form from './Components/Form';

class App extends Component {
	state= {
  cards: []
  };
  
  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
    cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
      	<Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
      </div>
    );
  }
}

export default App;
