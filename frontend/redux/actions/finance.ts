
import {
  START_FETCHING_BALANCE,
  FINISH_FETCHING_BALANCE,
  FAIL_FETCHING_BALANCE,
  START_WITHDRAW_PAYMENT,
  FINISH_WITHDRAW_PAYMENT,
  FAIL_WITHDRAW_PAYMENT,
} from '../const/finance';

import { Balance, Withdrawal } from '../types/finance';
import { AppStoreAsyncAction } from '../types/store';

const mockedBalance = {
  'from': new Date('2022-04-28').toDateString(),
  'till': new Date('2022-04-28').toDateString(),
  'average_day_salary': 'string',
  'worked_days_count': 0,
  'amount_total_debet': 'string',
  'amount_total_credit': 'string',
  'balance': '14500.78',
  'operations_history': [
    {
      'transaction_id': 'string',
      'payment_method': 'string',
      'amount': 'string',
      'executed': new Date('2022-04-28').toDateString(),
      'created': new Date('2022-04-28').toDateString(),
      'commission': 'string'
    }
  ],
  'message_boxes': [
    {
      'type': 0,
      'title': 'string',
      'description': 'string'
    }
  ],
  'num_days_in_debt': 0,
  'working_days': 0,
  'limit_coefficient': 'string',
  'max_withdrawal_amount': 'string',
  'salary': 'string',
  'details': [
    {
      'title': 'string',
      'value': 'string'
    }
  ]
};

type StartFetchingBalanceAction = {
  type: typeof START_FETCHING_BALANCE;
};

type FinishFetchingBalanceAction = {
  type: typeof FINISH_FETCHING_BALANCE;
  payload: Balance;
}

type FailFetchingBalanceAction = {
  type: typeof FAIL_FETCHING_BALANCE;
  payload: ApiError;
};


type StartWithdrawPaymentAction = {
  type: typeof START_WITHDRAW_PAYMENT;
};

type FinishWithdrawPaymentAction = {
  type: typeof FINISH_WITHDRAW_PAYMENT;
  payload: number;
}

type FailWithdrawPaymentAction = {
  type: typeof FAIL_WITHDRAW_PAYMENT;
  payload: ApiError;
};

function startFetchingBalance(): StartFetchingBalanceAction {
  return {
    type: START_FETCHING_BALANCE,
  };
}
function finishFetchingBalance(balance: Balance): FinishFetchingBalanceAction {
  return {
    type: FINISH_FETCHING_BALANCE,
    payload: balance,
  };
}
function failFetchingBalance(error): FailFetchingBalanceAction {
  return {
    type: FAIL_FETCHING_BALANCE,
    payload: error
  };
}

export function fetchBalance(): AppStoreAsyncAction {
  return async (dispatch): Promise<void> => {
    try {
      dispatch(startFetchingBalance());

      // const {
      //   data: { results: chats, next: nextPage },
      // } = await api.get<ChatsResponse>('/chats/order/list/', requestData);

      const data = mockedBalance;

      dispatch(finishFetchingBalance(data));
    } catch (e) {
      dispatch(failFetchingBalance(e));
    }
  };
}




function startWithdrawPayment(): StartWithdrawPaymentAction {
  return {
    type: START_WITHDRAW_PAYMENT,
  };
}
function finishWithdrawPayment(amount: number): FinishWithdrawPaymentAction {
  return {
    type: FINISH_WITHDRAW_PAYMENT,
    payload: amount,
  };
}
function failWithdrawPayment(error): FailWithdrawPaymentAction {
  return {
    type: FAIL_WITHDRAW_PAYMENT,
    payload: error
  };
}

export function withdrawPayment(amount: number): AppStoreAsyncAction {
  return async (dispatch): Promise<void> => {
    try {
      dispatch(startWithdrawPayment());

      // const {
      //   data: { results: chats, next: nextPage },
      // } = await api.get<ChatsResponse>('/chats/order/list/', requestData);

      await new Promise(resolve => setTimeout(resolve, 2000));

      dispatch(finishWithdrawPayment(amount));
    } catch (e) {
      dispatch(failWithdrawPayment(e));
    }
  };
}