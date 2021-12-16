import styled from "styled-components";

export const StyledQuotesContainer = styled.div`
max-width: 40rem;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 0.3em solid #ffebc1;
margin: 0 auto 2em auto;
padding: 0.5em 0;

input {
  padding: 0.7em 1em;
  background: #ffeec8;
  border: none;
  outline: none;
  border-bottom: 2px solid #666;
  border-radius: 0.25em 0.25em 0 0;
  font-size: 0.85rem;
  font-family: inherit;
  transition: border 0.25s ease-in;
  margin-right: 0.5em;
  opacity: 0.7;
  background: #ffeec8 url("assets/img/search-icon.svg") no-repeat 90% 50%;
  background-size: 1.25em;
}

input:focus {
  border-bottom: 2px solid #ffd475;
  background: #ffeec8;
  opacity: 1;
  transition: border, opacity 0.3s ease-in;
}

@media(max-width: 560px){
  small{
    display:none;
  }
}
`;
