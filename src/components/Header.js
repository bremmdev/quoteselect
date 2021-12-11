import styled from "styled-components";
import MainNavigation from "./MainNavigation";
import { AiOutlineGithub } from 'react-icons/ai'

const StyledHeader = styled.header`
  background-color: #ffd475;
  height:5rem;
  position:relative;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25em;
  }

  h1 {
    font-weight: 300;
    font-size:1.6rem;
  }

  span {
    color: #40351D;
    border-right: 3px solid #40351D;
    font-weight: 700;
    border-top: 3px solid #40351D;
    padding-right: 0.3em;
    border-radius: 0 0.25em 0 0;
  }

  .github-logo{
    fill:#323232;
    width:3em;
    height:3em;
    transform:rotate(45deg);
    position:absolute;
    right:1em;
    top:0.8em;
    transition: transform 0.2s ease-in-out;
  }

  .github-logo:hover{
    transform:rotate(0deg) scale(1.1);
    transition: transform 0.2s ease-in-out;
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
     
      <a href="https://google.com"><AiOutlineGithub className="github-logo" /></a>
    
    </StyledHeader>
  );
};

export default Header;
