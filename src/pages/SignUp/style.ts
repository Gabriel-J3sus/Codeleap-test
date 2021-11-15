import styled from "styled-components";

export const SignUpContainer = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8vw;

  .wrapper {
    width: 100%;
    padding: 1.75rem 2rem 1.43rem 1.5rem;  
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    
    background: var(--cl-white);
    border: 1px solid var(--cl-detail);

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        padding: 0.3rem 0.6rem;
        border-radius: 4px;
        border: 1px solid var(--cl-overlay);
        font-size: 0.875rem;
          
        &::placeholder {
          color: var(--cl-detail);
        }
      }
    }
  }

  @media(max-width: 2080px) {
    .wrapper {
      max-width: 720px;
    }
  }
`