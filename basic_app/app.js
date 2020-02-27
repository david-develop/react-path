import React from 'react';

export default class App extends React.Component {
  render () {
    var greeting = 'Welcome to React';
    return (
      <div>
        <h1>{greeting}</h1>
      </div>
    );
  }
}
