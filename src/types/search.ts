export const SEARCH_ACTION = "SEARCH_ACTION";

export interface SnippetItem {
  title: string;
  author: string;
  publishDate: string;
  isbn: string;
}


export type SearchAction = {
  type: string;
  payload: any;
}