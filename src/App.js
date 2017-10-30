import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import list from './list';

function isSearched(searchTerm){
  return function(item){
    return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

class App extends Component {

  constructor(props){
     super(props);

     this.state = {
       list,
       searchTerm: ''
     }

     this.removeItem = this.removeItem.bind(this);
     this.searchValue = this.searchValue.bind(this);
  }

  /*
  removeItem(id){
    console.log('Remove item');

    function isNotId(item){
      return item.objectID !== id;
    }

    const updatedList = this.state.list.filter(isNotId);

    this.setState({ list: updatedList });
  }
*/

  removeItem(id){
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  searchValue(event){
    // console.log(event)
    this.setState({ searchTerm: event.target.value });
  }

  render() {

    const { list, searchTerm } = this.state;

    return (
      <div className="App">

        <h1>  
        <form>
          <input type="text" onChange={ this.searchValue } value={ searchTerm } />
        </form>  

        
          {
            list.filter( isSearched(searchTerm) ).map(item =>
              <div key={ item.objectID }>
               <h1> <a href={ item.url}> { item.title } </a> by { item.author } </h1>
               <h4> { item.num_comments } comments | { item.points } </h4>
               {/*use arrow function */}
               <button type="button" onClick={ () => this.removeItem(item.objectID) }>Remove </button>
              </div>
            ) 
          }
        </h1>
      </div>
    );
  }
}

export default App;
