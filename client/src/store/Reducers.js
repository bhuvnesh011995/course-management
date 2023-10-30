export const SET_USER_DATA = (state, { payload }) => ({
  ...state,
  userInfo: { ...state.userInfo, ...payload },
});
