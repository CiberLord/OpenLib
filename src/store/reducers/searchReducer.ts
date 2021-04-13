import { SnippetItem, SearchAction, SEARCH_ACTION, LoadAction, ISLOAD_ACTION } from "../../types/search";


const maxLen = 100;

/*
    редюсер срабатывающей после загрузки результатов поиска книг
    возвращает состояние списка  книг
 */

const InitialState: SnippetItem[] = [];
export const searchReducer = (state: SnippetItem[] = InitialState, action: SearchAction): SnippetItem[] => {

  if (action.type === SEARCH_ACTION) {
    const docs = action.payload.docs //результаты поиска хранятся в массиве json.docs (json - ответ с сервера)
    let tmp: SnippetItem[] = []; 
    for (let i = 0; i < Math.min(maxLen, docs.length); i++) {

      //ответ с сервера не всегда корректен и не возвращает одни и те же данные для каких то книг отстутсвует какой тоиз параметров, 
      //при отстуствии присваевается пустая строка
      let author = (docs[i].author_name) ? docs[i].author_name[0] : "none";
      let title = (docs[i].title)?docs[i].title:"not known";
      let publishDate = (docs[i].publish_date) ? docs[i].publish_date[0] : (docs[i].publish_year) ? docs[i].publish_year[0]:"not known";
      let isbn = (docs[i].isbn) ? docs[i].isbn[0] : "not know";
      let iconUrl: string;
      let url = "https://openlibrary.org" + docs[i].key;
      let publisher = (docs[i].publisher) ? docs[i].publisher[0] : "not known";
      let cover = (docs[i].cover_i) ? docs[i].cover_i : "";
      if(cover!=='')
        iconUrl = "https://covers.openlibrary.org/b/id/" + cover;
      else
        iconUrl = "https://covers.openlibrary.org/b/isbn/" + isbn;
      tmp.push({
        author,title,publishDate,isbn,iconUrl,url,publisher
      });
    }
    return tmp;
  }
  return state;
}

// редьюсер определяющи идет ли загрузка
let loadIstate = false;
export const isLoadReucer = (state: boolean = loadIstate, action: LoadAction): boolean => {
  if (action.type === ISLOAD_ACTION) {
    return action.payload;
  }
  return state;
}