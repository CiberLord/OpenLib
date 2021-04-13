export const FILTER = 'FILTER';

export const filters: string[] = ['All', 'title', 'author'];

export const FilterType = {
  "All": "q",
  "title": "title",
  "author":"author"
}

export interface FilterAction{
  type: string;
  payload: string;
}
