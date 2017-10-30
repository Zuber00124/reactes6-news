import React, { Component } from 'react';
import { Grid, Row, FormGroup } from 'react-bootstrap';
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
        <Grid fluid>
          <Row>
            <div className="jumbotron">
            <Search 
              onChange={ this.searchValue } 
              value={ searchTerm } 
            >Search here</Search>
            </div>
          </Row>
        </Grid>  

        

        <Table
          list={list }
          searchTerm={ searchTerm }
          removeItem={ this.removeItem }


        />

      </div>
    );
  }
}
/*
class Search extends Component {
  render(){
    const { onChange, value, children} = this.props;
    return(
      <form>
        { children }
        <input 
          type="text" 
          onChange={ onChange } 
          value={ value } />
      </form> 
    )
  }
}
*/
const Search = ({ onChange, value, children}) => {
  return(
    <form>
    <FormGroup>
      { children }

      <div className="input-group">
        <input
          className="form-control width100"
          type="text" 
          onChange={ onChange } 
          value={ value } />

        <span className="input-group-btn">
          <button
            className="btn btn-primary"
            type="submit"
          >Search
          </button>
        </span>  
      </div>

    </FormGroup>
    </form> 
  )
}

// class Table extends Component {
//   render(){
//     const { list, searchTerm, removeItem} = this.props;
    
//   }
// }

const Table= ({ list, searchTerm, removeItem}) => {
  return(
    <div>
      {
        list.filter( isSearched(searchTerm) ).map(item =>
          <div key={ item.objectID }>
           <h1> <a href={ item.url}> { item.title } </a> by { item.author } </h1>
           <h4> { item.num_comments } comments | { item.points } </h4>
           <Button
            type="button" 
            onClick={ () => removeItem(item.objectID) }
           >Remove me</Button>
          </div>
        ) 
      }
    </div>
  )
}

/*
class Button extends Component {
  render(){
    const { onClick, children} = this.props;
    return(
      <button 
        onClick ={ onClick}
      >
       { children } 
      </button>
      
    )
  }
}
*//*
function Button({ onClick, children }){
  return(
    <button 
      onClick ={ onClick}
    >
     { children } 
    </button> 
  )
}
*/
const Button = ({ onClick, children }) => 
  <button 
  onClick ={ onClick}
  >
   { children } 
  </button> 

export default App;
