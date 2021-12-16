import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import QuoteItem from "./QuoteItem.js";
import { useLocation, useNavigate } from "react-router";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import useFetch from "../../hooks/useFetch.js";
import { BeatLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { quoteActions } from "../../store/index.js";
import Fuse from "fuse.js";
import { StyledSorting } from "../../Styled/styled-sorting.js";
import { StyledQuotesContainer } from "../../Styled/styled-quotescontainer.js";

const sortQuotes = (quotes, isAscending) => {
  return [...quotes].sort((a, b) => {
    if (isAscending) {
      return a.author < b.author ? -1 : 1;
    } else {
      return b.author < a.author ? -1 : 1;
    }
  });
};

const QuoteList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const quotes = useSelector((state) => state.quotes.quotes);

 const isFirstRender = useSelector((state) => state.quotes.isFirstRender);
  const dispatch = useDispatch();
 const { isLoading, error, sendRequest: fetchQuotes } = useFetch();
  const location = useLocation();
  const navigate = useNavigate();

  //determine the sorting based on url query params
  let queryParams = new URLSearchParams(location.search);
  const isAscending = queryParams.get("sort") === "asc";

  const fuse = new Fuse(quotes, {
    keys: ["author"],
    includeScore: true,
    threshold: 0.3,
  });

  
  const storeQuotes = useCallback(
    (quotes) => {
      console.log(quotes);
      dispatch(quoteActions.storeQuotes(quotes));
    },
    [dispatch]
  );

  useEffect(() => {
    if (isFirstRender) {
      console.log('yes')
      fetchQuotes(
        { url: "https://quoteselect.prestoapi.com/api/quotes" },
        storeQuotes
      );
      dispatch(quoteActions.clearFirstRender());
    }
  }, [fetchQuotes, storeQuotes, dispatch, isFirstRender, quotes]);
  

  const handleOnSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const HandleBlurSearch = (e) => {
    e.target.value = "";
    setSearchQuery("");
  };

  const changeSortingHandler = () => {
    navigate(`/quotes?sort=${isAscending ? "desc" : "asc"}`);
  };

  let quotesToRender;

  if (searchQuery) {
    const results = fuse.search(searchQuery);
    quotesToRender = results.map((result) => result.item);
  } else {
    quotesToRender = quotes;
  }

  return (
    <>
      <StyledQuotesContainer>
        <StyledSorting>
          {isAscending && (
            <AiOutlineSortDescending
              className="sort-icon"
              onClick={changeSortingHandler}
            />
          )}
          {!isAscending && (
            <AiOutlineSortAscending
              className="sort-icon"
              onClick={changeSortingHandler}
            />
          )}
          <small>Sort by Author</small>
        </StyledSorting>

        <input
          type="text"
          placeholder="Search author..."
          onChange={handleOnSearch}
          onBlur={HandleBlurSearch}
        ></input>
      </StyledQuotesContainer>
      {isLoading && (
        <div className="loader">
          <BeatLoader size={20} color="#ffd475" className="center" loading={isLoading} />
        </div>
      )}

      {error && <p className="error">{error}</p>}

      {!error && !isLoading && quotes.length === 0 && (
        <div className="center">
          <p>There are no quotes yet.</p>
          <Link to="/new-quote" className="btn-primary">
            Add a quote
          </Link>
        </div>
      )}

      {!error &&
        sortQuotes(quotesToRender, isAscending).map((quote) => (
          <QuoteItem
            key={quote._id}
            id={quote._id}
            text={quote.text}
            author={quote.author}
          />
        ))}
    </>
  );
};

export default QuoteList;
