import React from "react";
import { Link } from "react-router-dom";
import { StyledFigure } from "../../Styled/styled-figure.js";

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
