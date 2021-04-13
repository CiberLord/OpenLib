import { Dispatch } from 'redux';
import { SEARCH_ACTION, ISLOAD_ACTION} from "../../types/search";

//адресс api
const searchUrl = "http://openlibrary.org/search.json?";

/*
  экшен инициюрующий поиск принимает два параметра
  sWord - слово из поисковой строки
  filter - фильтр поиска (поиск по всем, поиск по названиям, поиск по автору)
*/
export const fetchSearch = (sWord: string, filter: String = 'q') => {
  return async (dispatch: Dispatch<any>) => {
    try {
      // отметить флаг загрузки
      dispatch({type:ISLOAD_ACTION,payload:true})
      const url = searchUrl + filter + "=" + sWord;
      const res = await fetch(url);
      const json = await res.json();
      dispatch({
        type: SEARCH_ACTION, payload: json
      })
      //снять флаг загрузки
      dispatch({type:ISLOAD_ACTION,payload:false})
    } catch (error) {
      console.log(error);
    }
  }
}