import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import QuoteItemDetail from "../components/quotes/QuoteItemDetail";
import useFetch from "../hooks/useFetch";
import { BeatLoader } from "react-spinners";

const QuoteDetails = () => {
  const { quoteId } = useParams();
  const navigate = useNavigate();
  const [selectedQuote, setSelectedQuote] = useState(null);
  const { isLoading, error, sendRequest: fetchSingleQuote } = useFetch();

  const handleNavigate = () => {
    navigate("/quotes");
  };

  const selectQuote = (quote) => {
    setSelectedQuote(quote);
  };

  useEffect(() => {
    fetchSingleQuote(
      { url: `https://quoteselect.prestoapi.com/api/quotes/${quoteId}` }, selectQuote);
  }, [quoteId, fetchSingleQuote]);

  return (
    <>
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

      {error && (
        <>
          <p className="error">{error}</p>
          <button className="btn-primary" onClick={handleNavigate}>
            Go back
          </button>
        </>
      )}

      {selectedQuote && (
        <>
          <QuoteItemDetail
            text={selectedQuote.text}
            author={selectedQuote.author}
            _id={quoteId}
          />
          <button className="btn-primary" onClick={handleNavigate}>
            Go to all quotes
          </button>
        </>
      )}
    </>
  );
};

export default QuoteDetails;
