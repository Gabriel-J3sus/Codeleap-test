import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.1rem; 

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