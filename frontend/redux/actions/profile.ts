
import {
  START_FETCHING_USER_PROFILE,
  FINISH_FETCHING_USER_PROFILE,
  FAIL_FETCHING_USER_PROFILE
} from '../const/profile';
import { Profile } from '../types/profile';
import { AppStoreAsyncAction } from '../types/store';

const mockedUserData = {
  'email': 'test@email',
  'fname': 'Иван',
  'lname': 'Пупкин',
  'oname': 'Петрович',
  'birth_date': new Date('2022-04-27T07:41:02.409Z').toDateString(),
  'birth_place': 'кукуево',
  'passport_series': '55 55',
  'passport_number': '999999',
  'passport_issued_by': 'паспортист',
  'passport_issued_date': new Date('2022-04-27T07:41:02.409Z').toDateString(),
  'checking_account': 'string',
  'correspondent_account': 'string',
  'bank_name': 'string',
  'bik': 'string',
  'client_inn': 'string',
  'client_kpp': 'string',
  'recipient': 'string',
  'company_name': 'string',
  'position': 'string',
  'salary': 50000
};

type StartFetchingProfileAction = {
  type: typeof START_FETCHING_USER_PROFILE;
};

type FinishFetchingProfileAction = {
  type: typeof FINISH_FETCHING_USER_PROFILE;
  payload: Profile;
}

type FailFetchingProfileAction = {
  type: typeof FAIL_FETCHING_USER_PROFILE;
  payload: ApiError;
};


function startFetchingUserProfile(): StartFetchingProfileAction {
  return {
    type: START_FETCHING_USER_PROFILE,
  };
}
function finishFetchingUserProfile(profile: Profile): FinishFetchingProfileAction {
  return {
    type: FINISH_FETCHING_USER_PROFILE,
    payload: profile,
  };
}
function failFetchingUserProfile(error): FailFetchingProfileAction {
  return {
    type: FAIL_FETCHING_USER_PROFILE,
    payload: error
  };
}

export function fetchUserProfile(): AppStoreAsyncAction {
  return async (dispatch): Promise<void> => {
    try {
      dispatch(startFetchingUserProfile());

      // const {
      //   data: { results: chats, next: nextPage },
      // } = await api.get<ChatsResponse>('/chats/order/list/', requestData);

      const data = mockedUserData;
      
      await new Promise(resolve => setTimeout(resolve, 2000));

      dispatch(finishFetchingUserProfile(data));
    } catch (e) {
      dispatch(failFetchingUserProfile(e));
    }
  };
}