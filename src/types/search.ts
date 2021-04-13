export const SEARCH_ACTION = "SEARCH_ACTION"; //тип экшена - поиск книг
export const ISLOAD_ACTION = "ISLOAD";

//тип элементов котоыре будут находится в searchResult[]
export interface SnippetItem {
  title: string;
  author: string;
  publishDate: string;
  isbn: string;
  iconUrl: string;
  publisher: string;
  url: string;
}

//экшен поиска
export interface SearchAction {
  type: string;
  payload: any;
}

//экшен состояни загрузки
export interface LoadAction extends SearchAction{
  payload: boolean;
}