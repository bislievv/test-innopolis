import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/configureStore";

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
