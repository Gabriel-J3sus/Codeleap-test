import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.1rem; 
  padding: 1.75em 2em 1.43em 1.5em; 
  border: 1px solid var(--cl-detail);


  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
     
    .input-section {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
  }
`