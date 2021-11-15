import { ActionType } from "./"
import { GetItemProps } from "../actions"

// Reducer - Executes the given task
export const itemReducer = (state: GetItemProps[] = [], action: ActionType) => {
  switch (action.type) {
    case 'CREATE_ITEM':
      return [
        action.payload,
        ...state
      ]

    case 'GET_ITENS':
      return state = action.payload

    case 'UPDATE_ITEM':
      const itemIndex = state.findIndex(item => item.id === action.payload.id)
      
      state[itemIndex] = {
        ...state[itemIndex],
        title: action.payload.title,
        content: action.payload.content,
      }      
      
      return [...state] // it will rebuild the array, so the map function will execute again

    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.payload.id && item)
    default:
      return state
  }
}

