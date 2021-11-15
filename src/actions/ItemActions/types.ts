import { AppDispatch } from "../../redux";
import { ActionResponse } from "../actionTypes";

export interface ItemBaseProps {
  title: string;
  content: string;
  username: string;
}

export interface GetItemProps extends ItemBaseProps {
  id: number;
  created_datetime: string;
}

export type ItemToUpdate = Partial<Omit<GetItemProps, "username" | "created_datetime">>

/*
1- more descritive when passing parameters to functions
2- no need to worry about props order
3- possible to reutilize interfaces in a compound way
*/
export interface ItemActionsProps {
  createItem(Params: { data: GetItemProps }): ActionResponse<GetItemProps>
  getAllItens(Params: { data: GetItemProps[]}): ActionResponse<GetItemProps[]>
  updateItem(Params: { data: GetItemProps }): ActionResponse<GetItemProps>
  deleteItem(Params: { id: number }): ActionResponse<{ id: number }>
}

export interface ItemActionsRequestProps {
  createItemRequest(Params: { data: ItemBaseProps }): (dispatch: AppDispatch) => void
  getAllItensRequest(): (dispatch: AppDispatch) => void
  updateItemRequest(Params: { data: ItemToUpdate }): (dispatch: AppDispatch) => void
  deleteItemRequest(Params: { id: number }): (dispatch: AppDispatch) => void
}