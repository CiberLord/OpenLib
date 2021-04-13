
export const INPUT_ACTION:string = "INPUT_ACTION";

//типо экшена изменяющего значение текстового поля

export interface InputAction {
  type: string;
  payload: string;
}
