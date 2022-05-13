import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';

const middleware = [thunkMiddleware];


const initStore = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

const makeStore = () => initStore;

export const wrapper = createWrapper(makeStore);