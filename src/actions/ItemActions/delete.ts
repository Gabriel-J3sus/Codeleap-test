import axios from '../../services/axios'
import { ItemActionsProps, ItemActionsRequestProps } from './types'

const deleteItem: ItemActionsProps['deleteItem'] = ({ id }) => {
  return {
    type: 'DELETE_ITEM',
    payload: {
      id
    }
  }
}

export const deleteItemRequest: ItemActionsRequestProps["deleteItemRequest"] = ({ id }) => {
  return (dispatch) => {
    axios.delete(`/${id}/`)
      .then(response => {
        dispatch(deleteItem({ id }))
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}