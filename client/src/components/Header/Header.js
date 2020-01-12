import React from 'react'
import {Navbar, Nav, NavDropdown } from'react-bootstrap';
import {Icon} from 'semantic-ui-react'
import { OptionLink } from './style';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">NZ_SecondHandShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Items" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Car</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Clothes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">Sell My-Item</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Nav>
      <OptionLink  to='/signin'><Icon name='sign-in'/>Login</OptionLink>
      <OptionLink  to='/signup'><Icon name='signup'/> Register</OptionLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Header
