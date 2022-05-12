import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSubscription = createAsyncThunk(
  "api/get-subscription",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/api/get-subscription`,
        { withCredentials: true }
      );

      if (response.status === 200)
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const subscriptionSlice = createSlice({
  name: "subscriptions",
  initialState: {
    isGetSubscriptionFetching: false,
    isGetSubscriptionRejected: false,
    isGetSubscriptionSuccess: false,
    isSubscribed: false,
  },
  reducers: {
    clearGetSubscriptionState: (state) => {
      state.isGetSubscriptionFetching = false;
      state.isGetSubscriptionRejected = false;
      state.isGetSubscriptionSuccess = false;
      return state;
    },
  },
  extraReducers: {
    [getSubscription.pending]: (state) => {
      state.isGetSubscriptionFetching = true;
    },
    [getSubscription.rejected]: (state) => {
      state.isGetSubscriptionFetching = false;
      state.isGetSubscriptionRejected = true;
    },
    [getSubscription.fulfilled]: (state, { payload }) => {
      state.isGetSubscriptionFetching = true;
      state.isGetSubscriptionSuccess = true;
      state.isSubscribed = payload.isSubscribed;
    },
  },
});

export const { clearGetSubscriptionState } = subscriptionSlice.actions;
export const subscriptionSelector = (state) => state.subscriptions;
