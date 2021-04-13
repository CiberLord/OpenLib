export const MODAL_VISIBLE = "MODAL_ACTION";
export const SNIPPET_KEY = "SNIPPET_KEY";

export interface ModalState{
  isVisble: boolean;
  snippetKey: number;
}
export interface ModalAction{
  type: string;
  payload: {
    isVisible?: boolean;
    snippetKey?: number;
  }
}