import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const handlePayment = createAsyncThunk(
  "payment/buy-subscription",
  async (planId, thunkAPI) => {
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
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      // console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const verifyPayment = createAsyncThunk(
  "payment/verify",
  async ({ paymentId }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/api/payment/verify`,
        { paymentId },
        { withCredentials: true }
      );
      if (response.status === 200) {
        // console.log(response.data);
        return thunkAPI.fulfillWithValue(response.data);
      } else {
        // console.log(response.data);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    isPaymentFetching: false,
    isPaymentError: false,
    isPaymentSuccess: false,
    paymentErrorMessage: "",
    paymentSuccessMessage: "",
    isVerifyPaymentFetching: false,
    isVerifyPaymentError: false,
    isVerifyPaymentSuccess: false,
    verifyPaymentErrorMessage: "",
    verifyPaymentSuccessMessage: "",
  },

  reducers: {
    clearState: (state) => {
      state.isPaymentFetching = false;
      state.isPaymentError = false;
      state.isPaymentSuccess = false;
      state.isVerifyPaymentFetching = false;
      state.isVerifyPaymentError = false;
      state.isVerifyPaymentSuccess = false;
      return state;
    },
  },

  extraReducers: {
    [handlePayment.pending]: (state) => {
      state.isPaymentFetching = true;
    },
    [handlePayment.rejected]: (state, { payload }) => {
      state.isPaymentFetching = false;
      state.isPaymentError = true;
      state.paymentErrorMessage = payload.msg;
    },
    [handlePayment.fulfilled]: (state, { payload }) => {
      state.isPaymentFetching = false;
      state.isPaymentError = false;
      state.isPaymentSuccess = true;
      state.paymentSuccessMessage = payload.data;
    },
    [verifyPayment.pending]: (state) => {
      state.isVerifyPaymentFetching = true;
    },
    [verifyPayment.rejected]: (state, { payload }) => {
      state.isVerifyPaymentFetching = false;
      state.isVerifyPaymentError = true;
      state.verifyPaymentErrorMessage = payload.msg;
    },
    [verifyPayment.fulfilled]: (state, { payload }) => {
      state.isVerifyPaymentFetching = false;
      state.isVerifyPaymentError = false;
      state.isVerifyPaymentSuccess = true;
      state.verifyPaymentSuccessMessage = payload.data;
    },
  },
});

export const { clearState } = paymentSlice.actions;

export const paymentSelector = (state) => state.payment;
