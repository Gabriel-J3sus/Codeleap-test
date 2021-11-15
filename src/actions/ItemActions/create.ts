import { ItemActionsRequestProps } from '.'
import axios from '../../services/axios'
import { GetItemProps, ItemActionsProps } from './types'

const createItem: ItemActionsProps["createItem"] = ({ data }) => {
  return {
    type: 'CREATE_ITEM',
    payload: data
  }
}

export const createItemRequest: ItemActionsRequestProps["createItemRequest"] = ({ data }) => {
  return (dispatch) => {
    axios.post('/', {
      username: data.username,
      title: data.title,
      content: data.content,
    })
    .then(response => {
      const item = response.data as GetItemProps
      dispatch(createItem({ data: item }))
    })
    .catch(error => {
      console.log(error)
    })
  }
}