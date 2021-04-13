import { FILTER, FilterAction, filters } from "../../types/filter";


const initialState: String = filters[0];

export const filterReducer = (state: String = initialState, action: FilterAction):String => {
  if (action.type === FILTER) {
    
    /* КОСТЫЛЬ  */
    return (action.payload === 'All') ? 'q' : action.payload;
  }
  return state;
}