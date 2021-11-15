import { ActionResponse } from "../actionTypes"

export const createUser = (username: string): ActionResponse<{ username: string }> => {
  return {
    type: 'CREATE_USER',
    payload: {
      username
    }
  }
}