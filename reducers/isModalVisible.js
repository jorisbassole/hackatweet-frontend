import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { signIn: false, signUp: false },
};

export const isModalVisibleSlice = createSlice({
  name: 'isModalVisible',
  initialState,
  reducers: {
    showSignUp: (state, action) => {
      state.value.signIn = false;
      state.value.signUp = true;
    },
    showSignIn: (state, action) => {
        state.value.signIn = true;
        state.value.signUp = false;
    },
    hide: (state, action) => {
        state.value.signIn = false;
        state.value.signUp = false;
      },
  },
});

export const { showSignUp, showSignIn, hide } = isModalVisibleSlice.actions;
export default isModalVisibleSlice.reducer;

