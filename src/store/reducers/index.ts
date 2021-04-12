import { combineReducers } from "redux";
import {searchReducer} from './searchReducer';

//комбайнер всех редюсеров
export const rootReducer = combineReducers({
  searchResults: searchReducer
})

export type RootState = ReturnType<typeof rootReducer>