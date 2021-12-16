import styled from "styled-components";

export const StyledFigure = styled.figure`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: 40rem;
font-size: 0.9rem;
background-color: #ffeec8;
border-radius: 0.7em;
padding: 1.5em;
margin: 1.5em auto;
text-align: center;
border-left: 0.7em solid #ffd475;

blockquote {
  margin-bottom: 1em;
}

p{
  line-height:1.8;
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
  font-size: 0.8rem;
}

@media(max-width:560px){
  font-size:0.85rem;
}
`;
