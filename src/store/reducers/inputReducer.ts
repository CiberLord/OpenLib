import { InputAction, INPUT_ACTION } from "../../types/input";


let initialState: string = "";
export const inputReducer = (state: string=initialState, action: InputAction): string => {
  if (action.type === INPUT_ACTION) {
    console.log("input");
    return action.payload;
  }
  return state;
}