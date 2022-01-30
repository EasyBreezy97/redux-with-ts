import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
    repositories: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>; //Take reducers function and assign RootState that functions return type
