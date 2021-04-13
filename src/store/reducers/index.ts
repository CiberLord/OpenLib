import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { inputReducer } from "./inputReducer";
import { modalReducer } from "./modalReducer";
import {isLoadReucer, searchReducer} from './searchReducer';

//комбайнер всех редюсеров
export const rootReducer = combineReducers({
  searchResults: searchReducer,
  modalState: modalReducer,
  filter: filterReducer,
  inputText: inputReducer,
  isLoad: isLoadReucer
})

export type RootState = ReturnType<typeof rootReducer>