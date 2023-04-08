import { combineReducers } from "redux";
import shopReducer from "./shop/shopReducer";

// Create rootReducer.
const rootReducer = combineReducers({
  shop: shopReducer,
});

// Export.
export default rootReducer;
