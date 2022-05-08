import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSignIn = createAsyncThunk(
  "user/sign-in",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/user/sign-in`,
        { email, password },
        { withCredentials: true }
      );
      if (response.status === 200) {
        // localStorage.setItem(token)
        // console.log(response.data);
        return response.data;
      } else return thunkAPI.rejectWithValue(response.data);
    } catch (err) {
      console.clear();
      if (err.response.status === 401)
        return thunkAPI.rejectWithValue({
          msg: "Please enter correct email or password",
        });
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const userSignUp = createAsyncThunk(
  "user/sign-up",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/user/sign-up`,
        { email, password }
      );
      if (response.status === 201) return response.data;
      else return thunkAPI.rejectWithValue(response.data);
    } catch (err) {
      // console.log(err.response);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const isUserAuthenticated = createAsyncThunk(
  "user/isUserAuthenticated",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/user/is-authenticated`,
        { withCredentials: true }
      );
      if (response.status === 200)
        return thunkAPI.fulfillWithValue(response.data);
      else return thunkAPI.rejectWithValue(response.data);
    } catch (err) {
      console.clear();
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    _id: "",
    role: "admin" | "user" | "creator",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    isAuthenticated: false,
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: {
    [userSignIn.fulfilled]: (state, { payload }) => {
      // console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state._id = payload.user._id;
      state.role = payload.user.role;
    },
    [userSignIn.pending]: (state) => {
      state.isFetching = true;
    },
    [userSignIn.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.msg;
    },
    [userSignUp.fulfilled]: (state) => {
      state.isFetching = false;
      state.isSuccess = true;
      // console.log(payload);
    },
    [userSignUp.pending]: (state) => {
      state.isFetching = true;
    },
    [userSignUp.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.msg;
    },
    [isUserAuthenticated.fulfilled]: (state) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.isAuthenticated = true;
    },
    [isUserAuthenticated.pending]: (state) => {
      state.isFetching = true;
    },
    [isUserAuthenticated.rejected]: (state, { payload }) => {
      state.isError = true;
      state.errorMessage = payload.msg;
    },
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;
