import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharCard from './components/CharCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Navpills from './components/Navpills';
//need to import images to state
import characters from './characters.json';

class App extends Component {

  state = {
    characters,
    message: "Click an image to start!",
    currentScore: 0,
    topScore: 0,
    clicked: false,
  };


  render() {
    return (
    <Wrapper>
      <Navpills
        message={this.state.message}
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        />
      <Title>Miyazaki Clicky Game</Title>
      {this.state.characters.map(characters => (

        <CharCard
          key={characters.id}
          name={characters.name}
          url={characters.url}
          id={characters.id}

          />
      ))}

    </Wrapper>
    );
  }
}

export default App;
