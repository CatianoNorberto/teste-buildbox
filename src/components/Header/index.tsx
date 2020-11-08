import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/bx-logo.png';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <Link to='/'>
      <img src={logoImg} alt="Logo" />
    </Link>
  </Container>
)

export default Header;