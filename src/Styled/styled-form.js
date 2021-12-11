import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 40rem;
  margin: 0 auto;
  padding: 2em 0;

  .form-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2em auto;
  }

  label {
    min-width: 5rem;
    font-weight: 700;
    font-size: 0.9rem;
  }

  textarea {
    min-height: 4rem;
    max-height: 20rem;
  }

  input,
  textarea {
    padding: 0.7em 1em;
    background: #ffeec8;
    border: none;
    outline: none;
    border-bottom: 2px solid #666;
    border-radius: 0.25em 0.25em 0 0;
    font-size: 0.85rem;
    font-family: inherit;
    transition: border 0.25s ease-in;
    display: inline-block;
    flex: 1;
  }

  input:focus,
  textarea:focus {
    border-bottom: 2px solid #ffd475;
    transition: border 0.3s ease-in;
  }

  h2 {
    text-align: center;
  }
`;
