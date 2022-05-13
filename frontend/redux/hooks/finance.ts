import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppStoreState } from '../types/store';

import { fetchBalance } from '../actions/finance';

export const useBalance = () => {
  const balance = useSelector((state: AppStoreState) => {
    return state.finance.balance;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!balance.data && !balance.error) {
      dispatch(fetchBalance());
    }
  }, [balance.data, balance.error, dispatch]);

  return balance;
};