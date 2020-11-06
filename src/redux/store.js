import { createStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { loadState } from '../Components/LocalStorage';

const persistedState = loadState();

export default createStore(
  rootReducer,
  persistedState,
);
