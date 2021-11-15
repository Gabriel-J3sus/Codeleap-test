import styled from "styled-components";

export const MainContainer = styled.section`
  position: relative;
  display: block;
  min-height: 100vh;
  margin: 0 auto;    

  background: var(--cl-white);
  
  > header {
    padding: 2vh 0 2vh 5vw;
    
    background: var(--cl-black);
    color: var(--cl-white);
  }
  
  > article {
    padding: 2.75rem 5vw;
    display: flex;
    flex-direction: column;
    gap: 2.1rem;
  }

  @media(min-width: 620px) {
    width: 60%;
  }
`
