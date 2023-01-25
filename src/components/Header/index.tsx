import { Timer, Scroll } from 'phosphor-react';

import { HeaderContainer } from './styles';

import logoElRaphael from '../../assets/logo-elraphael.svg';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoElRaphael} alt="" />
      <nav>
        <NavLink to="/" title="Ir para o Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Ir para o Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
