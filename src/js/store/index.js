import { createStore } from "redux";
import userReducer from "../reducers/index";
const store = createStore(userReducer);
export default store;