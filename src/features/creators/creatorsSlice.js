import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const creatorSignIn = createAsyncThunk(
  "creator/sign-in",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/creator/sign-in`,
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200)
        return thunkAPI.fulfillWithValue(response.data);
      else return thunkAPI.rejectWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const forgetPassword = createAsyncThunk(
  "creator/forget-password",
  async ({ email, domain }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/creator/forget-password`,
        {
          email: email,
          domain: domain,
        }
      );
      if (response.status === 200)
        return thunkAPI.fulfillWithValue(response.data);
      else return thunkAPI.rejectWithValue(response.data);
    } catch (err) {
      // console.log(err.response.data);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const checkResetPasswordToken = createAsyncThunk(
  "creator/check-reset-password-token",
  async ({ token }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/creator/check-reset-password-token`,
        { params: { token: token } }
      );
      if (response.status === 200) {
        console.log(response.data);
        return thunkAPI.fulfillWithValue(true);
      } else return thunkAPI.rejectWithValue(response.data);
    } catch (err) {
      console.clear();
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "creator/reset-password",
  async ({ token, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/creator/reset-password`,
        { password: password },
        { params: { token: token } }
      );
      if (response.status === 201)
        return thunkAPI.fulfillWithValue(response.data);
      else return thunkAPI.rejectWithValue(response.data);
    } catch (err) {
      console.log(err.response);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const uploadVideo = createAsyncThunk(
  "creator/upload",
  async ({ data, setUploaded }, thunkAPI) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/creator/upload`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
          onUploadProgress: (e) => {
            setUploaded(Math.floor((e.loaded / e.total) * 100));
          },
        }
      );
      if (response.status === 201) {
        return thunkAPI.fulfillWithValue(response.data);
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      // console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const creatorSlice = createSlice({
  name: "creator",
  initialState: {
    _id: "",
    role: "admin" | "user" | "creator",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    doneForgetPasswordMsg: "",
    passwordChangeMsg: "",
    isUploading: false,
    isUploadFailed: false,
    isUploadSuccess: false,
    uploadingError: "",
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.errorMessage = "";
      return state;
    },
    clearUploadingState: (state) => {
      state.isUploading = false;
      state.isUploadFailed = false;
      state.isUploadSuccess = false;
      return state;
    },
  },
  extraReducers: {
    [creatorSignIn.fulfilled]: (state, { payload }) => {
      // console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state._id = payload.user._id;
      state.role = payload.user.role;
    },
    [creatorSignIn.pending]: (state) => {
      state.isFetching = true;
    },
    [creatorSignIn.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.msg;
    },
    [forgetPassword.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.doneForgetPasswordMsg = payload.msg;
    },
    [forgetPassword.pending]: (state) => {
      state.isFetching = true;
    },
    [forgetPassword.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.msg;
    },
    [checkResetPasswordToken.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
    },
    [checkResetPasswordToken.pending]: (state) => {
      state.isFetching = true;
    },
    [checkResetPasswordToken.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.msg;
    },
    [resetPassword.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.passwordChangeMsg = payload.msg;
      state.role = payload.user.role;
    },
    [resetPassword.pending]: (state) => {
      state.isFetching = true;
    },
    [resetPassword.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.msg;
    },
    [uploadVideo.fulfilled]: (state, { payload }) => {
      state.isUploading = false;
      state.isUploadSuccess = true;
    },
    [uploadVideo.pending]: (state) => {
      state.isUploading = true;
    },
    [uploadVideo.rejected]: (state, { payload }) => {
      state.isUploading = false;
      state.isUploadFailed = true;
      state.uploadingError = payload.msg;
    },
  },
});

export const { clearState, clearUploadingState } = creatorSlice.actions;

export const creatorSelector = (state) => state.creator;
