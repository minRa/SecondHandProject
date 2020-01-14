import React, {useEffect} from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home  from'./page/Home/Home';
import Header  from'./components/Header/Header';
import SignUp from './page/SignInAndSignUp/signUp';
import SignIn from './page/SignInAndSignUp/signIn';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import {checkUserSession} from './redux/user/user.actions';

function App({currentUser, checkUserSession}) {

   useEffect(() => {
     checkUserSession()
   },[checkUserSession])

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component = {Home} />

        <Route 
        exact path='/signin'
        render ={() =>
          currentUser ? <Redirect to='/'/>
          : <SignIn/>
          } />
        <Route 
        exact path='/signup'
        render ={() =>
          currentUser ? <Redirect to='/'/>
          : <SignUp/>
          } />


          

      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
