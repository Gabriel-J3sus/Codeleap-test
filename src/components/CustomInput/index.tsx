import React from "react"

import { Input, TextArea } from './style'

export interface TextareaInputProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  customType: "textArea";
}

export interface NormalInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  customType: "normalText";
}

export type InputProps = TextareaInputProps | NormalInputProps

// adapted to use ref - however, it might not be necessery
export const CustomInput = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({ customType, ...rest }, ref) => {
  switch (customType) {
    case 'normalText':
      return (
        <Input 
          {...rest as React.InputHTMLAttributes<HTMLInputElement>} 
          type="text"
          ref={ref as React.Ref<HTMLInputElement>}
        />
      )
      
    case 'textArea':
      return (
        <TextArea 
          {...rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>} 
          ref={ref as React.Ref<HTMLTextAreaElement>}
        />
      )
    default:
      throw new Error("Input must have a customType");
  }
})