import { AnyAction } from "redux";

export const ActionKeyTypes = {
  CREATE_ITEM: 'CREATE_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  GET_ITENS: 'GET_ITENS',
  UPDATE_ITEM: 'UPDATE_ITEM',

  CREATE_USER: 'CREATE_USER'
}

export interface ActionResponse<T> extends AnyAction {
  type: keyof typeof ActionKeyTypes,
  payload?: T
}