import styled from "styled-components";

export const StyledSorting = styled.div`
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