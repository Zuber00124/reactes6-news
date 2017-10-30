import React, { Component } from 'react';
import { Grid, Row, FormGroup } from 'react-bootstrap';
import logo from './logo.svg';
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
      <div>
        <Grid fluid>
          <Row>
            <div className="jumbotron text-center">
            <Search 
              onChange={ this.searchValue } 
              value={ searchTerm } 
            >News App</Search>
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
      <h1 style={{ fontWeight: 'bold'}}>{ children }</h1>
      <hr style={{ border: '2px solid black', width: '100px '}} />

      <div className="input-group">
        <input
          className="form-control width100 searchForm"
          type="text" 
          onChange={ onChange } 
          value={ value } />

        <span className="input-group-btn">
          <button
            className="btn btn-primary searchBtn"
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
    <div className="col-sm-10 col-sm-offset-1">
      {
        list.filter( isSearched(searchTerm) ).map(item =>
          <div key={ item.objectID }>
           <h1> <a href={ item.url}> { item.title } </a> by { item.author } </h1>
           <h4> { item.num_comments } comments | { item.points } 
           <Button
            className="btn btn-danger"
            type="button" 
            onClick={ () => removeItem(item.objectID) }
           >Remove me</Button>
           </h4>
           <hr/>
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
const Button = ({ onClick, children, className= '' }) => 
  <button
    className={ className }
    onClick ={ onClick}
  >
   { children } 
  </button> 

export default App;
