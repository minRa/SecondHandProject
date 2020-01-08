import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home  from'./page/Home/Home';
import Header from'./components/Header/Header';
//import SignInAndSignUp from './page/SignInAndSignUp/SignInAndSignUp';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component = {Home} />
      </Switch>
    </div>
  );
}

export default App;
