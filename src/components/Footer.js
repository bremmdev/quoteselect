import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const StyledFooter = styled.footer`
  background: #323232;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding:1.25em 0;

  p {
    color: #ffd475;
    font-weight: 600;
  }

  .github-logo {
    fill: #ffd475;
    width: 2em;
    height: 2em;
    transition:transform 0.25s ease-in;
  }

  .github-logo:hover {
    transform:rotate(45deg) scale(1.1);
    transition:transform 0.25s ease-in;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>created by bremmdev </p>
      <a href="https://google.com">
        <AiOutlineGithub className="github-logo" />
      </a>
    </StyledFooter>
  );
};

export default Footer;
