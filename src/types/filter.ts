export const FILTER = 'FILTER';

//массив  ключей фильров

export const filters: string[] = ['All', 'title', 'author'];

export const FilterType = {
  "All": "q", //поиск по всмем 
  "title": "title", //поиск по названию книги
  "author":"author" //поиск по автору
}

//тип фильтр экшена

export interface FilterAction{
  type: string;
  payload: string;
}
