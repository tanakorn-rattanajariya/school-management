import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import reducers from "./reducers";
import sagas from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleware = createSagaMiddleware();
const middleWare = middle => {
  if (process.env.dev) {
    return composeWithDevTools(applyMiddleware(...middle));
  }
  return applyMiddleware(...middle);
};
const store = createStore(
  reducers,
  middleWare([sagaMiddleware, createLogger()])
);
sagaMiddleware.run(sagas);
export default store;
