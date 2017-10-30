import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'words 1',
    url: 'http://example1.com',
    author: 'author1',
    num_comments: 100,
    points: 50,
    objectID: 1
  },
  {
    title: 'words 2',
    url: 'http://example3.com',
    author: 'author3',
    num_comments: 40,
    points: 10,
    objectID: 2
  },
  {
    title: 'words 1',
    url: 'http://example3.com',
    author: 'author3',
    num_comments: 10,
    points: 5,
    objectID: 3
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          {
            list.map(function(item){
             return (
              <div>
               <h1> <a href={ item.url}> { item.title } </a> by { item.author } </h1>
               <h4> { item.num_comments } comments | { item.points } </h4>
               
              </div>
             ) 
            }) 
          }
        </h1>
      </div>
    );
  }
}

export default App;
