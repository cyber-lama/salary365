import {
  START_FETCHING_USER_PROFILE,
  FINISH_FETCHING_USER_PROFILE,
  FAIL_FETCHING_USER_PROFILE
} from '../const/profile';

const profile = (state = {
  data: null,
  loading: false,
  error: null
}, action) => {
  switch(action.type) {
  case START_FETCHING_USER_PROFILE:
    return {
      ...state,
      loading: true,
    };
  case FINISH_FETCHING_USER_PROFILE:
    return {
      ...state,
      loading: false,
      data: action.payload
    };
  case FAIL_FETCHING_USER_PROFILE:
    return {
      ...state,
      loading: false,
    };
  default:
    return {...state};
  }
};

export default profile;