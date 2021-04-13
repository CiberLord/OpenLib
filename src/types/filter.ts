export const FILTER = 'FILTER';

export const filters = ['All', 'title', 'author'];


export interface FilterAction{
  type: String;
  payload: String;
}
