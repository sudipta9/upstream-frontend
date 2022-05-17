import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const paymentHandler = createAsyncThunk(
  "payment/buy-subscription",
  async ({ planId }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/api/payment/buy-subscription`,
        { planId },
        { withCredentials: true }
      );

      if (response.status === 200) {
        // console.log(response.data);
        return thunkAPI.fulfillWithValue(response.data);
      } else {
        // console.log(response);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (err) {
      // console.log(err.response);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const verifyPayment = createAsyncThunk(
  "payment/verify-payment",
  async ({ orderId, planId }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/api/payment/verify-payment`,
        { orderId, planId },
        { withCredentials: true }
      );
      if (response.status === 200) {
        console.log(response.data);
        return thunkAPI.fulfillWithValue(response.data);
      } else {
        // console.log(response);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (err) {
      // console.log(err.response);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const paymentSlice = createSlice({
  name: "payments",
  initialState: {
    isPaymentFetching: false,
    isPaymentFailed: false,
    isPaymentSucceed: false,
    paymentErrorMessage: "",
    paymentSuccessMessage: "",
    isVerifyPaymentFetching: false,
    isVerifyPaymentFailed: false,
    isVerifyPaymentSucceed: false,
    verifyPaymentErrorMessage: "",
    verifyPaymentSuccessMessage: "",
  },
  reducers: {
    clearPaymentHandlerState: (state) => {
      state.isPaymentFetching = false;
      state.isPaymentFailed = false;
      state.isPaymentSucceed = false;
      return state;
    },
    clearPaymentVerifyState: (state) => {
      state.isVerifyPaymentFetching = false;
      state.isVerifyPaymentFailed = false;
      state.isVerifyPaymentSucceed = false;
      return state;
    },
  },
  extraReducers: {
    [paymentHandler.pending]: (state) => {
      state.isPaymentFetching = true;
    },
    [paymentHandler.rejected]: (state, { payload }) => {
      state.isPaymentFetching = false;
      state.isPaymentFailed = true;
      state.isPaymentSucceed = false;
      state.paymentErrorMessage = payload.msg;
    },
    [paymentHandler.fulfilled]: (state, { payload }) => {
      state.isPaymentFetching = false;
      state.isPaymentFailed = false;
      state.isPaymentSucceed = true;
      state.paymentSuccessMessage = payload.data;
    },
    [verifyPayment.pending]: (state) => {
      state.isVerifyPaymentFetching = true;
    },
    [verifyPayment.rejected]: (state, { payload }) => {
      state.isVerifyPaymentFetching = false;
      state.isVerifyPaymentFailed = true;
      state.isVerifyPaymentSucceed = false;
      state.verifyPaymentErrorMessage = payload.msg;
    },
    [verifyPayment.fulfilled]: (state, { payload }) => {
      state.isVerifyPaymentFetching = false;
      state.isVerifyPaymentFailed = false;
      state.isVerifyPaymentSucceed = true;
      state.verifyPaymentSuccessMessage = payload.data;
    },
  },
});

export const { clearPaymentHandlerState, clearPaymentVerifyState } =
  paymentSlice.actions;
export const paymentSelector = (state) => state.payments;
