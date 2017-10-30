import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import list from './list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          {
            list.map(item =>
              <div key={ item.objectID }>
               <h1> <a href={ item.url}> { item.title } </a> by { item.author } </h1>
               <h4> { item.num_comments } comments | { item.points } </h4>
               
              </div>
            ) 
          }
        </h1>
      </div>
    );
  }
}

export default App;
