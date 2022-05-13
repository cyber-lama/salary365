import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppStoreState } from '../types/store';

import { fetchUserProfile } from '../actions/profile';


export const useUserProfile = () => {
  const profile = useSelector((state: AppStoreState) => {
    return state.profile;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile.data && !profile.error) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, profile.data, profile.error]);

  return profile;
};





