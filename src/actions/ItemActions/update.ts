import { ItemActionsProps, ItemActionsRequestProps } from '.'
import axios from '../../services/axios'

const updateItem: ItemActionsProps["updateItem"] = ({ data }) => {
  return {
    type: 'UPDATE_ITEM',
    payload: data
  }
}

export const updateItemRequest: ItemActionsRequestProps["updateItemRequest"] = ({ data }) => {
  return (dispatch) => {
    axios.patch(`/${data.id}/`, {
      title: data.title,
      content: data.content
    })
    .then(response => {
      const item = response.data
      dispatch(updateItem({ data: item }))
    })
    .catch(error => {
      console.log(error.message)
    })
  }
}
