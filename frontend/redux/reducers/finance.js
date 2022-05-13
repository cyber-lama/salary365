import {combineReducers} from 'redux';
import {
  START_FETCHING_BALANCE,
  FINISH_FETCHING_BALANCE,
  FAIL_FETCHING_BALANCE,
  START_WITHDRAW_PAYMENT,
  FINISH_WITHDRAW_PAYMENT,
  FAIL_WITHDRAW_PAYMENT,
} from '../const/finance';

const initialState = {
  data: null,
  loading: false,
  error: null
};

const balance = (state = initialState, action) => {
  switch(action.type) {
  case START_FETCHING_BALANCE:
    return {
      ...state,
      loading: true,
    };
  case FINISH_FETCHING_BALANCE:
    return {
      ...state,
      loading: false,
      data: action.payload
    };
  case FAIL_FETCHING_BALANCE:
    return {
      ...state,
      loading: false,
    };
  case START_WITHDRAW_PAYMENT:
    return {
      ...state,
      loading: true,
    };
  case FINISH_WITHDRAW_PAYMENT:
    return {
      ...state,
      loading: false,
      data: {...state.data, balance: +state.data.balance - action.payload}
    };
  case FAIL_WITHDRAW_PAYMENT:
    return {
      ...state,
      loading: false,
    };
  default:
    return {...state};
  }
};

const withdrawal = (state = initialState, action) => {
  switch(action.type) {
  // case START_FETCHING_BALANCE:
  //   return {
  //     ...state,
  //     loading: true,
  //   };
  // case FINISH_FETCHING_USER_BALANCE:
  //   return {
  //     ...state,
  //     loading: false,
  //     data: action.payload
  //   };
  // case FAIL_FETCHING_USER_BALANCE:
  //   return {
  //     ...state,
  //     loading: false,
  //   };
  default:
    return {...state};
  }
};

const finance = combineReducers({balance, withdrawal});

export default finance;