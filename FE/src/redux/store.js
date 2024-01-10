import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as  ProductReducer} from "./product/reducer";
import { reducer as AuthReducer } from "./user/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  ProductReducer,
  AuthReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
