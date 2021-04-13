import { ModalAction, MODAL_VISIBLE, SNIPPET_KEY } from '../../types/modallayout';

//экшен устанавливающий видимость модального окна

export const setModalVisible = (val: boolean):ModalAction => {
  return {
    type: MODAL_VISIBLE,
    payload: {
      isVisible: val
    }
  }
}

//экшен задающий индекс по которому нужно получать данные
export const setSnippetKey = (val: number): ModalAction => {
  return {
    type: SNIPPET_KEY,
    payload: {
      snippetKey: val
    }
  }
}