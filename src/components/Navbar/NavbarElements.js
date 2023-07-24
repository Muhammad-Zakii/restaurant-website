import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled.a`
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin-right: 5rem;

  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 0.7rem;
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
    transform: translate(-65%, 100%);
    font-weight: bold;
  }
  &:hover {
    color: #ffcc00;
  }
`;
