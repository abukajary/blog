import React from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton';
let logo = require('../../assets/logo.png')

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Navigation = styled.nav`
  display: flex;
  margin-right: auto;
  padding-left: 20px;
`;

const NavItem = styled.a`
  margin: 0 10px;
  padding: 5px 10px;
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #fff; 
    background-color: #007bff;
    border-radius: 5px;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Navigation>
        <NavItem href="#">Главная</NavItem>
        <NavItem href="#">Блог</NavItem>
        <NavItem href="#">О нас</NavItem>
      </Navigation>
      <LoginButton />
    </HeaderContainer>
  );
};

export default Header;
