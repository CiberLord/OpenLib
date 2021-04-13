import { FILTER, FilterAction } from "../../types/filter"


export const setFilter = (value:string):FilterAction => {
  return {
    type: FILTER,
    payload: value
  }
}