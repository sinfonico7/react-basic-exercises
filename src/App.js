import React from 'react';
import './App.css';
class App extends React.Component{

  //we can declare another way the state without constructor
    state = {
        counter : 0
    }

  addToCounter = () => {
    this.setState( (prevStatate,prevProps)=>{
      return { counter : prevStatate.counter + prevProps.increment}
    }, () => console.log(this.state.counter));
    
  }

  render(){
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={ this.addToCounter } >Press me!</button>
      </div>

    );


  }

}

export default App;