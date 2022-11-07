import { createSlice } from "@reduxjs/toolkit";

//create variable that we want redux to store for us
//this object configure the redux "state"
const initialAuthState = {
  loggedIn: false,
  isAdmin: false,
  userData: null,
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,

  reducers: {
    login(state, action) {
      state.loggedIn = true;
      // better to verify the payload
      state.isAdmin = action.payload.isAdmin;
      state.userData = action.payload;
    },
    /*
        we will call this function when we logged out
        to update redux "state" that the user logged out.
        if we need to reset the state this is the simpler way
    */
    logout: (state) => initialAuthState,
    // logout(state) {
    //   state.loggedIn = false;
    //   state.userData = null;
    // },
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
