import styled from "styled-components";
import MainNavigation from "./MainNavigation";
import { AiOutlineGithub } from 'react-icons/ai'

const StyledHeader = styled.header`
  background-color: #ffd475;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2em;
  }

  h1 {
    font-weight: 300;
    font-size: 1.6rem;
  }

  span {
    color: #40351d;
    border-right: 3px solid #40351d;
    font-weight: 700;
    border-top: 3px solid #40351d;
    padding-right: 0.3em;
    border-radius: 0 0.25em 0 0;
  }

  .github-logo {
    fill: #323232;
    width: 3em;
    height: 3em;
    transform: rotate(45deg);
    position: absolute;
    right: 1em;
    top: 0.8em;
    transition: transform 0.2s ease-in-out;
  }

  .github-logo:hover {
    transform: rotate(0deg) scale(1.1);
    transition: transform 0.2s ease-in-out;
  }

  @media (max-width: 1260px) {
    .container {
      padding-right: 5em;
    }
  }

  @media (max-width: 560px) {
    h1 {
      font-size: 1.2rem;
    }

    .container {
      padding-right: 3em;
    }

    .github-logo {
      right: 0.8em;
      top: 1em;
      width: 2em;
      height: 2em;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <h1>
          quote<span>select</span>
        </h1>
        <MainNavigation />
      </div>

      <a href="https://github.com/bremmdev/quoteselect">
        <AiOutlineGithub className="github-logo" />
      </a>
    </StyledHeader>
  );
};

export default Header;
