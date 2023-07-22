import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled.a`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin-right: 5rem;

  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    display: none;
  }
  &:hover {
    color: #ffcc00;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
  &:hover {
    color: #ffcc00;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
