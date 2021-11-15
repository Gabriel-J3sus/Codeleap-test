import { ActionType } from "."

// Reducer - Executes the given task
export const userReducer = (state = '', action: ActionType) => {
  switch (action.type) {
    case 'CREATE_USER':
      return state = action.payload.username
      
    default:
      return state
  }
}

