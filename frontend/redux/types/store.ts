import { ProfileState } from './profile';
import { FinanceState } from './finance';


export type StoreState = Record<string, unknown>;

export type StoreAction = { type: string };

export type StoreDispatch = {
  <T extends StoreAction>(action: T): T;
  <T extends StoreAsyncAction<unknown, never>>(action: T): ReturnType<T>;
};
export type StoreAsyncAction<T = void, S extends StoreState = StoreState> = (
  dispatch: StoreDispatch,
  getState: StoreGetState<S>,
) => Promise<T>;
export type StoreGetState<S extends StoreState = StoreState> = () => S;


export type AppStoreState = {
  profile: ProfileState,
  finance: FinanceState
}

export type AppStoreAsyncAction<T = void> = StoreAsyncAction<T, AppStoreState>;