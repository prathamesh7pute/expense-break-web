import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sheets: [{name: 'abc'}]
    };
  }

  componentDidMount() {
    fetch('http://api.expensebreak.com/sheets')
      .then(res => res.json())
      .then(data => {
        const sheets = data;
        console.log(this.state);
        console.log(sheets);

        this.setState({ sheets });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Expense Break</h1>
        </header>
        <p className="App-intro">
          Stay tune...
        </p>
        <Button name="Login" />
        <ul>
          {this.state.sheets.map((sheet, index) =>
            <li key={sheet.index}>{sheet.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
