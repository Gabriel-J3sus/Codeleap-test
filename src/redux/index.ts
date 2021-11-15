import { AnyAction, applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { ActionKeyTypes } from "../actions/actionTypes";
import { itemReducer } from "./item";
import { userReducer } from "./user";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export interface ActionType extends AnyAction {
  type: keyof typeof ActionKeyTypes;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


const allReducer = combineReducers({
  username: userReducer,
  itens: itemReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  allReducer, 
  composeEnhancers(applyMiddleware(thunk))
)
