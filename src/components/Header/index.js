/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "./styles";

import logoImg from '../../assets/Logo.svg';

import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';

export function Header() {
  return (
    <Container>
      <section>
        <img src={logoImg} alt="Logo"/>
        <nav>
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
        </nav>
      </section>

      <section>
        <FaSearch />
        <FaShoppingBag />
        <RiMenu3Fill />
      </section>
    </Container>
  )
}