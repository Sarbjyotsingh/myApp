import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counter';
import createSagaMiddleware from "redux-saga";
import saga from './sagas'

export const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default () => {
  const store = configureStore({
    reducer : {
      counter: counterReducer
    },
    devTools: true,
    middleware,
  });
  sagaMiddleware.run(saga);
  return store;
};
