import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";



//хук обертка над хуком useSelector, для правильной работы с типами

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;