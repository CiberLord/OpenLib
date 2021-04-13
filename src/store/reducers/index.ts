import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { modalReducer } from "./modalReducer";
import {searchReducer} from './searchReducer';

//комбайнер всех редюсеров
export const rootReducer = combineReducers({
  searchResults: searchReducer,
  modalState: modalReducer,
  filter: filterReducer
})

export type RootState = ReturnType<typeof rootReducer>