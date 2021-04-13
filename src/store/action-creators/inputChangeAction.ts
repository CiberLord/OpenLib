import { INPUT_ACTION,InputAction } from "../../types/input"


//экшен изменящий значение текстового поля


export const setChange = (value: string):InputAction => {
  return {
    type: INPUT_ACTION,
    payload: value
  }
}