import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { quoteActions } from "../../store/index.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { BeatLoader } from "react-spinners";

const HighlightedQuote = styled.div`
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

const StyledQuoteListByAuthor = styled.div`
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

const QuoteItemDetail = (props) => {
  
  const quotes = useSelector((state) => state.quotes.quotes);

  const isFirstRender = useSelector((state) => state.quotes.isFirstRender);
  const dispatch = useDispatch();
  const { isLoading, sendRequest: fetchQuotes } = useFetch();

  const quotesByAuthor = quotes.filter(
    (quote) => quote.author === props.author && quote._id !== props._id
  );

  console.log(quotesByAuthor);
  const storeQuotes = useCallback(
    (quotes) => {
      console.log(quotes);
      dispatch(quoteActions.storeQuotes(quotes));
    },
    [dispatch]
  );

  useEffect(() => {
    if (isFirstRender) {
      console.log("yes");
      fetchQuotes(
        { url: "https://quoteselect.prestoapi.com/api/quotes" },
        storeQuotes
      );
      dispatch(quoteActions.clearFirstRender());
    }
  }, [fetchQuotes, storeQuotes, dispatch, isFirstRender, quotes]);

  return (
    <>
      <HighlightedQuote>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>&mdash; {props.author}</figcaption>
      </HighlightedQuote>
      <StyledQuoteListByAuthor>
        <h2>Other quotes from this author:</h2>

        {isLoading && (
          <div className="center">
            <BeatLoader
              size={20}
              color="#ffd475"
              className="center"
              loading={isLoading}
            />
          </div>
        )}

        {!isLoading && quotesByAuthor.length > 0 && (
          <ul>
            {quotesByAuthor.map((quote) => (
              <li key={quote._id}>{quote.text}</li>
            ))}
          </ul>
        )}
        {!isLoading && quotesByAuthor.length === 0 && (
          <p>There are no other quotes from this author.</p>
        )}
      </StyledQuoteListByAuthor>
    </>
  );
};

export default QuoteItemDetail;
