import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharCard from './components/CharCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
//need to import images to state
import characters from './characters.json';

class App extends Component {

  state = {
    characters

  };


  render() {
    return (
    <Wrapper>
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
