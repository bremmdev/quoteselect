import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledFigure = styled.figure`
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
`;

const QuoteItem = (props) => {

  return (
    <StyledFigure>
      <blockquote><p>{props.text}</p></blockquote>
      <figcaption>&mdash; {props.author}</figcaption>
      <Link to={`/quotes/${props.id}`} className="btn-primary">
        Details
      </Link>
    </StyledFigure>
  );
};

export default QuoteItem;
