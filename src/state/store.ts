import {combineReducers, AnyAction, legacy_createStore as createStore, applyMiddleware} from "redux";
import { useDispatch } from "react-redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { allReducer } from "./all-reducer";


export const rootReducer = combineReducers({
    all: allReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const AppDispatch = () => useDispatch<AppThunkDispatchType>()

// @ts-ignore
window.store = store;