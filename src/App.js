import React, {Component} from 'react';
import Coin from './Coin/Coin';
import './App.css';

class App extends Component {
  state = {
    coins: []
  };

  changeNumbers = () => {
    const newNum = [];
    while (newNum.length < 5) {
      const num = Math.floor(Math.random() * (36 - 5) + 5);
      if (!newNum.includes(num)) {
        newNum.push(num);
      } else {
        continue;
      }
    };
    newNum.sort((a, b) => a - b);
    this.setState({...this.state, coins: newNum});
  };

  render() {
    return (
      <div className="App">
        <div><button type="button" onClick={this.changeNumbers}>New numbers</button></div>
        <div className="coin-block">
          {this.state.coins.map((num, index) => <Coin nominal={num} key={index}/>)}
        </div>
      </div>
    );
  }
}

export default App;
