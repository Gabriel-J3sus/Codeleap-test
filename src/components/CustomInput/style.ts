import styled from "styled-components";

export const Input = styled.input`
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  border: 1px solid var(--cl-overlay);
        
  &::placeholder {
    color: var(--cl-detail);
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 4.6rem;
  max-height: 16rem;
  
  resize: vertical;
  padding: 0.3rem 0.6rem;
          
  border-radius: 4px;
  border: 1px solid var(--cl-overlay);
          
  &::placeholder {
    color: var(--cl-detail);
  }
`