import { InputAction, INPUT_ACTION } from "../../types/input";


//редюсер возвращающий новое значение текстового поля


let initialState: string = "";
export const inputReducer = (state: string=initialState, action: InputAction): string => {
  if (action.type === INPUT_ACTION) {
    console.log("input");
    return action.payload;
  }
  return state;
}