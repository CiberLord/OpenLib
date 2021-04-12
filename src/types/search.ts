export const SEARCH_ACTION = "SEARCH_ACTION"; //тип экшена - поиск книг 

//тип элементов котоыре будут находится в searchResult[]
export interface SnippetItem {
  title: string;
  author: string;
  publishDate: string;
  isbn: string;
  iconUrl: string;
}

//экшен поиска
export type SearchAction = {
  type: string;
  payload: any;
}