import { combineReducers } from "redux";
import {searchReducer} from './searchReducer';
export const rootReducer = combineReducers({
  searchResults: searchReducer
})

export type RootState = ReturnType<typeof rootReducer>