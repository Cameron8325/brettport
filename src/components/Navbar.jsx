import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'; // Import from react-scroll for smooth scrolling

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: #002b5b;
  padding: 15px 0;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 20px;
`;

const NavLink = styled(Link)` // Use Link from react-scroll
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #f4d03f;
  }
`;

export const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="about" smooth={true} duration={800}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="services" smooth={true} duration={800}>Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="facts" smooth={true} duration={800}>Facts for You</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="contact" smooth={true} duration={800}>Contact</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};
