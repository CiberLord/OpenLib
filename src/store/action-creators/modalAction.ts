import { ModalAction, MODAL_VISIBLE, SNIPPET_KEY } from '../../types/modallayout';

export const setModalVisible = (val: boolean):ModalAction => {
  return {
    type: MODAL_VISIBLE,
    payload: {
      isVisible: val
    }
  }
}
export const setSnippetKey = (val: number): ModalAction => {
  return {
    type: SNIPPET_KEY,
    payload: {
      snippetKey: val
    }
  }
}