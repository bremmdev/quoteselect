import React, { useEffect, useCallback } from "react";
import { quoteActions } from "../../store/index.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { BeatLoader } from "react-spinners";
import { StyledQuoteListByAuthor } from "../../Styled/styled-quotelistbyauthor.js";
import { HighlightedQuote } from "../../Styled/styled-highlightedquote.js";



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
          <div className="loader">
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
