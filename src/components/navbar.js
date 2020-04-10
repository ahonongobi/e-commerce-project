import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import {ButtonContainer} from './Button';
import img from '../logo2.png';


class navbar extends Component {
    render() {
        return (
        <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      <Link to="/">
          <img src={img} alt="store" height="60px" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
            Products
              </Link>
          </li>
      </ul>
      <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
              
           <p className="contactez">Contact:<img  src="phone.png" width="20" height="20" /> +22964745149 | abyssiniea@gmail.com</p> 
              
          </li>
      </ul>
      <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
              
           <p className="contactez">Creer/programmer par:Gobi abyssinie</p> 
              
          </li>
      </ul>
      <Link to="/cart" className="ml-auto">
          <ButtonContainer>
              <span className="mr-2">
              <img src="shopping.png" className="fas fa-cart-plus" />
              </span>
              my cart
          </ButtonContainer>
      </Link>
        </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{ 
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize;
}
`;


export default navbar;