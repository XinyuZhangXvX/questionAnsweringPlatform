import React, { Component } from 'react';
import './App.css';
import QuestionAnsweringPlatform from './questionanswering/questionAnsweringPlatform';


class App extends Component {
  render() {
    return (
      <div className="App">
        <QuestionAnsweringPlatform></QuestionAnsweringPlatform>
      </div>
    );
  }
}

export default App;
