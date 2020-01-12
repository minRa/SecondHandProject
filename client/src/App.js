import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home  from'./page/Home/Home';
import Header  from'./components/Header/Header';
import SignUp from './page/SignInAndSignUp/signUp';
import SignIn from './page/SignInAndSignUp/signIn';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/signin' component = {SignIn} />
        <Route exact path='/signup' component = {SignUp} />
      </Switch>
    </div>
  );
}

export default App;
