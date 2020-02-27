import React, {Component} from 'react';
import './App.css';

class ExplainBindingsComponent extends Component {
  onClickMe = () => {
    console.log(this);
  }

  render() {
    return (
      <button
        onClick={this.onClickMe}
        type="button"
      >
        Click Me
      </button>
    );
  }
}

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list,
    };

    this.onDismiss = this.onDismiss.bind(this);

  }
  
  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            { this.state.list.map(item =>
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
          <div>
            <ExplainBindingsComponent />
          </div>
        </header>
      </div>
    );
  }
}
export default App;
