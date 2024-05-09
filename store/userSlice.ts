import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { UserInfo } from '../interfaces';

export interface UserState {
  userInfo: UserInfo;
  authenticated: boolean;
}

const initialState: UserState = {
  userInfo: { id: 0, username: '' },
  authenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserAction: (state, action: PayloadAction<{ user: UserInfo }>) => {
      state.userInfo = action.payload.user;
    },
    updateUserAuthentication: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});

export const { updateUserAction, updateUserAuthentication } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
