import { SnippetItem, SearchAction, SEARCH_ACTION } from "../../types/search";

/*
    редюсер срабатывающей после загрузки результатов поиска книг
    возвращает состояние списка  книг
 */
const InitialState: SnippetItem[] = [];
export const searchReducer = (state: SnippetItem[] = InitialState, action: SearchAction): SnippetItem[] => {

  if (action.type === SEARCH_ACTION) {
    const docs = action.payload.docs //результаты поиска хранятся в массиве json.docs (json - ответ с сервера)
    let tmp: SnippetItem[] = []; 
    for (let i = 0; i < Math.min(10, docs.length); i++) {

      //ответ с сервера не всегда корректен и не возвращает одни и те же данные для каких то книг отстутсвует какой тоиз параметров, 
      //при отстуствии присваевается пустая строка

      let author = (docs[i].author_name) ? docs[i].author_name[0] : "none";
      let title = (docs[i].title)?docs[i].title:"None";
      let publishDate = (docs[i].publish_date) ? docs[i].publish_date[0] : (docs[i].publish_year) ? docs[i].publish_year[0]:"";
      let isbn = (docs[i].isbn) ? docs[i].isbn[0] : "";
      let iconUrl = "http://covers.openlibrary.org/b/isbn/" + isbn;
      tmp.push({
        author,title,publishDate,isbn,iconUrl
      });
    }
    return tmp;
  }
  return state;
}