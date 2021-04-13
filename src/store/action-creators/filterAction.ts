import { FILTER, FilterAction } from "../../types/filter"


export const setFilter = (value:String):FilterAction => {
  return {
    type: FILTER,
    payload: value
  }
}