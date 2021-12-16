import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { StyledForm } from "../../Styled/styled-form";
import useFetch from "../../hooks/useFetch";
import { v4 as uuidv4 } from "uuid";
import { quoteActions } from "../../store";
import { BeatLoader } from "react-spinners";

const QuoteForm = () => {
  const [formError, setFormError] = useState(null);
  const textInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, error, sendRequest: postQuote } = useFetch();

     const storeQuote = (quoteData) => {
       console.log(quoteData);
       dispatch(quoteActions.addQuote(quoteData));
       navigate("/");
     };



  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredText = textInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;

    if (!(enteredText && enteredAuthor)) {
      setFormError("Please enter a text and author.");
    } else {
      setFormError(null);

       await postQuote(
        {
          url: "https://quoteselect.prestoapi.com/api/quotes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:{
            _id: uuidv4(),
            text: enteredText,
            author: enteredAuthor,
          },
        },
        storeQuote
      );
    }
  };

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

      {error && <p className="error">{error}</p>}

      <StyledForm onSubmit={submitHandler}>
        <h2>Add a new quote</h2>
        <div className="form-control">
          <label htmlFor="form-text">Text</label>
          <textarea
            type="text"
            id="form-text"
            placeholder="quote text..."
            ref={textInputRef}
            resize="vertical"
          />
        </div>
        <div className="form-control">
          <label htmlFor="form-author">Author</label>
          <input
            type="text"
            id="form-author"
            placeholder="quote author..."
            ref={authorInputRef}
          ></input>
        </div>
        {formError && <p className="error">{formError}</p>}
        <button className="btn-primary">Submit</button>
      </StyledForm>
    </>
  );
};

export default QuoteForm;
