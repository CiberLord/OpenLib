import { INPUT_ACTION,InputAction } from "../../types/input"

export const setChange = (value: string):InputAction => {
  return {
    type: INPUT_ACTION,
    payload: value
  }
}