import { createSlice } from "@reduxjs/toolkit";

//create variable that we want redux to store for us
//this object configure the redux "state"
const initialAuthState = {
  loggedIn: false,
  isAdmin: false,
  userData: null,
  userInfo: null,
  stay: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,

  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.userData = action.payload;
      state.isAdmin = action.payload.isAdmin;
    },

    logout: (state) => initialAuthState,

    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },

    stayLoggedIn: (state, action) => {
      state.stay = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
