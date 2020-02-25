import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }


  render() {
    return (
      <div className='App'>
        <input type='search' placeholder='Search monster...' onChange={e => this.setState({ search : e.target.value}, () => {
          console.log(this.state);
          
        })} />
        <CardList monsters={this.state.monsters}>
         
        </CardList>
      </div>
    )
  }

}

export default App;
