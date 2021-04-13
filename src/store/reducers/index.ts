import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import {searchReducer} from './searchReducer';

//комбайнер всех редюсеров
export const rootReducer = combineReducers({
  searchResults: searchReducer,
  isModal:modalReducer
})

export type RootState = ReturnType<typeof rootReducer>