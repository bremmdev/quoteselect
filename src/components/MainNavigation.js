import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;

  a {
    color: #40351d;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.5em 1.5em;
  }

  a:hover {
    font-weight: 800;
  }

  .addquote-btn {
    clip-path: polygon(0 1%, 93% 0, 100% 100%, 7% 100%);
    background-color: #e5bf6b;
  }

  @media (max-width: 560px) {
    a {
      font-size: 0.95rem;
      padding:0.5em;
    }

    .addquote-btn {
      clip-path: unset;
      background:unset;
    }
  }
`;


const MainNavigation = () => {
    return (
      <StyledNav>
        <li>
          <NavLink
            to="/quotes"
          >
            all quotes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-quote"
            className="addquote-btn"
            >
            add quote
          </NavLink>
        </li>
      </StyledNav>
    );
}

export default MainNavigation
