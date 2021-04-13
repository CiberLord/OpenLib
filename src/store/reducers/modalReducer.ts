import { ModalAction, ModalState, MODAL_VISIBLE, SNIPPET_KEY} from "../../types/modallayout";


//редюсер для работы с модальным окном...


let initialState: ModalState = { isVisble: false, snippetKey: 0};
export const modalReducer = (state:ModalState= initialState, action:ModalAction):ModalState => {
  if (action.type === MODAL_VISIBLE) {
    return { ...state, isVisble: action.payload.isVisible };
  }
  if (action.type === SNIPPET_KEY) {
    return {...state,snippetKey: action.payload.snippetKey}
  }
  return state;
}