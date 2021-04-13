import { FILTER, FilterAction,FilterType } from "../../types/filter";


const initialState: string = FilterType['All'];

export const filterReducer = (state: string = initialState, action: FilterAction):string => {
  if (action.type === FILTER) {
    return action.payload;
  }
  return state;
}