import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: #002b5b;
  padding: 15px 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* Center items on desktop */

  @media (max-width: 768px) {
    justify-content: space-between; /* Space between on mobile */
  }
`;

const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  display: none; /* Hidden by default */

  @media (max-width: 768px) {
    display: block; /* Show logo on mobile if needed */
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #002b5b;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    max-height: ${(props) => (props.open ? '300px' : '0')};
    margin: 0;
    padding: 0;
  }
`;

const NavItem = styled.li`
  margin: 0 20px;

  @media (max-width: 768px) {
    margin: 15px 0;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  border-bottom: solid #EAAA00;
  padding-bottom: 5px;
  transition: color 0.3s ease;

  &:hover {
    color: #f4d03f;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #ffffff;
    margin: 5px;
    transition: all 0.3s ease;
  }
`;

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        {/* Optional Logo */}
        {/* <Logo>Your Logo</Logo> */}
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <div
            style={{
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <div style={{ opacity: menuOpen ? '0' : '1' }} />
          <div
            style={{
              transform: menuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
            }}
          />
        </Hamburger>
        <NavList open={menuOpen}>
          <NavItem>
            <NavLink
              to="about"
              smooth={true}
              duration={800}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="services"
              smooth={true}
              duration={800}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="facts"
              smooth={true}
              duration={800}
              onClick={() => setMenuOpen(false)}
            >
              Facts for You
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="contact"
              smooth={true}
              duration={800}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
    </Nav>
  );
};
