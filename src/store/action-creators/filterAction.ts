import { FILTER, FilterAction } from "../../types/filter"

//экшен изменящий текущий фильтр поиска

export const setFilter = (value:string):FilterAction => {
  return {
    type: FILTER,
    payload: value
  }
}