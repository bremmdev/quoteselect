import styled from "styled-components";

export const StyledQuoteListByAuthor = styled.div`
  max-width: 40rem;
  text-align: center;
  padding: 1em 0;
  margin: 0 auto;

  ul {
    margin-top: 1em;
  }

  li{
    border-bottom:1px solid #999;
    padding:1em 0;
  }

  p {
    margin-top: 1em;
  }

  li::before {
    content: open-quote;
    margin-right: 2px;
  }

  li::after {
    content: close-quote;
  }

  @media(max-width:560px){
    h2{
      font-size:1.25rem;
    }
    p{
      font-size:0.9rem;
    }
  }
`;