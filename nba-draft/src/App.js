import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import CreatePlayer from './CreatePlayer';
import DeletePlayer from './DeletePlayer';
import UpdatePlayer from './UpdatePlayer';
import Nav from './Nav'
import Players from './Players';
import Player from './Player'

class App extends Component {
  render() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact render={() => <Redirect to='/show' />}/>
        <Route path='/show' component={Players} />
        <Route path='/create' component={CreatePlayer} />
        <Route path='/update' component={UpdatePlayer} />
        <Route path='/delete' component={DeletePlayer} />
        <Route path='/show/:name' render={routerProps => (<Player{...routerProps}{...this.state}/>)}/>
      </Switch>
    </div>
  );
  }
}

export default App;
