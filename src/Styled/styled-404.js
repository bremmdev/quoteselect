import styled from "styled-components";

export const Styled404 = styled.div`
  color: #323232;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  padding: 2em 0;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3em;
  }

  svg {
    width: 10em;
    height: 10em;
  }

  strong {
    display: block;
    font-size: 2.5em;
  }
`;
