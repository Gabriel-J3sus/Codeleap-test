import styled from "styled-components";

export const Input = styled.input`
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  border: 1px solid var(--cl-overlay);
  font-size: 0.875rem;
        
  &::placeholder {
    color: var(--cl-detail);
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 4.6rem;
  
  resize: vertical;
  max-block-size: 16rem;
  padding: 0.3rem 0.6rem;
          
  border-radius: 4px;
  border: 1px solid var(--cl-overlay);
  font-size: 0.875rem;
          
  &::placeholder {
    color: var(--cl-detail);
  }
`