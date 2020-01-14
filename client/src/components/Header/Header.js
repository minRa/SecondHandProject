import React from 'react'
import {Navbar, Nav, NavDropdown } from'react-bootstrap';
import {Icon} from 'semantic-ui-react'
import { OptionLink } from './style';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from'../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';
import CartIcon from './components/cart-icon/cart-icon';

const Header = ({ currentUser, signOutStart }) => {
    return (
  <Navbar collapseOnSelect bg="light"  variant="light">
  <Navbar.Brand href="/">NZ_SecondHandShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Community" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Blackboard</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Post Item</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Live Chat</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    
      {currentUser ? (
        <>
      <Nav> 
            <OptionLink as='div'>
            <CartIcon/>
          </OptionLink>
 
        </Nav>
        <Nav>
          <OptionLink to='/profile'>
            <Icon name='user circle'/> {currentUser.displayName}
          </OptionLink>

        <OptionLink as='div' onClick={signOutStart}><Icon name='sign-out'/>
            Sign Out
          </OptionLink>   
        </Nav>
       </>
      ) : (
      <Nav>
        <OptionLink  to='/signin'><Icon name='sign-in'/>Login</OptionLink>
        <OptionLink  to='/signup'><Icon name='signup'/> Register</OptionLink>
      </Nav>
      )}

    </Navbar.Collapse>
  </Navbar>
 ) 
}


const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Header)
