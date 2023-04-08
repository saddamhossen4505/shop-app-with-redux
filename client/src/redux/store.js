import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// MiddleWares.
const middleWares = [thunk];

// Create Store.
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);

// Export.
export default store;
