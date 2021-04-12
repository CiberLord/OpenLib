import { Dispatch } from 'redux';
import { SEARCH_ACTION,SearchAction } from "../../types/search";

const searchUrl = "http://openlibrary.org/search.json?";

export const fetchSearch = (sWord: string, filter: string = 'q') => {
  return async (dispatch: Dispatch<SearchAction>) => {
    try {
      
      const url = searchUrl + filter + "=" + sWord;
      const res = await fetch(url);
      const json =await res.json();

      dispatch({
        type: SEARCH_ACTION, payload: json
      })
    } catch (error) {
      console.log(error);
    }
  }
}