import { Component } from 'preact'
import { Router } from 'preact-router';

import Home from '.../routes/home';
import Game from '.../routes/game';
import Win from '.../routes/win';

export default class App extends Component {
    render () {
        return (
            <div id="app">
              <Router onChange={this.handleRouter}>
                 <Home path="/" />
                 <Game path="/game" />
                 <Win path="/Win" />
              </Router>
            </div>
        );
    }
}