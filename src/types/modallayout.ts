export const MODAL_VISIBLE = "MODAL_ACTION";
export const SNIPPET_KEY = "SNIPPET_KEY"; 

export interface ModalState{
  isVisble: boolean;
  snippetKey: number;
}

//тип экшена опредлеящий видимость модального окна и какие данные ему получать

export interface ModalAction{
  type: string;
  payload: {
    isVisible?: boolean; //флаг видимости модального окна
    snippetKey?: number;  //индекс данных находищся в массиве состояния SnippetItem[]
  }
}