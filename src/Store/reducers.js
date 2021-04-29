import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './reducers/Auth';
import roomReducer from './reducers/Room';
import taxesReducer from './reducers/Taxes';
import tokenReducer from './reducers/Token';

const rootReducer = combineReducers({
  auth: authReducer,
  room: roomReducer,
  taxes: taxesReducer,
  token: tokenReducer
});

export default rootReducer;
