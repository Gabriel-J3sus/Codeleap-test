import styled from "styled-components";

import { CloseIcon } from "../icons";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999999;
  padding: 0 8vw;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(119, 119, 119, 0.8);
`

export const ModalContainer = styled.div`
  position: relative;
  max-width: 720px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2.1rem; 
  padding: 1.75em 2em 1.43em 1.5em; 
  
  background: var(--cl-white);
  border: 1px solid var(--cl-detail);

  .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    font-size: 0; // button utilize font-size as a container measure 

    &:focus {
      outline: solid;
    }
  }
    
  .delete-modal-wrapper {
    display: flex;
    gap: 1rem;
    align-self: flex-end;
  }

`

export const StyledCloseIcon = styled(CloseIcon)`
  width: 2rem;
  height: 2rem;
  fill: var(--cl-black);
`