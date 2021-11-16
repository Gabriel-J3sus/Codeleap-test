import { FormEvent } from "react"
import { ItemBaseProps } from "../../actions"
import { Button } from "../Button"
import { CustomInput } from "../CustomInput"

import { Form } from './styles'

interface ItemFormProps<T = Omit<ItemBaseProps, 'username'> & { id?: number }> {
  title: string;
  type: 'create' | 'edit' | 'delete'
  item: T
  setItem: (item: T) => void
  handleSubmit: (e: FormEvent, item?: T) => void
}

export const ItemForm: React.FC<ItemFormProps> = ({ children, title, type, handleSubmit, ...props }) => {
  return (
    <Form 
      role="form"
      aria-label={`${type} item`}
      onSubmit={(e) => handleSubmit(e, {
        id: props.item.id,
        title: props.item.title,
        content: props.item.content,
      })}
    >
      <h2>{title}</h2>

      <div className="input-wrapper">
        <span className="input-section">
          <label htmlFor="title">Title</label>
          <CustomInput 
            customType="normalText" 
            id="title"
            placeholder="Hello world" 
            value={props.item.title}
            onChange={(e) => props.setItem({ ...props.item, title: e.target.value })}
            required
          />
        </span>

        <span className="input-section">
          <label htmlFor="content">Content</label>
          <CustomInput 
            customType="textArea" 
            id="content" 
            placeholder="Content here" 
            value={props.item.content}
            onChange={(e) => props.setItem({ ...props.item, content: e.target.value })}
            required
          />
        </span>
      </div>

      <Button 
        className="submit" 
        name="submit"
        bgColor="black" 
        bold
        textType="uppercase"
        style={{ alignSelf: 'flex-end' }}
        disabled={(!props.item.title || !props.item.content) && true}
        aria-pressed="false"
      >
        {type === "create" ? 'create' : 'save'}
      </Button>
    </Form>
  )
}