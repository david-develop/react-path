import React, {Component} from 'react';
import './App.css';

// dummy data
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'NodeJS',
    url: 'https://nodejs.org/',
    author: 'Ryan Dahl',
    num_comments: 5,
    points: 1,
    objectID: 2,
  },
];

// Search high order funtion to be used as filter parameter
const isSearched = (searchTerm) => (item) =>
  !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }
  
  render () {
    // get state in a simplier way
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <form>
              <input 
                type="text" 
                value={searchTerm}
                onChange={this.onSearchChange}
              />
            </form>
            { list.filter(isSearched(searchTerm)).map(item =>
            <div key={item.objectID}>
              <h2>
                <a href={item.url}> {item.title} </a>
              </h2>
              <span> Author: {item.author} </span>
              <span> Comments: {item.num_comments} </span>
              <span> Points: {item.points} </span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
              <br /><br />
            </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}
export default App;
