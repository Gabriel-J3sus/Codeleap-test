import axios from '../../services/axios'
import { ItemActionsProps, ItemActionsRequestProps } from './types'

const getAllItens: ItemActionsProps["getAllItens"] = ({ data }) => {
  return {
    type: 'GET_ITENS',
    payload: data
  }
}

export const getAllItensRequest: ItemActionsRequestProps["getAllItensRequest"] = () => {
  return (dispatch) => {
    axios.get('/?limit=20&offset=0')
    .then(response => {
      const itens = response.data.results
      dispatch(getAllItens({ data: itens }))
    })
    .catch(error => {
      console.log(error.message)
    })
  }
}