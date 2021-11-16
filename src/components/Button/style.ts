import styled from "styled-components";

interface CustomProps {
  bgColor: 'black' | 'white'
  bold: boolean
  textType: 'capitalize' | 'uppercase' | 'lowercase'
}

export const ButtonContainer = styled.button<CustomProps>`
  padding: 0.4rem 2.1rem;
  background: ${({ bgColor }) => bgColor === 'white' ? `var(--cl-white)` : `var(--cl-black)`};
  color: ${({ bgColor }) => bgColor === 'white' ? `var(--cl-black)` : `var(--cl-white)`};
  border: 1px solid ${({ bgColor }) => bgColor === 'white' ? `var(--cl-black)` : `var(--cl-white)`};
  text-transform: ${({ textType }) => textType};
  font-weight: ${({ bold }) => bold && 700};
  cursor: pointer;
  transition: background 0.2s;

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.5);
  }
`