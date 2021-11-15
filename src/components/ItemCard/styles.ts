import styled, { css } from "styled-components";
import { EditIcon, DeleteIcon } from "../icons";

export const ItemCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  
  border: 1px solid var(--cl-ligth-detail);
  
  > header {
    padding: 1.75em 2em 1.43em 1.5em;  
    background: var(--cl-black);
    color: var(--cl-white);

    h3 {
      font-size: 1.4em;
    }

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.25em;

      button {
        font-size: 0;
        background: none;
        border: none;
      }
    }
  }

  .top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info {
    color: var(--cl-overlay);
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.75em 2em 1.43em 1.5em;  

    h3 {
      font-weight: 400;
    }
  }

  @media(max-width: 320px) {
    .top-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`

const icons = css`
  width: 1.8rem;
  height: 1.8rem;
  fill: var(--cl-white);
`

export const StyledDeleteIcon = styled(DeleteIcon)`
  ${icons}
`

export const StyledEditIcon = styled(EditIcon)`
  ${icons}
`