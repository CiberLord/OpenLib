import { SnippetItem, SearchAction, SEARCH_ACTION } from "../../types/search";

const InitialState: SnippetItem[] = [];

export const searchReducer = (state: SnippetItem[] = InitialState, action: SearchAction): SnippetItem[] => {

  if (action.type === SEARCH_ACTION) {
    const docs = action.payload.docs
    let tmp: SnippetItem[] = [];
    for (let i = 0; i < Math.min(100, docs.length); i++) {
      let author = (docs[i].author_name)?docs[i].author_name[0]: "";
      let title = (docs[i].title)?docs[i].title:"";
      let publishDate = (docs[i].publish_date) ? docs[i].publish_date[0] : (docs[i].publish_year) ? docs[i].publish_year[0]:"";
      let isbn = (docs[i].isbn)?docs[i].isbn[0]:"";
      tmp.push({
        author,title,publishDate,isbn
      });
    }
    return tmp;
  }
  return state;
}