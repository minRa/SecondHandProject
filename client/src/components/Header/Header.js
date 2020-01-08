import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../Cart-Icon/CartIcon';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
  } from './style';

const Header = () => {
    return (
       <HeaderContainer>
           <LogoContainer to='/'>
               <Logo className='logo'/>
           </LogoContainer>
      <OptionsContainer>
        <OptionLink>
         <OptionLink to='/shop'>SHOP</OptionLink>
         <OptionLink to='/shop'>CONTACT</OptionLink>
        </OptionLink>   
        {/* {
            currentUser ? (
                <OptionLink as='div' onClick={}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            )
        } */}
        <CartIcon/>
        </OptionsContainer>
       </HeaderContainer>
    )
}

export default Header
