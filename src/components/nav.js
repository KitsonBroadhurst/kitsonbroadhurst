import React from 'react'
import styled from 'styled-components'
import Button from './button'
import Container from './container'

const Header = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .header__inner {
    display flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__logo {
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  .header__logo img {
    margin-right: 1rem;
  }

  .header__logo span {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.heading};
  }

  .header__main-nav {
    display: block;
  }

  .header__main-nav ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .header__main-nav li {
    margin-right: 2rem;
  }

  .header__main-nav a {
    text-decoration: none;
    color: ${({ theme }) => theme.heading};
  }

  .header__main-nav a:hover {
    color: ${({ theme }) => theme.text};
  }
`

const Nav = ({ toggle }) => (
  <Header>
    <Container>
      <div className="header__inner">
        <div>
          <a className="header__logo" href="#">
            <span>Kitson</span>
          </a>
        </div>
        <div>
          <nav className="header__main-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Button onClick={ toggle }>Toggle</Button>
        </div>
      </div>
    </Container>
  </Header>
)

export default Nav