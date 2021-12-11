import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import QuoteItem from "./QuoteItem.js";
import styled from "styled-components";
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

const StyledContainer = styled.div`
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
`;

const StyledSorting = styled.div`
  max-width: 40rem;
  display: flex;
  align-items: center;

  .sort-icon {
    fill: #666;
    font-size: 2rem;
    border-radius: 50%;
    background: #ffeec8;
    width: 1.5em;
    height: 1.55em;
    padding: 0.25em;
    transition: transform 0.3s ease-in-out;
  }

  .sort-icon:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }

  small {
    font-size: 0.8rem;
    margin-left: 1em;
  }
`;

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
      <StyledContainer>
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
      </StyledContainer>
      {isLoading && (
        <div className="center">
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
