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
    unClicked: characters
  };

componentDidMount(){

}
  //randomize the array

randomize = array => {
  var currentI = array.length, tempValue, randomI;

    // While there remain elements to shuffle...
    while (0 !== currentI) {

      // Pick a remaining element...
      randomI = Math.floor(Math.random() * currentI);
      currentI -= 1;

      // And swap it with the current element.
      tempValue = array[currentI];
      array[currentI] = array[randomI];
      array[randomI] = tempValue;
    }

    console.log(array);
}

//onClick of a picture, if see if they've already been clicked

clicked = id => {
  const checkChar = this.state.unClicked.find(char => char.id === id);
//if the clicked character has been removed from the unclicked state
//that means it's already been clicked and is wrong. reset game
  if(checkChar === undefined){
    this.setState({
      message: "You already clicked that one :/",
      currentScore: 0,
      characters,
      topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
      unClicked: characters
    });
  }else{
    //if the clicked character is still in the unclicked state, remove it
    //and continue the game
    const charToRemove = this.state.unClicked.filter(char => char.id !== id);

    this.setState({
      message: "Correct!",
      currentScore: this.state.currentScore +1,
      characters,
      unClicked: charToRemove,
    });
  }
  this.randomize(characters);
}


//onclick of image, set state of characters Object.keys id to

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

          clicked={this.clicked}
          score={this.score}
          />
      ))}

    </Wrapper>
    );
  }
}

export default App;
