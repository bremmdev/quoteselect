import styled from "styled-components";

export const HighlightedQuote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 40rem;
  font-size: 1.25rem;
  background-color: #ffeec8;
  border-radius: 0.7em;
  padding: 2.5em;
  margin: 1.5em auto;
  text-align: center;
  border-left: 0.7em solid #ffd475;

  blockquote {
    margin-bottom: 1.5em;
    line-height: 1.6;
  }

  p {
    line-height: 1.6;
  }

  p::before {
    content: open-quote;
    margin-right: 2px;
  }

  p::after {
    content: close-quote;
  }
  figcaption {
    font-weight: 700;
    font-style: italic;
    font-size: 1rem;
    margin-left: auto;
  }

  @media (max-width: 960px) {
    font-size: 1.1rem;
  }

  @media (max-width: 960px) {
    font-size: 1rem;

    ficaption{
      font-size:0.9rem;
    }
  }
`;