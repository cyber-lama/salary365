import { combineReducers } from 'redux';
import {HYDRATE} from 'next-redux-wrapper';
import profile from './profile';
import finance from './finance';

const combinedReducer = combineReducers({
  profile, finance
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const isClientHasBalance = state.finance.balance.data;
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (isClientHasBalance) {
      nextState.finance.balance = state.finance.balance;
    }
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default reducer;