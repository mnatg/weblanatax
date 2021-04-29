//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from "redux-saga";

import rootReducer from './reducers';
import rootSaga from "./sagas"
;
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

store.subscribe(() => console.log("Estado" , store.getState()));

let persistor = persistStore(store);

export {
  store,
  persistor,
};
