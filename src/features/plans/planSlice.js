import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlans = createAsyncThunk(
  "api/plans/get-plans",
  async (data, thunkApi) => {
    try {
      const response = await axios.get(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/api/plans/get-plans`,
        { withCredentials: true }
      );
      if (response.status === 200)
        return thunkApi.fulfillWithValue(response.data);
      else return thunkApi.rejectWithValue(response.data);
    } catch (err) {
      if (err.response.status === 401)
        return thunkApi.rejectWithValue({ msg: "Unauthorized" });
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const plansSlice = createSlice({
  name: "plans",
  initialState: {
    isPlanFetching: false,
    isPlanSuccess: false,
    isPlanError: false,
    planErrorMessage: "",
    plans: [],
  },
  reducers: {
    planClearState: (state) => {
      state.isPlanError = false;
      state.isPlanSuccess = false;
      state.isPlanFetching = false;
      state.planErrorMessage = "";
      return state;
    },
  },
  extraReducers: {
    [getPlans.fulfilled]: (state, { payload }) => {
      state.isPlanFetching = false;
      state.isPlanSuccess = true;
      state.plans = payload.data;
    },
    [getPlans.pending]: (state) => {
      state.isPlanFetching = true;
    },
    [getPlans.rejected]: (state, { payload }) => {
      state.isPlanFetching = false;
      state.isPlanError = true;
      state.planErrorMessage = payload.msg;
    },
  },
});

export const { planClearState } = plansSlice.actions;

export const plansSelector = (state) => state.plans;
