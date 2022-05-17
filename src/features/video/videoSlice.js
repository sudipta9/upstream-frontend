import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getVideosList = createAsyncThunk(
  "videos/get-videos-list",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/api/videos/get-videos-list`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        return thunkAPI.fulfillWithValue(response.data);
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getVideoData = createAsyncThunk(
  "videos/watch/:id",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${
          process.env.SERVER_URI
            ? process.env.SERVER_URI
            : "http://127.0.0.1:5000"
        }/api/videos/watch/${id}`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        console.log(response.data);
        return thunkAPI.fulfillWithValue(response.data);
      } else {
        console.log(response.data);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const videoSlice = createSlice({
  name: "api/videos",
  initialState: {
    isVideoListFetching: false,
    isVideoListFetchingFailed: false,
    isVideoListFetchingSuccess: false,
    videoListFetchingErrorMsg: "",
    videosData: null,
    isVideoDataFetching: false,
    isVideoDataFetchingFailed: false,
    isVideoDataFetchingSuccess: false,
    videoDataFetchingErrorMsg: "",
    videoData: null,
  },
  reducers: {
    clearVideoFetchingState: (state) => {
      state.isVideoListFetching = false;
      state.isVideoListFetchingFailed = false;
      state.isVideoListFetchingSuccess = false;
      return state;
    },
    clearVideoDataFetchingState: (state) => {
      state.isVideoDataFetching = false;
      state.isVideoDataFetchingFailed = false;
      state.isVideoDataFetchingSuccess = false;
      return state;
    },
  },
  extraReducers: {
    [getVideosList.pending]: (state) => {
      state.isVideoListFetching = true;
    },
    [getVideosList.fulfilled]: (state, { payload }) => {
      state.isVideoListFetching = false;
      state.isVideoListFetchingSuccess = true;
      state.videosData = payload.videosData;
    },
    [getVideosList.rejected]: (state, { payload }) => {
      state.isVideoListFetching = false;
      state.isVideoListFetchingFailed = true;
      state.videoListFetchingErrorMsg = payload.msg;
    },
    [getVideoData.pending]: (state) => {
      state.isVideoDataFetching = true;
    },
    [getVideoData.fulfilled]: (state, { payload }) => {
      state.isVideoDataFetching = false;
      state.isVideoDataFetchingSuccess = true;
      state.videoData = payload.data;
    },
    [getVideoData.rejected]: (state, { payload }) => {
      state.isVideoDataFetching = false;
      state.isVideoDataFetchingFailed = true;
      state.videoDataFetchingErrorMsg = payload.msg
        ? payload.msg
        : "Something Happened";
    },
  },
});

export const { clearVideoFetchingState, clearVideoDataFetchingState } =
  videoSlice.actions;
export const videoSelector = (state) => state.videos;
