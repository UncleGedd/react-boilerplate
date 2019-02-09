import * as React from "react";
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app" data-testid="app">
        <header className="app-header">
          <h1>
            React and testing boilerplate!
          </h1>
          <p>Testing: mocha, chai, karma, and react-testing-library</p>
          <p>Includes Typescript and custom webpack configs</p>
          <p>Created (and ejected) from create-react-app</p>
          <a
            className="app-link"
            href="https://github.com/UncleGedd/react-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            See source
          </a>
        </header>
      </div>
    );
  }
}
