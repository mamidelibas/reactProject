import { combineReducers } from "redux";
import userReducer from "./userReducer";

// userReducer fonsikyonunu buraya atıyoruz
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
