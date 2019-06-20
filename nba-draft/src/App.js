import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import CreatePlayer from './CreatePlayer/CreatePlayer';
import DeletePlayer from './DeletePlayer/DeletePlayer';
import UpdatePlayer from './UpdatePlayer/UpdatePlayer';
import Nav from './Nav/Nav'
import Players from './Players/Players';
import Player from './Player/Player'

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
