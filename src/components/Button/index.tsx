import { ButtonContainer } from './style'

type PropsExtends = 
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;


interface ButtonProps extends PropsExtends {
  bgColor: 'black' | 'white'
  bold: boolean
  textType: 'capitalize' | 'uppercase' | 'lowercase'
}

export const Button: React.FC<ButtonProps> = ({ children, bgColor, bold, textType, ref, ...rest }) => {
  return (
    <ButtonContainer 
      bgColor={bgColor} 
      bold={bold} 
      textType={textType}
      {...rest}
    >
      {children}
    </ButtonContainer>
  )
}